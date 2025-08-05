import { useEffect, useRef } from 'react';
import { Renderer, Transform, Vec3, Color, Geometry, Program, Mesh } from 'ogl';
import './Ribbons.css';

const Ribbons = ({
  colors = ['#FF3E32', '#005F60', '#A8CC85'],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 20,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const renderer = new Renderer({
        dpr: window.devicePixelRatio || 2,
        alpha: true
      });
      const gl = renderer.gl;

      gl.clearColor(0, 0, 0, 0);

      gl.canvas.style.position = 'absolute';
      gl.canvas.style.top = '0';
      gl.canvas.style.left = '0';
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      container.appendChild(gl.canvas);

      const scene = new Transform();
      const cursors = [];

      const vertex = `
        attribute vec3 position;
        attribute vec2 uv;
        uniform float uTime;
        uniform float uSize;
        varying vec2 vUV;
        
        void main() {
          vUV = uv;
          vec4 pos = vec4(position, 1.0);
          pos.xy += sin(uTime + position.x * 10.0) * 0.01;
          gl_Position = pos;
          gl_PointSize = uSize;
        }
      `;

      const fragment = `
        precision highp float;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUV;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          gl_FragColor = vec4(uColor, uOpacity * alpha);
        }
      `;

      function resize() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
      }

      window.addEventListener('resize', resize);

      colors.forEach((color, index) => {
        const spring = baseSpring + (Math.random() - 0.5) * 0.05;
        const friction = baseFriction + (Math.random() - 0.5) * 0.05;
        const size = baseThickness + (Math.random() - 0.5) * 10;
        const mouseOffset = new Vec3(
          (index - Math.floor(colors.length / 2)) * offsetFactor,
          (Math.random() - 0.5) * 0.1,
          0
        );

        const cursor = {
          spring,
          friction,
          mouseVelocity: new Vec3(),
          mouseOffset,
          points: [],
        };

        // Create points for this cursor
        for (let i = 0; i < pointCount; i++) {
          cursor.points.push(new Vec3());
        }

        // Create geometry for points
        const positions = new Float32Array(pointCount * 3);
        const uvs = new Float32Array(pointCount * 2);
        
        for (let i = 0; i < pointCount; i++) {
          positions[i * 3] = 0;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = 0;
          uvs[i * 2] = i / (pointCount - 1);
          uvs[i * 2 + 1] = 0;
        }

        const geometry = new Geometry(gl, {
          position: { size: 3, data: positions },
          uv: { size: 2, data: uvs },
        });

        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            uColor: { value: new Color(color) },
            uOpacity: { value: 0.8 },
            uTime: { value: 0.0 },
            uSize: { value: size },
          },
          transparent: true,
          depthTest: false,
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);
        
        cursor.mesh = mesh;
        cursor.geometry = geometry;
        cursor.program = program;
        cursors.push(cursor);
      });

      resize();

      const mouse = new Vec3();

      function updateMouse(e) {
        let x, y;
        const rect = container.getBoundingClientRect();
        if (e.changedTouches && e.changedTouches.length) {
          x = e.changedTouches[0].clientX - rect.left;
          y = e.changedTouches[0].clientY - rect.top;
        } else {
          x = e.clientX - rect.left;
          y = e.clientY - rect.top;
        }
        const width = container.clientWidth;
        const height = container.clientHeight;
        mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);
      }

      container.addEventListener('mousemove', updateMouse);
      container.addEventListener('touchstart', updateMouse);
      container.addEventListener('touchmove', updateMouse);

      const tmp = new Vec3();
      let frameId;
      let lastTime = performance.now();

      function update() {
        frameId = requestAnimationFrame(update);
        const currentTime = performance.now();
        const dt = currentTime - lastTime;
        lastTime = currentTime;

        cursors.forEach(cursor => {
          tmp.copy(mouse)
            .add(cursor.mouseOffset)
            .sub(cursor.points[0])
            .multiply(cursor.spring);
          cursor.mouseVelocity.add(tmp).multiply(cursor.friction);
          cursor.points[0].add(cursor.mouseVelocity);

          for (let i = 1; i < cursor.points.length; i++) {
            if (isFinite(maxAge) && maxAge > 0) {
              const segmentDelay = maxAge / (cursor.points.length - 1);
              const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
              cursor.points[i].lerp(cursor.points[i - 1], alpha);
            } else {
              cursor.points[i].lerp(cursor.points[i - 1], 0.9);
            }
          }

          // Update geometry positions
          const positions = new Float32Array(cursor.points.length * 3);
          for (let i = 0; i < cursor.points.length; i++) {
            positions[i * 3] = cursor.points[i].x;
            positions[i * 3 + 1] = cursor.points[i].y;
            positions[i * 3 + 2] = cursor.points[i].z;
          }
          
          if (cursor.geometry.attributes.position) {
            cursor.geometry.attributes.position.data = positions;
            cursor.geometry.attributes.position.needsUpdate = true;
          }

          if (cursor.program.uniforms.uTime) {
            cursor.program.uniforms.uTime.value = currentTime * 0.001;
          }
        });

        renderer.render({ scene });
      }

      update();

      return () => {
        window.removeEventListener('resize', resize);
        container.removeEventListener('mousemove', updateMouse);
        container.removeEventListener('touchstart', updateMouse);
        container.removeEventListener('touchmove', updateMouse);
        cancelAnimationFrame(frameId);
        if (gl.canvas && gl.canvas.parentNode === container) {
          container.removeChild(gl.canvas);
        }
      };
    } catch (error) {
      console.error('Error initializing Ribbons cursor effect:', error);
      // Fallback: create a simple CSS-based cursor effect
      const fallbackCursor = document.createElement('div');
      fallbackCursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, ${colors[0]}, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
      `;
      container.appendChild(fallbackCursor);

      const updateFallbackCursor = (e) => {
        fallbackCursor.style.left = e.clientX - 10 + 'px';
        fallbackCursor.style.top = e.clientY - 10 + 'px';
      };

      document.addEventListener('mousemove', updateFallbackCursor);

      return () => {
        document.removeEventListener('mousemove', updateFallbackCursor);
        if (fallbackCursor.parentNode) {
          fallbackCursor.parentNode.removeChild(fallbackCursor);
        }
      };
    }
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor
  ]);

  return (
    <div ref={containerRef} className="ribbons-container" />
  );
};

export default Ribbons; 