function setup() { 
  createCanvas(400, 400);
  background ("withe")
}

function draw() {
  background("red");
  stroke("orange")
  fill("blue");
  rect (mouseX, mouseY,20, 35)
  console.log(mouseIsPressed);
  rect(mouseX,mouseY,100,150);
}
