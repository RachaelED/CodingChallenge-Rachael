// create Snake object
function Snake() {
  // define an x and y position
  this.x = 0;
  this.y = 0;
  // define an x and y speed
  this.xspeed = 0;
  this.yspeed = 0;
  // keep track of the length of the tail
  this.total = 0;
  this.tail = [];
  this.score = 0;
  
  // set the speed in the x and y direction, based on values passed from keyPressed function
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  // check if the snake ate the food
  this.eat = function(pos) {
    // calculate the distance between the snake's position and the food's position
    var d = dist(this.x, this.y, pos.x, pos.y);
    // if they are closer than 1px
    if (d < 1) {
      // increase the length of the snake (increase the number of squares)
      this.total++;
      // return true (the snake DID eat the food)
      return true;
    } else {
      // return false (the snake DID NOT eat the food)
      return false;
    }
  }
  
  // check if the snake has died
  this.death = function() {
    // while i is less than the length of the tail array
    for (var i = 0; i < this.tail.length; i++) {
      // store the position of one rectangle in the tail
      var pos = this.tail[i];
      // check the distance between the snake's head and this square in the tail
      var d = dist(this.x, this.y, pos.x, pos.y);
      
      // if the distance is less than 1
      if (d < 1) {
        // reset the total number of squares to 0
        this.score = this.total;
        this.total = 0;
        // reset the array to be blank
        this.tail = [];
        // reset position to (0, 0)
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        sceneNum = 1;
      }
      
    }
    
  }
  
  // display the score
  this.showScore = function() {
    background(0, 0, 0);
    fill(255, 255, 255);
    rect(100, 100, 400, 400);
    fill(0, 0, 0);
    // if the current score is larger than the value saved as highScore
    if (this.score > highScore) {
      // set the highScore to this.score
      highScore = this.score;
      // save the highScore under the tag 'highScore'
      storeItem('highScore', highScore);
    }
    // tell the user "game over"
    text("Game over.", 190, 275);
    // display the score
    text("Score: " + this.score, 190, 300);
    // display the high score
    text("High score: " + highScore, 190, 325);
    // tell the user to "click to play again"
    text("Click anywhere to play again.", 190, 375);
  }
  
  this.instructions = function() {
    background(0, 0, 0);
    fill(255, 255, 255);
    rect(100, 100, 400, 400);
    fill(0, 0, 0);
    text("Press the up, down, left, and right \narrows to move the snake. ", 175, 200);
    text("Click anywhere to continue.", 175, 300);
  }
  
  // update the position of the snake
  this.update = function() {
    
    // if the total number of tails is equal to the length of the tail array
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        // shift everything down in the array
        this.tail[i] = this.tail[i+1];
      }
    }
    // make the last entry in the array the current position of the snake
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    // set the x position to be the x position * the scale
    this.x = this.x + this.xspeed * scl;
    // set the y positon to be the y positon * the scale
    this.y = this.y + this.yspeed * scl;
    
    // constrain the x and y positions within the canvas
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  
  // display the snake
  this.show = function() {
    fill(255);
    
    // while i is less than the length of the tail array
    for (var i = 0; i < this.tail.length; i++) {
      // dray a rectangle at the x and y position in the array
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    
    // draw the head of the snake at the x and y position of the snake
    rect(this.x, this.y, scl, scl);
  }
  
}
