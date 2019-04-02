class Circle {
    constructor(ctx) {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.w2 = this.w / 2
        this.h2 = this.h / 2
        this.cx = this.w2;
        this.cy = this.h2;
        this.rectWidth = 10;
        this.rectHeight = 15;
        this.rotation = 0;
        this.ctx = ctx;
    }
        move() {
            // requestAnimationFrame(move);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //giro en el canvas repecto a (0,0)
            ctx.translate(cx, cy);
            ctx.rotate(rotation);
            //Rectangulo, posicion ,tamaño *
            ctx.strokeRect(-rectWidth / 2 + 190, -rectHeight / 2, rectWidth, 5);
            ctx.restore();
            //rotacion segun tecla pulsada
            document.onkeydown = function (e) {
                if (e.keyCode == '37') {
                    rotation -= Math.PI / 180;
                }
                else if (e.keyCode == '39') {
                    rotation += Math.PI / 180;
                }
            }

        }
        draw (){
            this.ctx.beginPath();
            this.ctx.arc(this.cx, this.cy, 200, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = "blue";
            this.ctx.stroke();
            this.ctx.save();
        }
    
}
