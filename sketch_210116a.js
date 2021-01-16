// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(152, 235, 255);
  c2 = color(181, 242, 241);
  c3 = color(204,201,255);
}


function draw() {
  setGradient( 0, 0, width *  (1/3), height * (1/3), c1, c2, c3);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c3, c1, c2);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c2, c3, c1);
  
  translate( 0, height * (1/3));
  setGradient( 0, 0, width *  (1/3), height * (1/3), c1, c3, c2);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c3, c2, c1);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c2, c1, c3);
  
  translate( 0, height * (1/3));
  setGradient( 0, 0, width *  (1/3), height * (1/3), c2, c3, c1);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c1, c2, c3);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c3, c1, c2);
  
  save("20210116.png");
  noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3) {
  noFill();
  
  //Square
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    
    //stroke(c);
    line(x, i, x + w, i);
    
    if ( i <= (y + h) - ((h/2))){
      stroke(c);
      line(x, i, x + w, i);
    }else{
      stroke(p);
      line(x, i, x + w, i);
    }
     
  }
  
  //Circle
  d = h * 0.7;
  push();
  translate( d * 0.2, d*0.2);
  for (let i = y; i <= y + d; i++) {
      let inter = map(i, y, (y + d) - (d/2), 0, 1);
      let c = lerpColor(c2, c1, inter);
      
      let inter02 = map(i, (y + d) - (d/2) ,  y + d , 0, 1);
      let p = lerpColor(c1, c3, inter02);
      
      line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);    
      if ( i <= (y + d) - (d/2)){
        stroke(c);
        line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }else{
        stroke(p);
        line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
        
        
      stroke(c);
      
    }
  pop();
}
