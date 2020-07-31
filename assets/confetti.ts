import * as PIXI from "pixi.js"

interface Vector2d {
    x: number;
    y: number;
}

class Particle extends PIXI.Sprite {
    velocity = {} as Vector2d;
    acceleration = {} as Vector2d;
    animFrameID: number = 0
    constructor(pi: Vector2d = {x: 0, y: 0}, vi: Vector2d = {x: 0, y: 0}, ai: Vector2d = {x: 0, y: 0}, color: number = 0x3399ff) {
        super(PIXI.Texture.WHITE)
        this.tint = color;
        this.width = 4;
        this.height = (Math.random()*10)+5;
        this.velocity = vi;
        this.acceleration = ai;
        this.position.set(pi.x, pi.y)
        this.rotation = Math.random() * Math.PI*2
        
        this.animate()
    }

    public animate() {
        this.updatePVA()

        if(this.position.y > window.innerHeight) {
            this.position.y = 0
        }
    }

    public destroy() {
        super.destroy()
    }
     
    public updatePVA() {
        this.position.x += this.velocity.x
        this.position.y -= this.velocity.y

        this.velocity.x += this.acceleration.x
        this.velocity.y += this.acceleration.y
    }
}

interface ConfettiOptions {
    el: HTMLCanvasElement
    limit: number,
    color: number
}

export class Confetti {
    private particleList = [] as Particle[]
    private particleLimit = 80
    private PixiApp: PIXI.Application
    private animFrameID: number
    private _confettiColor: number
    constructor(o: ConfettiOptions) {
        this.PixiApp = new PIXI.Application({
            resizeTo: window,
            view: o.el,
            transparent: true,
            antialias: true
        }),
        this._confettiColor = o.color
    }

    set confettiColor(c: number) {
        this._confettiColor = c
        for(var p of this.particleList) {
            p.tint = this._confettiColor
        }
    }

    get confettiColor() {
        return this._confettiColor
    }

    private fallingParticleFactory() {
        return new Particle({x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight}, {x: 0, y: -2.5+Math.random()*2}, {x: 0, y:0}, this._confettiColor)
    }

    public createParticles() {
        for(var i = 0; i < this.particleLimit; i++) {
            var pa = this.fallingParticleFactory()
            this.PixiApp.stage.addChild(pa)
            this.particleList.push(pa)
        }
    }

    public clearParticles() {
        for(var p of this.particleList) {
            p.destroy()
        }
        this.particleList = []
    }

    private animate() {
        this.animFrameID = requestAnimationFrame(() => {this.animate()})
        for(var p of this.particleList) {
            p.animate()
        }
    }

    public start() {
        this.createParticles()
        this.animate()
    }

    public stop() {
        this.clearParticles()
        cancelAnimationFrame(this.animFrameID)
    }

    public restart() {
        this.stop()
        this.start()
    }
}

// var pl = () => new Particle({x: 30, y: window.innerHeight-50}, {x: 4+Math.random()*7, y: 15+Math.random()*5}, {x: -0.01, y: -0.2})
// var pr = () => new Particle({x: window.innerWidth - 30, y: window.innerHeight-50}, {x: -4-Math.random()*7, y: 15+Math.random()*5}, {x: 0.01, y: -0.2})