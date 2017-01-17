function setup() {
   createCanvas (700,300);
    
   initializeBackground();
   initializeCharacter();
   initializeObstacle();
}
   
function draw() {
  clear();
  updateBackground();
  updateCharacter();
  updateObstacle();
  
}