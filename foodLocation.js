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
