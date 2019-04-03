class Spikes {
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
        this.keyState = {
            left: false,
            right: false,

        }

    }

    draw() {
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(this.rotation);
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();

        //Segundo
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(0.4 + this.rotation);
        // this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();

        //Tercero
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(2 + this.rotation);
        // this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();

        //Cuarto
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(2.4 + this.rotation);
        // this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();

        //Quinto
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(2.8 + this.rotation);
        // this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();


        //Sexto
        this.ctx.beginPath();
        this.ctx.translate(this.cx, this.cy);
        this.ctx.rotate(3.4 + this.rotation);
        // this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(-this.rectWidth / 2 + 190, -this.rectHeight / 2, this.rectWidth, 5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.closePath();

    }

    move() {
        document.onkeydown = (e) => {

            if (e.keyCode == '37') {
                this.keyState.left = true;

            }
            else if (e.keyCode == '39') {
                this.keyState.right = true;
                // this.rotation += Math.PI / 360;
            }
        }
        document.onkeyup = (e) => {

            if (e.keyCode == '37') {
                this.keyState.left = false;
                // this.rotation -= (Math.PI / 360);
            }
            else if (e.keyCode == '39') {
                this.keyState.right = false;
                // this.rotation += Math.PI / 360;
            }
        }
        if (this.keyState.left) {
            this.rotation -= (Math.PI / 180);
        }
        if (this.keyState.right) {
            this.rotation += (Math.PI / 180);

        }

    }



}