
/** @type {CanvasRenderingContext2D} */
class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.intervalID = "";
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.w2 = this.w / 2
        this.h2 = this.h / 2
        this.counter = 0;
        this.circle = new Circle(this.ctx);
        this.spikes = new Spikes(this.ctx);
        this.ball = new Ball(this.ctx,this.circle);
        console.log(this.circle);
        console.log(this.ball);



    }
    startGame() {
        this.intervalID = setInterval(() => {
            this.clearScreen();
            this.counter++;
            //espacio para llamar las funciones
            this.moveAll();
            this.drawAll();




        }, 1000 / 160);
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawAll() {
        this.circle.draw();
        this.spikes.draw();
    }
    moveAll() {
        this.spikes.move();
        this.ball.ballMove();
    }
}
