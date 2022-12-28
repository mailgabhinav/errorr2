var jet, sky, drop;
var jetimg, skyimg, dropimg;
var dropG;
var Play = 1;
var End = 0;
var gameState = Play;

function preload(){
jetimg = loadImage("images.png")
skyimg = loadImage("sky.png")
dropimg = loadImage("drop.png")
}

function setup() {
createCanvas(windowWidth,windowHeight);
sky=createSprite(windowWidth,windowHeight/2,10,10);
sky.addImage(skyimg);
sky.velocityx=2;

jet=createSprite(windowWidth-20,windowHeight/2,20,20);
jet.addImage("jetflying", jetimg);


}

function draw() {
 background(0);
    if(gameState === Play){
 
 jet.y = World.mouseY;
 
 edges= createEdgeSprites();
jet.collide(edges);

if(sky.x>width){
 sky.x=width/2;
}

createdrop();


}
if(gameState===End){
sky.velocityx=0;
Text("game over",200,200)

}
function createdrop(){
if (World.frameCount % 60 == 0 ){

 drop = createSprite(Math.random(380,round(50,350),20,20))
drop.addImage(dropimg);
drop.scale=0.5;
drop.velocityx=-3;
drop.lifetime=300;


}

}
}