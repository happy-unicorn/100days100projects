import getRandomFromRange from '../utils/getRandomFromRange';

class Particle {
    constructor(x, y, directionX, directionY, size, color, speed) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.speed = speed;
    }

    update(canvas, context, height, width) {
        if (this.x > width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;

        this._render(context);
    }

    _render(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
}

class ParticlesManager {
    constructor(canvas, container, configuration) {
        this._canvas = canvas;
        this._container = container;
        this._context = this._canvas.getContext('2d');
        this._particles = [];
        this._animationFrame = null;
        this._configuration = {
            numberOfParticles: 100,
            particleSize: 5,
            particleSpeed: 5,
            particleColor: 'white',
            lineColor: 'rgba(255, 255, 255, 0.1)',
            lineWidth: 1,
            distanceRatio: 5,
            ...configuration
        };
        this._canvasResizeHandler = this._canvasResizeHandler.bind(this);
        this._render = this._render.bind(this);
    }

    run() {
        const { width: containerWidth, height: containerHeight } = this._container.getBoundingClientRect();
        this._canvas.height = containerHeight;
        this._canvas.width = containerWidth;

        window.addEventListener('resize', this._canvasResizeHandler, false);

        const { width, height } = this._canvas.getBoundingClientRect();
        for (let i = 0; i < this._configuration.numberOfParticles; i++) {
            const directionX = getRandomFromRange(-1, 1);
            const directionY = ([-1, 1])[Math.floor(Math.random() * 2)] * Math.sqrt(1 - directionX ** 2);
            const particle = new Particle(
                width * Math.random(),
                height * Math.random(),
                directionX,
                directionY,
                this._configuration.particleSize,
                this._configuration.particleColor,
                this._configuration.particleSpeed
            );
            this._particles.push(particle);
        }
        this._render();
    }
    stop() {
        window.removeEventListener('resize', this._canvasResizeHandler, false);
        cancelAnimationFrame(this._animationFrame);
    }

    _restart() {
        this._particles = [];
        window.removeEventListener('resize', this._canvasResizeHandler, false);
        cancelAnimationFrame(this._animationFrame);
        this.run();
    }

    _canvasResizeHandler() {
        const { width, height } = this._container.getBoundingClientRect();
        this._canvas.height = height;
        this._canvas.width = width;
        this._restart();
    }

    _render() {
        console.log('render');
        const { width, height } = this._canvas.getBoundingClientRect();
        this._context.clearRect(0, 0, width, height);

        for (let i = 0; i < this._particles.length; i++) {
            this._particles[i].update(this._canvas, this._context, height, width);
        }

        const triggerDistance = Math.abs((width - height) / (height - width)) * Math.min(width / this._configuration.distanceRatio, height / this._configuration.distanceRatio);
        console.log(triggerDistance);
        for (let i = 0; i < this._particles.length; i++) {
            for (let j = i; j < this._particles.length; j++) {
                const distance = Math.sqrt(
                    (this._particles[i].x - this._particles[j].x) ** 2 + (this._particles[i].y - this._particles[j].y) ** 2
                );
                if (distance < triggerDistance) {
                    this._context.strokeStyle = this._configuration.lineColor;
                    this._context.lineWidth = this._configuration.lineWidth;
                    this._context.moveTo(this._particles[i].x, this._particles[i].y);
                    this._context.lineTo(this._particles[j].x, this._particles[j].y);
                    this._context.stroke();

                }
            }
        }

        this._animationFrame = requestAnimationFrame(this._render);
    }
}

export default ParticlesManager;