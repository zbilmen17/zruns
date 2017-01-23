function setup() {
   createCanvas (700,300);
    
   initializeBackground();
   initializeCharacter();
   initializeObstacle();
   initializeGameOver();

}
   
function draw() {
  clear();
  updateBackground();
  updateCharacter();
  updateObstacle();
  updateGameOver();
}