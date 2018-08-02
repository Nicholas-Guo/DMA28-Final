var Y_AXIS = 1;
var X_AXIS = 2;

var c1;
var c2;
// var angle = 0.0;
// var jitter = 0.0;

var xoff = 0.0;
var choice;

var Stars = [];
var star;
var right_color = ['#fb4141', '#ffdffd'];
var left_color = ['#b0daff', '#00d7ff'];

star_color = '#B53B03';


  // create star effect
  // for (var i = 0; i < 10; i++) {
  //   var star = new Star(random(100, 100, 30));
  //   stars.push(star);
  // }


function preload() {
  planet1 = loadImage('assets/planet1.png');
  planet2 = loadImage('assets/planet2.png');
  planet3 = loadImage('assets/planet3.PNG');
  planet4 = loadImage('assets/planet4.PNG');
}


function setup() {
  left = createCanvas(windowWidth, windowHeight);
  right = createCanvas(windowWidth, windowHeight);
  c1 = color('#1c253c');
  c2 = color('#3c1c31');
  c3 = color('#0f091e');
  c4 = color('#261733');


  var button1 = createA('main.html?choice=z', 'Zoash');
  var button2 = createA('main.html?choice=t', 'Triralia');
  var button_width = 1/5* width;
  button1.addClass('btn btn-outline-danger btn-lg');
  button1.style('width', button_width+'px');
  button1.position(width/2 - button_width/2, 8.5/10 * height);


  button2.addClass('btn btn-outline-primary btn-lg');
  button2.style('width', button_width+'px');
  button2.position(1/2 * width - button_width/2, 1/10 * height);

  // rectMode(CENTER);
  imageMode(CENTER);


  for (var i = 0; i < 20; i++) {
    var astar = new Star(random(width), random(height), random(3, 5))
    
    Stars.push(astar);
  };





}

function draw() {
  background(220);
  // xoff = xoff + 0.01;
  // var n1 = noise(xoff) * 100;
  // xoff = xoff + 0.01;
  // var n2 = noise(xoff) * 100;


  setGradient(0, 0, windowWidth/4, 0, windowWidth*3/4, windowHeight, 0, windowHeight, c3, c4, Y_AXIS);
  setGradient(windowWidth, windowHeight, windowWidth*3/4, windowHeight, windowWidth/4, 0, windowWidth, 0, c2, c1, Y_AXIS);

  var alpha = atan(width/2 / height);
  for (var q in Stars){
    if (Stars[q].pos.x > (width/4 + tan(alpha)*Stars[q].pos.y)) {

      star_color = left_color;
    }
    else {
      star_color = right_color;
    }
    Stars[q].update();
    Stars[q].display();
    Stars[q].edges();
  }

  image(planet1, windowWidth*14/15, windowHeight/5, 2.2/3 * windowWidth, 2.2/3 * windowWidth);
  image(planet2, windowWidth/15, windowHeight*4/5, 2/3 * windowWidth, 2/3 * windowWidth);
  image(planet3, windowWidth/4, windowHeight/5, windowWidth/2, windowWidth/2);
  image(planet4, windowWidth*3.3/4, windowHeight*4.5/5, windowWidth/9, windowWidth/10);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}






function rotate_planet() {
  if (second() % 2 == 0) {  
    jitter = random(-0.1, 0.1);
  }
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering
  var c = cos(angle);
  //move the shape to the center of the canvas
  translate(width/2, height/2);
  //apply the final rotation
  rotate(c);
}


function draw_rect (x1, y1, x2, y2, x3, y3, x4, y4) {
	beginShape();
	vertex(x1, y1);
	vertex(x2, y2);
	vertex(x3, y3);
	vertex(x4, y4);
	endShape();
}



function changeColor(mouseY) {
  var from1 = color('#007dff');
  var from2 = color('#5ad9f9');

  var to1 = color('#111227');
  var to2 = color('#2e457d');

  c1 = lerpColor(from1, to1, mouseY/1000);
  c2 = lerpColor(from2, to2, mouseY/1000);
}

function setGradient(x1, y1, x2, y2, x3, y3, x4, y4, c1, c2, axis) {

  noFill();
  var alpha = atan(abs(x3 - x2) / abs(y3 - y2));

  if (axis == Y_AXIS) {  // Top to bottom gradient
  	if (y1 < y3) {
  		for (var i = y1; i <= y3; i++) {
	      var inter = map(i, y1, y3, 0, 1);
	      var c = lerpColor(c1, c2, inter);
	      stroke(c);
	      line(x1, i, x2 + i * tan(alpha), i);
    	}
  	}
  	else {
  		for (var i = y1; i >= y3; i--) {
	      var inter = map(i, y1, y3, 0, 1);
	      var c = lerpColor(c1, c2, inter);
	      stroke(c);
	      line(x1, i, width - (height - i) * tan(alpha) - x1 + x2, i);
    	}
  	}
    
  }  
  // else if (axis == X_AXIS) {  // Left to right gradient
  //   for (var i = x; i <= x+w; i++) {
  //     var inter = map(i, x, x+w, 0, 1);
  //     var c = lerpColor(c1, c2, inter);
  //     stroke(c);
  //     line(i, y, i, y+h);
  //   }
  // }
}







function Star(x,y,m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0.5,0);
  this.acc = createVector(0,0);
  this.mass = m;
  // this.gravity = createVector(0,0.03*m);
  // this.upward = createVector(0,-3/m);
  
  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    // var f = p5.Vector.div(force,this.mass); 
    this.acc.add(f);
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.acc.set(0,0);
  }
  
  this.display = function() {
    noStroke();
    var random_color = star_color[Math.floor(Math.random()*star_color.length)];
    fill(random_color);
    ellipse(this.pos.x, this.pos.y, this.mass*2,this.mass*2);
  }
  
  this.edges = function() {
    if(this.pos.y > height-this.mass*5) {
      var bounce = random(0, 9);
      if (bounce < 6) {
        this.vel.y *= -1;
        this.pos.y = height- this.mass*5;
      }
      else {
        this.vel.y *= 0;
        this.pos.y = height- this.mass*5;
      }
      
    }
    
    if (this.pos.x > width- this.mass*5) {
      this.vel.x *= 1;
      this.pos.x = this.mass*5;
    }
    
        
    if (this.pos.x < this.mass*5) {
      this.vel.x *= 1;
      this.pos.x = width;
    }

  }
}