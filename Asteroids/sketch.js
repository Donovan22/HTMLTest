var ship;
var aster = [];
var laser = [];

function setup() {
createCanvas(1200, 720);
imageMode(CENTER);
ship = new Ship();
for (let i = 0; i < 5; i++) {
aster.push(new Asteroid());
}
}

function draw() {
background(0);
ship.render();
ship.control();
ship.update();

for (let i = 0; i < 5; i++) {
aster[i].render();
aster[i].update();
}

for (let i = 0; i < laser.length; i++) {
laser[i].render();
laser[i].update();
}
}
