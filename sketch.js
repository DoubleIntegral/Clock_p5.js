function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  newCanvas = createGraphics(400,400);
}

function draw() {
  textSize(20);
  h = hour();
  m = minute();
  s = second();
  if (h>=6 && h<19) {
    c = 0;
    background(255);
    fill(255,255,0);
    ellipse(150,150,50,50);
    fill(255,255,0,50);
    ellipse(150,150,100,100);
    fill(255,255,0,30);
    ellipse(150,150,200,200);
    
  } else {
    background(0);
    c = 255;
    fill(255,255,0);
    ellipse(150,150,100,100);
    fill(255,255,0,100);
    ellipse(150,150,130,130);
    fill(255,255,0,100);
    ellipse(120,120,100,100);
    fill(0,0,0);
    ellipse(115,115,100,100);
  }
 
  my_rect(400,400,200,5,s*6-90,color(0,0,255));
  my_rect(400,400,200,20,m*6+s*1/10-90,color(0,255,0));
  my_rect(400,400,100,25,h*30+m*1/120+s*1/1200-90,color(255,0,0));
  fill(c)
  ellipse(windowWidth/2,windowHeight/2,30,30)
  text(h+":"+m+":"+s,windowWidth-90,windowHeight-10);

}


function my_rect(x,y,w,h,d,c) {
  push();
  fill(c);
  translate(windowWidth/2,windowHeight/2); //원점의 위치 
  rotate(radians(d))
  rect(0,-h/2,w,h);
  pop();
  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}


