let lSize;
let angle;

function setup() {
  createCanvas(windowWidth,windowHeight);

  slider = createSlider(0, TWO_PI, PI/4);
  lSize = height/3;
  angle = PI/4
}
function draw() {
  background(0);

  angle = slider.value();
  push();
  translate(width/2, height/2);
  branch(height/4);
  pop();
 // angle =PI/4;

print (factorial(5));
}


//////////////MY FUNCTIONS/////////////////

function branch(lSize){
///initial line position
  let lx1 = 0;
  let ly1 = 0;
  let lx2 = 0;
  let ly2 = 0 -lSize;
  stroke(255);
  line(lx1, ly1,lx2,ly2);
  translate(lx2,ly2);
     if (lSize > 0.5){
      push();
      rotate(angle);
      branch(lSize*0.67);
      pop();
      push();
      rotate(-angle);
      branch(lSize*0.6);
      pop();
      
     // rotate (-angle);
      //branch(lSize*0.6);
    
    
    }

}
