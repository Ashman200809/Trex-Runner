var helecopter;
var Box;
var box1;
var box2;
var ground;

function setup(){
createCavas(600,500);
  box1 = createSprite(200,300,50,50);
    box2 = createSprite(240,100,50,100);
}

function draw(){
  background(0);
    Engine.update(engine);
    console.log(box2.position.x);
    console.log(box2.position.y);
    console.log(box2.angle);
    box1.display();
    box2.display();
    ground.display();
}