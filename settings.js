// settings menu
function Settings () {
  // bring back the input box and button by increasing the size
  inp.size(50);
  button.size(35);
  // set the background
  background(0, 0, 0);
  // set the text size
  textSize(30);
  // colour the text white
  fill(255, 255, 255);
  text("Settings", 250, 100);
  
  // create the back button (visuals)
  fill(255, 255, 255);
  rect(25, 25, 75, 40);
  fill(0, 0, 0);
  text("Back", 30, 55);
  
  // prompt user to enter the amount of obstacles for the game
  fill(255, 255, 255);
  textSize(16);
  text("Number of obstacles: ", 100, 300);
  
  // set the input box position
  inp.position(275, 285);
  // set the button position
  button.position(325, 285);
  // if the button is pressed, call the setNumObs function
  button.mousePressed(setNumObs);
  
}

// called when the button is pressed to set the number of obstacles
function setNumObs () {
  // store the value input
  numO = inp.value();
  // parse the string to an integer and store as the number of obstacles
  numO = parseInt(numO);
  // reset the input value to nothing
  inp.value('');
}
