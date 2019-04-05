window.onload = function () {
    var spikes = [new Spikes(0),new Spikes(0.4),new Spikes(2),new Spikes(2.4),new Spikes(2.8),new Spikes(3.4),new Spikes(4.8)];
    var intervalID = "";
    var counter = 0;
    var clearScreen = function () {
        clearInterval(intervalID);
    };
    var keyState = {
        left: false,
        right: false,
    }
    var curBall=null
    var arrAng = [{a : 0, x: 0, y: 0},{a: 0.4, x: 0, y: 0},{a: 2, x: 0, y: 0},{a: 2.4, x: 0, y: 0},{a: 2.8, x: 0, y: 0},{a: 3.4, x: 0, y: 0},{a: 4.8, x: 0, y: 0}]
    document.getElementById("start-button").onclick = function () {
        document.getElementById("start-button").style.display = "none";
        document.getElementById("animation").style.display = "none";
        document.getElementById("Game").style.display = "flex";


        function getBall(xVal, yVal, dxVal, dyVal, rVal, colorVal) {
            var ball = {
                x: xVal,
                lastX: xVal,
                y: yVal,
                lastY: yVal,
                dx: dxVal,
                dy: dyVal,
                r: rVal,
                color: colorVal,
                normX: 0,
                normY: 0
            };

            return ball;
        }

        var canvas = document.getElementById("canvas");

        var ctx = canvas.getContext("2d");
        var radius = 10;

        var containerR = 200;
        canvas.width = containerR * 2;
        canvas.height = containerR * 2;
        canvas.style["border-radius"] = containerR + "px";

        var balls = [
            getBall(canvas.width / 2, canvas.height / 5, -1.5, 3, radius, "#333")
        ];

        function draw() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < balls.length; i++) {
                curBall = balls[i];
                ctx.beginPath();
                ctx.arc(curBall.x, curBall.y, curBall.r, 0, Math.PI * 2);
                ctx.fillStyle = "#E73C7E";
                ctx.fill();
                ctx.closePath();
                curBall.lastX = curBall.x;
                curBall.lastY = curBall.y;
                curBall.x += curBall.dx;
                curBall.y += curBall.dy;
                var dx = curBall.x - containerR;
                var dy = curBall.y - containerR;
                if (Math.sqrt(dx * dx + dy * dy) >= containerR - curBall.r) {
                    // current speed
                    var v = Math.sqrt(curBall.dx * curBall.dx + curBall.dy * curBall.dy);
                    // Angle from center of large circle to center of small circle,
                    // which is the same as angle from center of large cercle
                    // to the collision point
                    var angleToCollisionPoint = Math.atan2(-dy, dx);
                    // Angle of the current movement
                    var oldAngle = Math.atan2(-curBall.dy, curBall.dx);
                    // New angle
                    var newAngle = 2 * angleToCollisionPoint - oldAngle;
                    // new x/y speeds, using current speed and new angle
                    curBall.dx = -v * Math.cos(newAngle);
                    curBall.dy = v * Math.sin(newAngle);
                }


            }


            // requestAnimationFrame(draw);
            intervalID = setInterval(() => {
                clearScreen();
                counter++;
                //espacio para llamar las funciones
                draw();
                // console.log(curBall.x)
                // console.log(arrAng)
                
                if(keyState.left){
                    arrAng=arrAng.map(spike=>{
                        spike.a -= (Math.PI / 180);
                        return spike;
                    })
                    .map(spike=>{
                        
                        spike.x= 200+(200 * Math.cos(spike.a))
                        spike.y= 200+(200 * Math.sin(spike.a))
                        return spike
                    })
                
                }
                if(keyState.right){
                    arrAng=arrAng.map(spike=>{
                        spike.a += (Math.PI / 180);
                        return spike
                    })
                    .map(spike=>{
                        
                        spike.x= 200+(200 * Math.cos(spike.a))
                        spike.y= 200+(200 * Math.sin(spike.a))
                        return spike
                    
                })
                }
                
                spikes.forEach(spike=>{
                    spike.draw();
                    // console.log(RectCircleColliding(curBall, spike))
                    if(keyState.left){
                        spike.moveL();
                    }if(keyState.right){
                        spike.moveR();
                    }
                })
                    
                arrAng.forEach(element=>{
                    collisionDetection(element)
                })
            }, 1000 / 170);
        }
         collisionDetection= (element) =>{
             var dx = element.x - curBall.x;
             var dy = element.y - curBall.y;
             var distance = Math.sqrt(dx*dx+dy*dy);
             if (distance < 10 + curBall.r){
                //  console.log (true);
                window.location.href = '../pkt.html'
             }
            //  console.log(element)
            //  var dx = curBall.x - Math.max(element.x, Math.min(curBall.x, element.x + 15))
            //  var dy = curBall.y - Math.max(element.y, Math.min(curBall.y, element.y + 10))
            // return dx*dx + dy*dy < curBall.r * curBall.r;       
        }



        // function RectCircleColliding(circle, rect, w, h) {
        //     var distX = Math.abs(circle.x - rect.x - w / 2);
        //     var distY = Math.abs(circle.y - rect.y - h / 2);
        
        //     if (distX > (w / 2 + circle.r)) {
        //         return false;
        //     }
        //     if (distY > (h / 2 + circle.r)) {
        //         return false;
        //     }
        
        //     if (distX <= (w / 2)) {
        //         return true;
        //     }
        //     if (distY <= (h / 2)) {
        //         return true;
        //     }
        
        //     var dx = distX - w / 2;
        //     var dy = distY - h / 2;
        //     return (dx * dx + dy * dy <= (circle.r * circle.r));
        // }


    







        draw();
        document.onkeydown = (e) => {

            if (e.keyCode == '37') {
                keyState.left = true;

            }
            else if (e.keyCode == '39') {
                keyState.right = true;
                // rotation += Math.PI / 360;
            }
        }
        document.onkeyup = (e) => {

            if (e.keyCode == '37') {
                keyState.left = false;
                // rotation -= (Math.PI / 360);
            }
            else if (e.keyCode == '39') {
                keyState.right = false;
                // rotation += Math.PI / 360;
            }
        }
    }
}
