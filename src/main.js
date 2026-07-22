/**
 * parthh.me — 3D Cube Portfolio
 * Main entry point
 */

import './style.css';
import { createFaces } from './faces.js';
import { DragController } from './drag.js';
import { initParticles } from './particles.js';


/* ==================== Build DOM ==================== */

const app = document.getElementById('app');

// 1. Particle background canvas
const particleCanvas = document.createElement('canvas');
particleCanvas.id = 'particle-canvas';
app.appendChild(particleCanvas);

// 2. Scene wrapper (provides CSS perspective)
const scene = document.createElement('div');
scene.className = 'scene';

// 3. The cube
const cube = document.createElement('div');
cube.className = 'cube';

// 4. Create all 6 faces and append
const faces = createFaces();
Object.values(faces).forEach((face) => cube.appendChild(face));

scene.appendChild(cube);
app.appendChild(scene);

// 5. Drag-to-explore hint
const hint = document.createElement('div');
hint.className = 'hint';
hint.innerHTML = '<span class="hint-icon">👆</span> Drag to explore';
app.appendChild(hint);


/* ==================== Initialise Systems ==================== */

// Particle starfield
initParticles(particleCanvas);

// Drag-to-rotate controller
const drag = new DragController(document.body, cube);

drag.onFirstDrag(() => {
  hint.classList.add('hidden');
  setTimeout(() => hint.remove(), 1200);
});