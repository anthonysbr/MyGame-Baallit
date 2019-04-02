
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
        this.circle = new  Circle (this.ctx);
        this.spikes = new  Spikes (this.ctx);
        this.ball = new  Ball (this.ctx);

    }
    startGame() {
        this.intervalID = setInterval(() => {
            this.clearScreen();
            this.counter++;
            //espacio para llamar las funciones
            this.moveAll();
            this.drawAll();




        }, 1000 / 220);
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawAll(){
        this.circle.draw();
        this.spikes.draw();
    }
    moveAll(){
        this.spikes.move();
        this.ball.ballMove();
    }
}



    //     function ballIn() {
    //         var canvas = document.getElementById("canvas");
    //         var ctx = canvas.getContext("2d");
    //         var ballRadius = 10;
    //         var x = canvas.width / 2;
    //         var y = canvas.height - 30;
    //         var dx = 2;
    //         var dy = -2;
    //         var color = "#0095DD"

    //         function drawBall() {
    //             ctx.beginPath();
    //             ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    //             ctx.fillStyle = color;
    //             ctx.fill();
    //             ctx.closePath();
    //         }
    //         function drawing() {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //             drawBall();
    //             if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    //                 dx = -dx;
    //                 color = '#333' + Math.round(Math.random() * 15000000).toString(16);
    //             }
    //             if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    //                 dy = -dy;
    //                 color = '#333' + Math.round(Math.random() * 15000000).toString(16);
    //             }
    //             x += dx;
    //             y += dy;

    //         }
    //         setInterval(drawing(), 10);
    //     }
    //     ballIn();


