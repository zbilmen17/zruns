/*This character.js file will hold the functions 
 * that intialize and udpate the character
 *
 *File description:
 *ADD HERE
 *
 */

var xZac;
var yZac;
var lense;


/*function setup() {
   createCanvas (700,300);
   initializeCharacter ();
   }*/

function initializeCharacter() {
  xZac=45;
  yZac=225;
  lense=195;

}

function updateCharacter() {
  //insert code that make the character move when either the mouse
  //moves or keys are pressed.
  //println(keyCode);
  if (keyCode == 38) {
    yZac=yZac-1;
    lense=lense-1
  } else if (keyCode == 40) {
    yZac=yZac+1;
    lense=lense+1
  }
  
  //insert the code that draws the character
  var c = color(255, 204, 0);  // Define color 'c'
  fill(c);  // Use color variable 'c' as fill color
  noStroke();  // Don't draw a stroke around shapes
  ellipse(xZac,yZac,70,78)
  var f = color(15, 104, 0);  // Define color 'c'
  fill(f);  // Use color variable 'c' as fill color
  noStroke();  // Don't draw a stroke around shapes
  ellipse(xZac, yZac, 35, 55);
  var g = color(40, 184, 0);  // Define color 'c'
  fill(g);  // Use color variable 'c' as fill color
  rect(xZac, lense, 30, 25, 20);
}


/*function draw() {
  background(750);
  updateCharacter();
  clear();
  updateObstacle()
}*/

  





