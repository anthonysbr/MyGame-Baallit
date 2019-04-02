class Ball {
  constructor(ctx) {

    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.cx = this.w2;
    this.ballRadius = 10;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight - 30;
    this.dx = 2;
    this.dy = -2;
    this.color = "#0095DD";
  }


    drawBall() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }

    ballMove() {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawBall();
      if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
        this.dx = -this.dx;
        this.color = 'red' + Math.round(Math.random() * 15000000).toString(16);
      }
      if (this.y + this.dy > canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius) {
        this.dy = -this.dy;
        this.color = 'green' + Math.round(Math.random() * 15000000).toString(16);
      }
      this.x += this.dx;
      this.y += this.dy;
    }
  }
