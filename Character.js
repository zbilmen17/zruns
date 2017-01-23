 //Character File
 /*File Description:
 *This file holds the functions that initialize and update the character.
 *The character itself is drawn with a combination of circles (for the face) and rectangles (for the glasses).
 */

function initializeCharacter() {
  xZac=45;//Initializes and Defines Variables 
  yZac=225;
  lenser=205;
  lensel=205;
}

function updateCharacter() {
  //This function makes the character move when either the up and down keys are pressed.
  if (keyCode == 38) {//Makes the character move up when the up key is pressed
    yZac=yZac-1;
    lenser=lenser-1;
    lensel=lensel-1;
  } else if (keyCode == 40) {//Makes the character move down when the down key is pressed
    yZac=yZac+1;
    lenser=lenser+1;
    lensel=lensel+1;
  }
  
  //The code that draws the character
  var c = color(255, 204, 0);  // Defines color 'c' 
  fill(c);  // Use color variable 'c' as fill color for the outer ellipse
  ellipse(xZac,yZac,70,78)//Draws the outer ellipse
  var f = color(15, 104, 0);  // Defines color 'f' 
  fill(f);  // Use color variable 'c' as fill color for the inner ellipse
  ellipse(xZac, yZac+10, 20, 20);//Draws the inner ellipse
  var g = color(40, 184, 0);  // Define color 'g' 
  fill(g);  // Use color variable 'c' as fill color for the rectangles 
  rect(xZac, lenser, 30, 25, 20);//Draws the right rectangle
  rect(xZac-30,lensel,30,25,20);//Draws the left rectangle
}







