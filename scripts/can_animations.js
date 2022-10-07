let can = document.getElementById("can");
let ctx = can.getContext('2d');

can.width = window.innerWidth;
can.height = window.innerHeight;

window.addEventListener("resize", function(){
    can.width = window.innerWidth;
    can.height = window.innerHeight;
})


var x = [], y = [], r = [];
var colors = ["#D8D9CF", "#EDEDED", "#FF8787", "#E26868"];
var col = [];
var numCircles = 50;
var dir = [];
var speed = [];

for (let i = 0; i < numCircles; i++) {
    col[i] = colors[Math.floor(Math.random() * 4)];
    dir[i] = Math.floor(Math.random() * 4) + 1;
    speed[i] = Math.random() * 2 + 1;

    r[i] = Math.round(Math.random() * 30) + 5;
    x[i] = Math.round(Math.random() * (can.width - 2 * r[i]))
    y[i] = Math.round(Math.random() * (can.height - 2 * r[i]))
}

function update(){
    ctx.clearRect(0, 0, can.width, can.height)

    for(let i = 0; i < numCircles; i++){

        if(dir[i] == 1){
            x[i] += speed[i];
            y[i] += speed[i];
        }else if(dir[i] == 2){
            x[i] += speed[i];
            y[i] -= speed[i];
        }else if(dir[i] == 3){
            x[i] -= speed[i];
            y[i] += speed[i];
        }else if(dir[i] == 4){
            x[i] -= speed[i];
            y[i] -= speed[i];
        }

        ctx.beginPath();
        ctx.arc(x[i], y[i], r[i], 0, Math.PI * 2, true)
        ctx.fillStyle = col[i];
        ctx.closePath();
        ctx.fill();

        if(x[i] + r[i]>= can.width){
            dir[i] = Math.round(Math.random() * 2) + 3;
        }else if(y[i] + r[i] >= can.height){
            var tempDir = Math.round(Math.random() * 2);
            if(tempDir == 0){
                dir[i] = 2;
            }else if(tempDir == 1){
                dir[i] = 4;
            }
        }else if(x[i] - r[i] <= 0){
            dir[i] = Math.round(Math.random() * 2) + 1;
        }else if(y[i] - r[i] <= 0){
            var tempDir = Math.round(Math.random() * 2);
            if(tempDir == 0){
                dir[i] = 1;
            }else if(tempDir == 1){
                dir[i] = 3;
            }
        }
    }
    
    window.requestAnimationFrame(update)
}

update();