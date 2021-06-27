var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("music-melody-abstract-4k-jr.jpg")
  //load image for the treasure background
  bg2= loadImage("download.jpg")
  
}

function setup() {
  createCanvas(1536,753);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 10, 30);
  textSize(30);
  textFont("algerian")
  fill("yellow")
  text("-Guess the song by the lyrics given-", 510, 50)
// add code for changing the background to the treasure background
  

  if(score === 12) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("Congatulations!",250, 200);
  }

  drawSprites()
}