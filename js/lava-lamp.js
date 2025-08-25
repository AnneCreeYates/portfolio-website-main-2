class LavaLamp {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.blobs = [];
        this.numBlobs = 8;
        this.pointsPerBlob = 8;
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createBlob() {
        const averageBubbleRadius = Math.random() * 30 + 30;
        const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        return {
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + 5,
            radius: averageBubbleRadius,
            averageBubbleRadius,
            speedX: Math.random() * 1.5 - 0.75,
            speedY: -Math.random(),
            phaseOffsets: Array.from({ length: this.pointsPerBlob }, () => Math.random() * Math.PI * 2),
            color
        };
    }

    init() {
        this.blobs = Array.from({ length: this.numBlobs }, () => this.createBlob());
        this.animate();
    }

    drawBlob(blob, t) {
        const { x, y, averageBubbleRadius, phaseOffsets, color } = blob;
        const angleStep = (Math.PI * 2) / this.pointsPerBlob;

        this.ctx.beginPath();
        for (let i = 0; i < this.pointsPerBlob; i++) {
            const angle = i * angleStep;
            const wave = Math.sin(t * 0.002 + phaseOffsets[i]) * 5;
            const r = averageBubbleRadius + wave;
            const px = x + Math.cos(angle) * r;
            const py = y + Math.sin(angle) * r;
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    animate(t = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        // this.ctx.globalCompositeOperation = 'lighter';
        // this.ctx.filter = 'blur(5px)';

        this.blobs.forEach((blob, i) => {
            // Update position
            blob.x += blob.speedX;
            blob.y += blob.speedY;

            // Respawn if out of bounds
            if (blob.x < -100 || blob.x > this.canvas.width + 100 ||
                blob.y < -100 || blob.y > this.canvas.height + 100) {
                this.blobs[i] = this.createBlob();
            }

            // Draw organic blob
            this.drawBlob(blob, t);
        });

        this.ctx.restore();
        requestAnimationFrame((time) => this.animate(time));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.lava-lamp-canvas');
    if (canvas) new LavaLamp(canvas);
});
