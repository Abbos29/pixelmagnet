class Lenis {
    constructor() {
        this.targetY = window.scrollY;
        this.currentY = window.scrollY;
        this.lerp = 0.1;
        this.onWheel = this.onWheel.bind(this);
        window.addEventListener('wheel', this.onWheel, { passive: false });
    }

    onWheel(event) {
        const nextY = this.targetY + event.deltaY;
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
        window.removeEventListener('wheel', this.onWheel);
    }
}

export default Lenis;
