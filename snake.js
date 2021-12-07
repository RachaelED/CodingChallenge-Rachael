// create Snake object
function Snake() {
  // define an x and y position
  this.x = 0;
  this.y = 0;
  // define an x and y speed
  this.xspeed = 1;
  this.yspeed = 0;
  // keep track of the length of the tail
  this.total = 0;
  this.tail = [];
  
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
        this.total = 0;
        // reset the array to be blank
        this.tail = [];
      }
    }
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
