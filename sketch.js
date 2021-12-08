// snake variable
var s;
// scale factor (each square on the "grid" is 20px squared)
var scl = 20;
// food variable
var food;
var sceneNum = 0;
// keep track of the high score
var highScore;

function setup() {
  // set the canvas to 600px by 600px
  createCanvas(600, 600);
  // set the snake variable equal to a new Snake function
  s = new Snake();
  // set the frameRate to 10fps
  frameRate(10);
  // call the pickLocation function
  pickLocation();
  // recall the high score
  highScore = getItem('highScore');
}

// Pick a location for the piece of food
function pickLocation() {
  // determine how many columns that are 20px wide are possible
  var cols = floor(width/scl);
  // determine how many rows that are 20px wide are possible
  var rows = floor(height/scl);
  // pick a random location for the food that falls in column x and row y
  food = createVector(floor(random(cols)), floor(random(rows)));
  // multiply the location by the scale factor to place the food in the grid
  food.mult(scl);
}

function draw() {
  // set the background
  background(51);
  textSize(18);
  fill(255, 255, 255);
  text("Score: " + s.total, 10, 30);
  text("High Score: " + highScore, 10, 50);
  // if the snake's position is the same as the food's location
  if (s.eat(food)) {
    // pick a new food location
    pickLocation(); 
  }
  
  
  
  if (sceneNum === 0) {
    // check if the snake has died
    s.death();
    // update the position of the snake
    s.update();
    // show the snake
    s.show();
  } 
  
  
  // display the food at the location chosen by the pickLocation function
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  // show the score AFTER displaying the food so that the rectangle is drawn over the food
  if (sceneNum === 1) {
    s.showScore();
  }
    
}

// set keyboard controls
function keyPressed() {
  
  if (keyCode === UP_ARROW && s.yspeed != 1) {
    // set the direction to up ONLY if the snake is not going down
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
    // set direction to down ONLY if the snake is not going up
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
    // set direction to right ONLY if the snake is not going left
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
    // set direction to left ONLY if the snake is not going right
    s.dir(-1, 0);
  }
  
}

function mousePressed() {
  if (sceneNum === 1) {
    sceneNum = 0;
  }

}

