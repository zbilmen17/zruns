/*This background.js file will hold the main functionality of the program
 *
 *Program description:
 *ADD HERE
 *
 */

/*NOTES:
A person responsible for this file should
design the background as well as
initalize the character and obstalce by calling those functions and
call the update functions for the character and the obstacle*/

var xbac,ybac,wbac,hbac;

//Implement
function initializeBackground(){
    xbac = 680
    ybac = 300
    wbac = 40
    hbac = 60
//ellipse(xbac,ybac,wbac,hbac)
}

function updateBackground(){
  background('#3498db')
  fill('#78AB46')
  ellipse(xbac,ybac,wbac,hbac)
  fill('#2980b9')
  xbac = xbac-4
  if (xbac < 0)
  xbac = 670
}

//Change or implement as needed
// function setup() {
//     x = 680
//     y = 300
//     w = 40
//     h = 60
//   createCanvas(700, 300);
//   //initializeCharacter();
//   initializeBackground();
// }

// //Change or implement as needed
// function draw() {
//   clear();
//   updateBackground();
//   // updateCharacter();
//   //updateObstacle();
// }