class Circle {
    constructor(ctx) {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.w2 = this.w / 2
        this.h2 = this.h / 2
        this.cx = this.w2;
        this.cy = this.h2;
        this.radius = 200;
        this.rectWidth = 10;
        this.rectHeight = 15;
        this.rotation = 0;
        this.ctx = ctx;
    }

        draw (){
            this.ctx.beginPath();
            this.ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = "orange";
            this.ctx.stroke();
            this.ctx.save();
        }
    
}
