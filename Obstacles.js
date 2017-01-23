/*This obstacle.js file will hold the functions 
 * that intialize and udpate the obstacle
 *
 *File description:
 *ADD HERE
 *
 */

var x,y,y3,y4;
function initializeObstacle() {
 
x=700
y=300
//println ("initialize Obstacle")

}

function updateObstacle() {
  //insert code the make the obstacle move automatically
  //and reset to random positions so the game isn't boring.

  //insert the code that draws the obstacle
  
  if(x <= -width) {
  x = 700-40;
  y = Math.floor((Math.random() * 300) + 40);
  y3 = y;
  y4 = y + 40;
} else {
  x = x - 10;
  // push() //right edge of the triangle
  // //translate(x+700-40, y) //Move point of rotation to the middle of full edge 
  // rotate(2 * PI * 1 / 6) //rotate line
  // //translate(-(x+700-40), -y) //set rotation point back to default
  // pop()
}
  
  //rect(x, y, 24, 24);
  fill(0,0,0);
  quad(x,y,x+30,y+40,x+20,y+30,x+10,y+40)
  //ellipse(700+x, y, 10, 10);
  //rect(x,y,30,10)
  
 
  // rect(Math.floor(horo),vert,Math.floor(dimensionX),dimensionY)
  // horo = horo - 0.0001 //increments horizontal movement
  // initializeObstacle(horo,vert) 
  
  

}

/** TESTING CODE **/
/* This code should be commented when the team has put all
the files in one project. But you will need this code to test
the character functions. Add the code to test your functions in here.
*/
/*function setup() {
createCanvas(700,300)

initializeObstacle()

}

function draw() {
  clear();
updateObstacle()
}*/