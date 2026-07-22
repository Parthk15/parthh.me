/**
 * Particle Background — lightweight canvas-based floating particles
 * with subtle mouse-parallax for visual depth.
 */

export function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;
  let mouseX = 0;
  let mouseY = 0;

  const PARTICLE_COUNT = 80;
  const particles = [];

  /* ---- helpers ---- */

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * (width || window.innerWidth),
      y: Math.random() * (height || window.innerHeight),
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    };
  }

  /* ---- init ---- */

  function init() {
    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  /* ---- loop ---- */

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      // Subtle parallax from mouse position
      const px = (mouseX - width / 2) * 0.001 * p.size;
      const py = (mouseY - height / 2) * 0.001 * p.size;

      p.x += p.speedX + px;
      p.y += p.speedY + py;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  /* ---- events ---- */

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  init();
  animate();
}
