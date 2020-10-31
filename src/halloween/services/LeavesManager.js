class Leaf {
    constructor(link) {
        this.element = document.createElement('div');
        this.position = {
            x: 0,
            y: 0,
            z: 0
        };
        this.rotation = {
            axis: 'X',
            value: 0,
            speed: 0,
            x: 0
        };
        this.speed = 0;
        this.speedVariation = 0;

        this.element.style.position = 'absolute';
        this.element.style.width = '40px';
        this.element.style.height = '40px';
        this.element.style.backgroundImage = `url(${link})`;
        this.element.style.backgroundSize = '100%';
        this.element.style.backgroundRepeat = 'no-repeat';
        this.element.style.backfaceVisibility = 'visible';
    }
}

class LeavesManager {
    constructor(container, images, quantity=150) {
        this.container  = container;
        this.images = images;
        this.world = document.createElement('div');
        this.leaves = [];
        this.quantity = quantity;
        this.isInitial = true;

        this.world.style.position = 'absolute';
        this.world.style.width = '100%';
        this.world.style.height = '100%';
        this.world.style.transformStyle = 'preserve-3d';
        this.world.style.webkitPerspective = "400px";
        this.world.style.MozPerspective = "400px";
        this.world.style.oPerspective = "400px";
        this.world.style.perspective = "400px";
    }

    run() {
        for (let i = 0; i < this.quantity; i++) {
            const leaf = new Leaf(this.images[Math.floor(Math.random() * this.images.length)]);
            this._resetLeaf(leaf);
            this.leaves.push(leaf);
            this.world.appendChild(leaf.element);
        }

        this.container.appendChild(this.world);
        this.render();
    }

    render() {
        for (let i = 0; i < this.leaves.length; i++) {
            this._updateLeaf(this.leaves[i]);
        }

        this.isInitial = false;

        requestAnimationFrame(this.render.bind(this));
    }

    _resetLeaf(leaf) {
      leaf.position.x = this.container.offsetWidth * Math.random();
      leaf.position.y = -10;
      leaf.position.z = Math.random() * 200;

      if (this.isInitial) {
        leaf.position.y = Math.random()*this.container.offsetHeight;
      }

      leaf.rotation.speed = Math.random() * 10;
      leaf.rotation.axis = (['X', 'Y', 'Z'])[Math.floor(Math.random() * 3)];

      if (leaf.rotation.axis === 'Y') {
        leaf.rotation.x = Math.random()*180 + 90;
      } else if (leaf.rotation.axis === 'Z') {
        leaf.rotation.x = Math.random() * 360 - 180;
        leaf.rotation.speed = Math.random() * 3;
      }

      leaf.speedVariation = Math.random() * 0.8 - 0.4;
      leaf.speed = Math.random() + 1.5;
    }

    _updateLeaf(leaf) {
        leaf.position.x -= leaf.speedVariation;
        leaf.position.y += leaf.speed;
        leaf.rotation.value += leaf.rotation.speed;

        let transform =  `
            translateX( ${leaf.position.x}px )
            translateY( ${leaf.position.y}px )
            translateZ( ${leaf.position.z}px )
            rotate${leaf.rotation.axis}( ${leaf.rotation.value}deg )
        `;
        if (leaf.rotation.axis !== 'X') {
            transform += ` rotateX( ${leaf.rotation.x}deg )`;
        }

        leaf.element.style.webkitTransform = transform;
        leaf.element.style.MozTransform = transform;
        leaf.element.style.oTransform = transform;
        leaf.element.style.transform = transform;

        if (leaf.position.x < -10 || leaf.position.y > this.container.offsetHeight + 10) {
            this._resetLeaf(leaf);
        }
    }
}

export default LeavesManager;