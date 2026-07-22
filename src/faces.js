/**
 * Face content generators for the 3D portfolio cube.
 * Each function creates and returns a fully-styled DOM element
 * for one face of the cube.
 */

export function createFaces() {
  return {
    front:  createAboutFace(),
    right:  createProjectsFace(),
    left:   createSkillsFace(),
    back:   createContactFace(),
    top:    createExperienceFace(),
    bottom: createSocialFace(),
  };
}


/* ==================== About (Front) ==================== */

function createAboutFace() {
  const face = document.createElement('div');
  face.className = 'face face--front';
  face.id = 'face-about';
  face.innerHTML = `
    <span class="face-label">About</span>
    <div class="about-content">
      <div class="about-avatar">P</div>
      <h1 class="about-name">Parth</h1>
      <p class="about-title">Full Stack Developer</p>
      <p class="about-tagline">Building digital experiences with clean code &amp; creative design</p>
    </div>
  `;
  return face;
}


/* ==================== Projects (Right) ==================== */

function createProjectsFace() {
  const face = document.createElement('div');
  face.className = 'face face--right';
  face.id = 'face-projects';
  face.innerHTML = `
    <span class="face-label">Projects</span>
    <div class="projects-list">
      <div class="project-card">
        <h3>StudySpot</h3>
        <p>Collaborative study platform</p>
        <div class="project-tags">
          <span>React</span>
          <span>Python</span>
          <span>FastAPI</span>
        </div>
      </div>
      <div class="project-card">
        <h3>Portfolio Cube</h3>
        <p>Interactive 3D portfolio</p>
        <div class="project-tags">
          <span>CSS 3D</span>
          <span>Vanilla JS</span>
        </div>
      </div>
      <div class="project-card">
        <h3>DevConnect</h3>
        <p>Developer social network</p>
        <div class="project-tags">
          <span>Next.js</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  `;
  return face;
}


/* ==================== Skills (Left) ==================== */

function createSkillsFace() {
  const skills = [
    { icon: '⚡', name: 'JavaScript' },
    { icon: '⚛️', name: 'React' },
    { icon: '🐍', name: 'Python' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🎨', name: 'CSS' },
    { icon: '🔀', name: 'Git' },
    { icon: '🗄️', name: 'SQL' },
    { icon: '🐳', name: 'Docker' },
    { icon: '☁️', name: 'AWS' },
  ];

  const face = document.createElement('div');
  face.className = 'face face--left';
  face.id = 'face-skills';
  face.innerHTML = `
    <span class="face-label">Skills</span>
    <div class="skills-grid">
      ${skills
        .map(
          (s) => `
        <div class="skill-item">
          <span class="skill-icon">${s.icon}</span>
          <span class="skill-name">${s.name}</span>
        </div>`
        )
        .join('')}
    </div>
  `;
  return face;
}


/* ==================== Contact (Back) ==================== */

function createContactFace() {
  const face = document.createElement('div');
  face.className = 'face face--back';
  face.id = 'face-contact';
  face.innerHTML = `
    <span class="face-label">Contact</span>
    <div class="contact-content">
      <h2>Let's Connect</h2>
      <p>Have an idea? Let's build<br />something amazing together.</p>
      <a href="mailto:parth@example.com" class="contact-link">
        ✉️ parth@example.com
      </a>
      <a href="#" class="contact-link">
        💬 Send a Message
      </a>
    </div>
  `;
  return face;
}


/* ==================== Experience (Top) ==================== */

function createExperienceFace() {
  const face = document.createElement('div');
  face.className = 'face face--top';
  face.id = 'face-experience';
  face.innerHTML = `
    <span class="face-label">Experience</span>
    <div class="timeline">
      <div class="timeline-item">
        <span class="timeline-year">2025</span>
        <div class="timeline-info">
          <h3>Software Developer</h3>
          <p>TechCorp Inc.</p>
        </div>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">2024</span>
        <div class="timeline-info">
          <h3>Frontend Intern</h3>
          <p>StartupX Labs</p>
        </div>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">2023</span>
        <div class="timeline-info">
          <h3>Freelance Dev</h3>
          <p>Self-employed</p>
        </div>
      </div>
    </div>
  `;
  return face;
}


/* ==================== Social (Bottom) ==================== */

function createSocialFace() {
  const face = document.createElement('div');
  face.className = 'face face--bottom';
  face.id = 'face-social';
  face.innerHTML = `
    <span class="face-label">Social</span>
    <div class="social-content">
      <span class="social-heading">Find Me Online</span>
      <div class="social-grid">
        <a href="https://github.com" target="_blank" rel="noopener" class="social-link">
          <span class="social-link-icon">🐙</span> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link">
          <span class="social-link-icon">💼</span> LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link">
          <span class="social-link-icon">🐦</span> Twitter
        </a>
        <a href="#" class="social-link">
          <span class="social-link-icon">📄</span> Resume
        </a>
      </div>
    </div>
  `;
  return face;
}
