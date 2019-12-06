let rad = 80; // Width of the shape
let xpos, ypos; // Starting position of shape

function setup() {
  createCanvas(800, 1000);
  noLoop();
  noStroke();
  var clientHeight = document.getElementById('about').clientHeight;
	var clientWidth = document.getElementById('about').clientWidth;

	var cnv = createCanvas(clientWidth, clientHeight);
	cnv.parent("about");

  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = 1 / 2*width;
  ypos = 1 / 2*height;
}


function draw() {

  let a = random(800);
  let b = random(1000);
  let c = random(800);
  let d = random(1200);
  let e = random(800);
  let f = random(1200);
  let g = random(800);
  let h = random(1200);
  let i = random(600);
  let j = random(800);
  let k = random(800);
  let l = random(1200);

  let r = random(80);
  let s = random(80);
  let t = random(80);
  let u = random(80);
  let v = random(80);
  let w = random(80);

  let z = cos(a);
  let x = cos(b);
  let y = cos(c);
  let q = cos(d);


    /*fill(120, 192, 187);*/
    /*
    push();
    fill(255);
    rotate(z);
    rect(a, b, 40, 200);
    pop();

    push();
    fill(255);
    rotate(x);
    rect(c, d, 40, 200);
    pop();

    push();
    fill(255);
    rotate(y);
    rect(e, f, 40, 200);
    pop();
*/
    push();
    fill(255);
    rotate(q);
    star(g, h, 5, 170, 3);
    pop();
/*
    push();
    fill(255);
    rotate(x-z);
    rect(i, j, 40, 200);
    pop();

    push();
    fill(255);
    rotate(x-z);
    rect(j, i, 2000, 2000);
    pop();
*/
    push();
    fill(255);
    rotate(z-x);
    star(k, l, 5, 170, 4);
    pop();

    push();
    fill(255);
    rotate(-z);
    star(b, a, 5, 70, 4);
    pop();

    push();
    fill(255);
    rotate(-x);
    star(d, c, 5, 70, 4);
    pop();

/*
    push();
    stroke(255);
    strokeWeight(10);
    noFill();
    ellipse(e, a, d);
    pop();
*/



}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
