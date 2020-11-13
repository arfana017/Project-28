
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(180,580,20,20)
	boy.addImage("boy",boyImage);
	boy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(620,470,370,370);
	ground = new Ground(400,650,800,30);
	stone = new Stone(120,520,40,40);
	mango1 = new Mango(630,450,50,50);
	mango2 = new Mango(700,420,50,50);
	mango3 = new Mango(550,380,50,50);
	mango4 = new Mango(510,460,50,50);
	mango5 = new Mango(640,350,50,50);
	mango6 = new Mango(750,450,50,50);
	launcher = new Launcher(stone.body,{x:120,y:520});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  background(255);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

 drawSprites();

}

function detectCollision(stone,mango1) {

	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance <= mango1.r + stone.r) {

		Matter.body.setStatic(mango1.body,false);

	 }

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})

}

function mouseReleased() {

 launcher.fly();

}

function keyPressed() {

if (keyCode === 32) {

	launcher.attach(stone.body);

}

}




