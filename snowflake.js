let current;
let snowflake = [];
let snowing = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height/2, 0);
}

function draw() {
  translate(width/2, height/2);
  rotate(PI/6); //klonovani
  background(128,0,0); //rgb maron barvička, ve vykreslovací funkci

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  if (count == 0) {
    noLoop(); //smyčka klonování náhodné zákon teček podle Brownianovi motiony - algoritmus
    console.log('snowflake dokoncena');
  }

  snowflake.push(current); //push current tečkos/particles
  current = new Particle(height/2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
