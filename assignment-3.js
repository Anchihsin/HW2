noStroke();
background(255);
colorMode(HSB, 100);

while(true) {
  background(0, 0, 255, 0.1);
  fill(50, random(10,300), 200);
  ellipse(random(width), random(height), random(20, 40));
}
