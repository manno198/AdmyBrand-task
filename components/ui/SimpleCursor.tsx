import { useEffect, useRef } from 'react';

const SimpleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cursor trail variables
    let mouseX = 0;
    let mouseY = 0;
    const trail: { x: number; y: number; age: number }[] = [];
    const maxTrailLength = 20;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation loop
    const animate = () => {
      // Add new point to trail
      trail.push({ x: mouseX, y: mouseY, age: 0 });

      // Remove old points
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trail
      trail.forEach((point, index) => {
        const alpha = (index / trail.length) * 0.8;
        const size = (index / trail.length) * 8 + 2;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 62, 50, ${alpha})`;
        ctx.fill();

        // Add some variation with other colors
        if (index % 3 === 0) {
          ctx.beginPath();
          ctx.arc(point.x + 2, point.y + 2, size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 95, 96, ${alpha * 0.7})`;
          ctx.fill();
        }
      });

      // Age the trail
      trail.forEach(point => {
        point.age += 1;
      });

      requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default SimpleCursor; 