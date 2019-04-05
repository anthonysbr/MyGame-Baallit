class Spikes {
    constructor(ang) {
        this.ang = ang
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.w2 = this.w / 2
        this.h2 = this.h / 2
        this.rectWidth = 10;
        this.rectHeight = 15;
        this.rotation = 0;
        this.x = this.rectWidth / 4 + 190;
        this.y = this.rectHeight / 4;

    }

    draw() {
            this.ctx.beginPath();
            this.ctx.save();
            this.ctx.fillStyle = "#23A6D5";
            this.ctx.translate(200,200);
            this.ctx.rotate(this.rotation + this.ang);
            this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
            this.ctx.fill();
            // this.ctx.strokeRect(this.x, this.y, this.rectWidth, this.rectHeight);
            this.ctx.closePath();
            this.ctx.restore();
        }
        // drawSpike(0)
        // drawSpike(0.4)
        // drawSpike(2)
        // drawSpike(2.4)
        // drawSpike(2.8)
        // drawSpike(3.4)

    

    moveL() {

            this.rotation -= (Math.PI / 180);

    }
    moveR() {

            this.rotation += (Math.PI / 180);

        

    }



}