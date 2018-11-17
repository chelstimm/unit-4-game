$( document ).ready(function(){
  // Generates random number to guess
  var Random = Math.floor(Math.random()*102+19)
  console.log(Random)
  // Display random number
  $('.targetNumber').text(Random);
  
  //Generate random number for each crystal
  var num1 = Math.floor(Math.random()*12+1)
  var num2 = Math.floor(Math.random()*12+1)
  var num3 = Math.floor(Math.random()*12+1)
  var num4 = Math.floor(Math.random()*12+1)
  
  // Variables to keep track of wins, losses and total
  var yourScore= 0; 
  var wins= 0;
  var losses = 0;
        
$('.wins').text(wins);
$('.losses').text(losses);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('.targetNumber').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      yourScore= 0;
      $('#yourScore').text(yourScore);
      } 
// Display wins
function winner(){
alert("Yay! You won!");
  wins++; 
  $('.wins').text(wins);
  reset();
}
// Display losses
function loser(){
alert ("Sorry! You lose!");
  losses++;
  $('.losses').text(losses);
  reset()
}
//Click Crystals//
  $('.crystal-blue').on ('click', function(){
    yourScore = yourScore + num2;
    console.log("New score= " + yourScore);
    $('#yourScore').text(yourScore); 
        if (yourScore === Random){
          winner();
        }
        else if ( yourScore > Random){
          loser();
        } 
  })  
  $('.crystal-green').on ('click', function(){
    yourScore = yourScore + num3;
    console.log("New score= " + yourScore);
    $('#yourScore').text(yourScore);

          if (yourScore === Random){
          winner();
        }
        else if ( yourScore > Random){
          loser();
        } 
      }) 
  $('.crystal-greenpurple').on ('click', function(){
    yourScore = yourScore + num4;
    console.log("New score= " + yourScore);
    $('#yourScore').text(yourScore); 
      
          if (yourScore === Random){
          winner();
        }
        else if ( yourScore > Random){
          loser();
        } 
      }) 
        $('.crystal-pink').on ('click', function(){
          yourScore = yourScore + num4;
          console.log("New score= " + yourScore);
          $('#yourScore').text(yourScore); 
            
                if (yourScore === Random){
                winner();
              }
              else if ( yourScore > Random){
                loser();
              }     
  });   
  });
