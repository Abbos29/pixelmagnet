class Lenis {
    constructor(options = {}) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.smoothWheel = options.smoothWheel ?? !reducedMotion;
        this.wheelMultiplier = options.wheelMultiplier ?? 1.2;
        this.touchMultiplier = options.touchMultiplier ?? 1.1;
        this.duration = options.duration ?? 0.7;
        this.targetY = window.scrollY;
        this.currentY = window.scrollY;
        this.lerp = Math.max(0.16, Math.min(0.42, 1 / (this.duration * 6)));
        this.onWheel = this.onWheel.bind(this);

        if (this.smoothWheel) {
            window.addEventListener('wheel', this.onWheel, { passive: false });
        }
    }

    onWheel(event) {
        if (!this.smoothWheel) {
            return;
        }

        const multiplier = event.deltaMode === 1 ? this.touchMultiplier : this.wheelMultiplier;
        const nextY = this.targetY + (event.deltaY * multiplier);
        const maxY = document.documentElement.scrollHeight - window.innerHeight;
        this.targetY = Math.max(0, Math.min(nextY, Math.max(maxY, 0)));
        event.preventDefault();
    }

    raf() {
        this.currentY += (this.targetY - this.currentY) * this.lerp;
        if (Math.abs(this.targetY - this.currentY) < 0.2) {
            this.currentY = this.targetY;
        }
        window.scrollTo(0, this.currentY);
    }

    destroy() {
        if (this.smoothWheel) {
            window.removeEventListener('wheel', this.onWheel);
        }
    }
}

export default Lenis;
