/**
 * DragController — handles mouse & touch drag-to-rotate
 * with momentum / inertia on release.
 */

export class DragController {
  /**
   * @param {HTMLElement} hitArea  — the element that receives pointer events (usually document.body)
   * @param {HTMLElement} cube    — the .cube element whose CSS transform we control
   */
  constructor(hitArea, cube) {
    this.hitArea = hitArea;
    this.cube = cube;

    // Current rotation (degrees)
    this.rotX = -20;
    this.rotY = -30;

    // Velocity for momentum
    this.velX = 0;
    this.velY = 0;

    // Drag state
    this.isDragging = false;
    this.prevX = 0;
    this.prevY = 0;

    // Tuning
    this.sensitivity = 0.4;
    this.friction = 0.93;
    this.minVelocity = 0.001;
    this.maxRotX = 85; // prevent full vertical flip

    // First-drag callback
    this._firstDrag = true;
    this._onFirstDrag = null;

    this._bindEvents();
    this._loop();
  }

  /** Register a callback that fires once on the first drag (used to hide the hint). */
  onFirstDrag(callback) {
    this._onFirstDrag = callback;
  }

  /* ==================== Event Binding ==================== */

  _bindEvents() {
    // Mouse
    this.hitArea.addEventListener('mousedown', (e) =>
      this._down(e.clientX, e.clientY, e)
    );
    window.addEventListener('mousemove', (e) =>
      this._move(e.clientX, e.clientY)
    );
    window.addEventListener('mouseup', () => this._up());

    // Touch
    this.hitArea.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        const t = e.touches[0];
        this._down(t.clientX, t.clientY, e);
      },
      { passive: false }
    );

    window.addEventListener(
      'touchmove',
      (e) => {
        if (this.isDragging) e.preventDefault();
        const t = e.touches[0];
        this._move(t.clientX, t.clientY);
      },
      { passive: false }
    );

    window.addEventListener('touchend', () => this._up());
  }

  /* ==================== Pointer Handlers ==================== */

  _down(x, y, event) {
    // Allow clicks on links inside faces
    if (event.target && event.target.closest && event.target.closest('a')) {
      return;
    }

    this.isDragging = true;
    this.prevX = x;
    this.prevY = y;
    this.velX = 0;
    this.velY = 0;

    document.body.classList.add('dragging');

    if (this._firstDrag && this._onFirstDrag) {
      this._firstDrag = false;
      this._onFirstDrag();
    }
  }

  _move(x, y) {
    if (!this.isDragging) return;

    const dx = x - this.prevX;
    const dy = y - this.prevY;

    // Velocity = last frame delta (used for momentum on release)
    this.velY = dx * this.sensitivity;
    this.velX = -dy * this.sensitivity;

    // Apply rotation directly for immediate feedback
    this.rotY += this.velY;
    this.rotX += this.velX;
    this.rotX = Math.max(-this.maxRotX, Math.min(this.maxRotX, this.rotX));

    this.prevX = x;
    this.prevY = y;
  }

  _up() {
    if (!this.isDragging) return;
    this.isDragging = false;
    document.body.classList.remove('dragging');
  }

  /* ==================== Animation Loop ==================== */

  _loop() {
    if (!this.isDragging) {
      // Coast with friction
      this.rotY += this.velY;
      this.rotX += this.velX;
      this.rotX = Math.max(-this.maxRotX, Math.min(this.maxRotX, this.rotX));

      this.velY *= this.friction;
      this.velX *= this.friction;

      // Kill tiny residual velocity
      if (Math.abs(this.velX) < this.minVelocity) this.velX = 0;
      if (Math.abs(this.velY) < this.minVelocity) this.velY = 0;
    }

    this.cube.style.transform = `rotateX(${this.rotX}deg) rotateY(${this.rotY}deg)`;

    requestAnimationFrame(() => this._loop());
  }
}
