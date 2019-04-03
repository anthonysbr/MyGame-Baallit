class Ball {
  constructor(ctx,perimetro) {

    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.cx = this.w2;
    this.ballRadius = 10;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight - 30;
    this.dx = 2;
    this.dy = -2;
    this.color = "#0095DD";
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
    this.circle = perimetro;
  }


  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    
  }


  ballMove() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawBall();
    var distance = Math.sqrt ((this.circle.cx - this.centerX) * (this.circle.cx - this.centerX) + (this.circle.cy - this.centerY) * (this.circle.cy - this.centerY));
    console.log(distance);
    if (distance <= this.circle.radius - this.ballRadius) {
    // console.log("dentro")
    this.centerX += this.dx;
    this.centerY += this.dy;
  }else {
    // console.log("cambio")
    this.dx = -this.dx;
    this.dy = -this.dy;
    this.centerX += this.dx;
    this.centerY += this.dy;

    }
  }
  
}

