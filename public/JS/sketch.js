let rad = 80; // Width of the shape
let xpos, ypos; // Starting position of shape

function setup() {
  createCanvas(800, 1000);
  noLoop();
  noStroke();
  fill(255, 204);
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
  let i = random(800);
  let j = random(1200);
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

    fill(255);
    /*fill(120, 192, 187);*/
    push();
    rotate(z);
    rect(a, b, 200, 40);
    pop();

    push();
    rotate(x);
    rect(c, d, 200, 40);
    pop();

    push();
    rotate(y);
    rect(e, f, 200, 40);
    pop();

    push();
    rotate(q);
    rect(g, h, 200, 40);
    pop();

    push();
    rotate(x);
    rect(i, j, 200, 40);
    pop();

    push();
    rotate(z);
    rect(k, l, 200, 40);
    pop();




}
