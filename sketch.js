// snake variable
var s;
// scale factor (each square on the "grid" is 20px squared)
var scl = 20;
// food variable
var food;
var sceneNum = -1;
// keep track of the high score
var highScore;
// create array to store the obstacles
var o = [];
// store the number of obstacles
var numO = 5;
// array to store the positions of the snake's tail
var tailPos = [];
// create variable to store the settings image
var settingsIcon;

// store user input (set number of obstacles)
var inp;
// store button to "submit" number of obstacles
var button;

// store the sound to be played when the snake eats food
var eatFoodSound;

function preload() {
  // play mp3 files
  soundFormats('mp3');
  // set eatFoodSound to point to file 'EatFood-1'.mp3
  eatFoodSound = loadSound('EatFood-1');
}

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
  // load the settings icon
  settingsIcon = loadImage('cog-147414_1280 (1).png');
  // create input box
  inp = createInput('');
  inp.size(0);
  // create button
  button = createButton('set');
  button.size(0);
}


function draw() {
  // set the background
  background(51);
  textSize(18);
  fill(255, 255, 255);
  // display score and high score
  text("Score: " + s.total, 10, 30);
  text("High Score: " + highScore, 10, 50);
  // if the snake's position is the same as the food's location
  if (s.eat(food)) {
    // pick a new food location
    pickLocation();
  }
  
  
  // when sceneNum is 0
  if (sceneNum === 0) {
    // check if the snake has died
    s.death();
    
    for (var i = 0; i < o.length; i++) {
      var tailPos = s.tail;
      o[i].show();
      
      if (tailPos.length > 0) {
        o[i].snakeOn(tailPos);
      }
    }
    
    // update the position of the snake
    s.update();
    // show the snake
    s.show();
  } 
  
  
  // display the food at the location chosen by the pickLocation function
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  // show the score AFTER displaying the food so that the rectangle is drawn over the food
  if (sceneNum === -1) {
    s.instructions();
  } else if (sceneNum === 1) {
    s.showScore();
  } else if (sceneNum === 2) {
    Settings();
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
  // if the instructions or game over scene is displayed and the mouse is clicked, return to game scene
  /*if (sceneNum === 1 || sceneNum === -1) {
    sceneNum = 0;
    // generate new positions for the obstacles
    for (var i = 0; i < numO; i++) {
      o[i] = new Obstacle();
    }
  }*/
  
  // if the instructions or the game scene is displayed and the mouse is clicked, return to the game scene
  if ((sceneNum === 1 || sceneNum === -1) && (mouseX < 500 && mouseX > 100 && mouseY < 500 && mouseY > 100)) {
    sceneNum = 0;
    // generate new positions for the obstacles
    for (var i = 0; i < numO; i++) {
      o[i] = new Obstacle();
    }
  }
  
  // if the main menu screen is displayed and the mouse is clicked, go to the settings scene
  if (sceneNum === -1 && mouseX < 580 && mouseX > 530 && mouseY < 70 && mouseY > 20) {
    sceneNum = 2;
  }
  
  // if the settings screen is displayed and the mouse is clicked (back button), return to the main menu screen
  if (sceneNum === 2 && mouseX < 100 && mouseX > 25 && mouseY < 65 && mouseY > 25) {
    sceneNum = -1;
    // remove the input box and the button
    inp.position(-100, -100);
    inp.size(0);
    button.position(-100, -100);
    button.size(0);
  }

}

