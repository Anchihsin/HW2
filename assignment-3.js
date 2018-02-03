noStroke();
background(255);
colorMode(HSB, 100);

while(true) {
  background(0, 0, 255, 0.1);
  fill(100, random(5,500), 300);
  ellipse(random(width), random(height), random(20, 40));
}
