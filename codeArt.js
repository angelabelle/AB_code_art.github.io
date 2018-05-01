
int x = 0;
Code myCode1;
Code myCode2;
Code myCode3;
Code myCode4;
int[] value = {#E3E0E3,#FCF2C9, #FCDCC9, #C1FFE1};
int index = 0;

float r = 0;
PImage code;


void setup() {
  size(1000, 1000 );
  // Arguments go inside the parentheses when the object is constructed.
  myCode1 = new Code(color(#ffffff,100), mouseX, 0, 20);
  myCode2 = new Code(color(#000000,100), mouseX, 0, 300);
  myCode3 = new Code(color(#000000), mouseX, 0, 500);
  myCode4 = new Code(color(#000000,200), mouseX, 0, 200);
  noCursor ();
  frameRate(15);
}

void draw() {
  background(value[index]);
  myCode1.move();
  myCode1.display();
  myCode2.move();
  myCode2.display();
  myCode3.move();
  myCode3.display();
  myCode4.move();
  myCode4.display();
  //nofill ();
  stroke (0);
  //line(mouseX+ (random (50,100)),mouseY, mouseX+40, mouseY+40);

    if (mousePressed == true) {
      //fill (random(150,170),random(20,30),random(20),random(50));
      noStroke();
      fill (#ffffff,random(50,200));
      //background (random (200,255), random (10,50), random (10,20));
      triangle (random (100,300),random (100,300), random (100,300), random (100,300), random (100,300),random (100,300));
       triangle (random (100,500),random (100,500), random (100,500), random (100,500), random (100,500),random (100,500));
       triangle (random (300,1000),random (200,1000), random (200,1000), random (200,1000), random (200,1000),random (200,1000));
    }


      stroke (0);
      translate (width+20, height/5);
      rotate (2.25);
      noFill();
      rect(mouseX, height/3, mouseY/2+20, mouseY/3+20);
      int inverseX = width-mouseX;
      int inverseY = height-mouseY;
      rect(inverseX-20, inverseY-30, (inverseY/2)-20, (inverseY/2)-20);

      fill(255, 204);
      rect(inverseX-100, inverseY-100, (inverseY/2)-20, (inverseY/4)-20);
      fill(255, 155);
      rect(mouseX-200, 240, mouseY/10+30, mouseY/3+30);





}

void mouseClicked() {
      background (value[index]);
      index = index+1;

      if (index>value.length-1) {
      index = 0;
      }


}


// Even though there are multiple objects, only  one class is needed.
// No matter how many cookies you make, only one cookie cutter is needed.
class Code {
  color c;
  float xpos;
  float ypos;
  float xspeed;

  // The Constructor is defined with parameters.
  Code(color tempC, float tempXpos, float tempYpos, float tempXspeed) {
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
  }

  void display() {
    noStroke();
    fill(c);
    rect(xpos, ypos , random(1,20), random (300,800));

  }

  void move() {
    xpos = xpos + xspeed;
    if (xpos > mouseX + 300) {
      xpos = mouseX-(random(50,200));
    }
  }
}

void keyPressed() {
  noLoop();
}

void keyReleased() {
  loop();
}
