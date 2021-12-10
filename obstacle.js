function Obstacle () {
  this.cols = floor(width/scl);
  this.rows = floor(height/scl);
  this.pos = createVector(floor(random(this.cols)), floor(random(this.rows)));
  this.pos.mult(scl);
  //this.numO = numO;
  
  this.show = function () {
    rect(this.pos.x, this.pos.y, scl, scl);
  }
  
  this.snakeOn = function (tP) {
    
    // while i is less than the length of the array storing the tail positions
    for (var i = 0; i < tP.length; i++) {
      // store the x and y positions at this point in the array
      var posX = tP[i].x;
      var posY = tP[i].y;
      // calculate the distance between the obstacle's (x,y) vs the snake's (x,y)
      var d2 = dist(this.pos.x, this.pos.y, posX, posY);
      
      // if the distance is less than 1 (they are touching)
      if (d2 < 1) {
        // reset the position/speed/score/total back to the original.
        s.x = 0;
        s.y = 0;
        s.xspeed = 0;
        s.yspeed = 0;
        s.score = s.total;
        s.total = 0;
        s.tail = [];
        // change the sceneNum back to 1 (game over)
        sceneNum = 1;
      }
    }

  }
}
