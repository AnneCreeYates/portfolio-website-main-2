import { createNoise2D } from 'simplex-noise';

class LavaLamp {
    constructor(canvas) {
        this.noise2D = createNoise2D();
        this.canvas = canvas;
        this.container = this.canvas.closest('.lava-lamp-container');
        this.ctx = canvas.getContext('2d');
        this.blobs = [];
        this.numBlobs = 3;
        this.pointsPerBlob = 6;
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        // this is for high-DPI screens, like Retina
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.canvas.offsetWidth * dpr;
        this.canvas.height = this.canvas.offsetHeight * dpr;
        this.ctx.scale(dpr, dpr);
    }

    createBlob() {
        const radius = Math.random() * 50 + 40; // Range: 40px to 100px
        const hue = Math.random() * 360;
        
        // Smaller blobs move faster
        // Larger radius (e.g., 100) = slower speed
        const speedY = -(1.2 - (radius / 100)); 

        return {
            radius: radius,
            x: Math.random() * this.canvas.offsetWidth,
            y: this.canvas.offsetHeight + radius,
            speedY: speedY,
            color: `hsl(${hue}, 80%, 60%)`,
            
            // NEW: Unique properties for varied movement and shape
            xOffset: Math.random() * 1000,
            driftStrength: Math.random() * 15 + 10,
            morphSpeed: Math.random() * 0.00005 + 0.00005, // How fast it wobbles
            driftTimeScale: Math.random() * 0.0001 + 0.0001, // How fast it drifts
        };
    }

    init() {
        this.blobs = Array.from({ length: this.numBlobs }, () => this.createBlob());
        this.animate();
    }
    
    drawBlob(blob, t) {
        const { x, y, radius, color, morphSpeed } = blob;
        const angleStep = (Math.PI * 2) / this.pointsPerBlob;

        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(1, color);

        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.beginPath();

        const points = [];
        for (let i = 0; i <= this.pointsPerBlob; i++) {
            const angle = i * angleStep;

            // Sample simplex noise with lower frequency for smoothness
            const noiseValue = this.noise2D(
                Math.cos(angle) * 0.5 * t * morphSpeed,
                Math.sin(angle) * 0.5 * t * morphSpeed
            );

            // Control amplitude (smaller factor = rounder blob)
            const noiseFactor = noiseValue * (radius / 2); 

            const distortedRadius = radius + noiseFactor;

            points.push({
                x: Math.cos(angle) * distortedRadius,
                y: Math.sin(angle) * distortedRadius,
            });
        }

        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < this.pointsPerBlob; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            const midPoint = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
            this.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
        }
        
        this.ctx.closePath();
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.restore();
    }

    animate(t = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // MODIFIED: Reduced blur for huge performance gain
        // this.ctx.filter = 'blur(2px)';
        
        this.blobs.forEach((blob, i) => {
            blob.y += blob.speedY;

            // MODIFIED: Uses the blob's unique drift properties
            const drift = this.noise2D(blob.y * 0.01, blob.xOffset + t * blob.driftTimeScale);
            blob.x += drift * (blob.driftStrength / 100);

            if (blob.y < -blob.radius * 2) {
                this.blobs[i] = this.createBlob();
            }

            this.drawBlob(blob, t);
        });
        
        // this.ctx.filter = 'none';
        requestAnimationFrame((time) => this.animate(time));
    }
}

export default LavaLamp;