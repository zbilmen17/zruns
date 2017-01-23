
var y1,x1,y2,x2;

function initializeGameOver() {
  //y1=yZac+78;
  x1=xZac+70;
  //y2=yZac-78; 

  //println ("initialize Game Over")

}
   
function updateGameOver() {
  if(x<100){
     
    if((yZac-78<y3)&&(yZac+78>y4)){
      println("Collision Confirmed");
      rect(0, 0, 700, 300);
        var c = color(255, 204, 0);  // Define color 'c'
        fill(c);  // Use color variable 'c' as fill color
        strokeWeight(0);
        textSize(100);
        textStyle(BOLD);
        text("GAME OVER", 40, 180);
      
    }
    }
    


}

