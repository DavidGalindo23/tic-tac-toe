let firstMove; 
let stillPlaying;

document.querySelector('.grid').addEventListener('click',positionSqr); 
let resetBtn = document.querySelector('#reset-grid')
 resetBtn.addEventListener('click',reset); 

startGame(); 


function startGame(){ 
  firstMove = "X"; 
  stillPlaying = true; 
  playersTrnMsg("First player is " + firstMove+ " "); 
}

function playersTrnMsg(msg){ 
    document.getElementById("players-turn").innerText = msg; 
}

function positionSqr(square){ 
    
   if(stillPlaying === true){  
        if(square.target.textContent === ''){ 
            square.target.textContent = firstMove; 
            checkForWin();
            nextTurn();  
        }else { 
        playersTrnMsg("Pick another sqaure"); 
        }
        
    }
    
}
 
function nextTurn(){ 
    if (firstMove === "X"){ 
        firstMove = "O";
        //playersTrnMsg("It's player's " + firstMove + " "); 
    } else { 
        firstMove = "X"; 
       // playersTrnMsg("It's player's " + firstMove + " "); 
    }
}

function checkForWin(){ 
    let squares = document.querySelectorAll('.grid-square'); 
    console.log(squares[1].textContent)
   if(squares[0].textContent === squares[1].textContent && squares[0].textContent === squares[2].textContent && (squares[0].textContent === 'X' || squares[0].textContent === 'O')){ 
       playersTrnMsg("player " + firstMove + " wins");
       
       stillPlaying = false; 
   }else if(squares[3].textContent === squares[4].textContent && squares[3].textContent === squares[5].textContent && (squares[3].textContent === 'X' || squares[3].textContent === 'O')){ 
        playersTrnMsg("player " + firstMove + " wins");
        stillPlaying = false; 
   }else if(squares[6].textContent === squares[7].textContent && squares[6].textContent === squares[8].textContent && (squares[6].textContent === 'X' || squares[6].textContent === 'O')){ 
        playersTrnMsg("player " + firstMove + " wins"); 
        stillPlaying = false;
   }else if(squares[0].textContent === squares[3].textContent && squares[0].textContent === squares[6].textContent && (squares[0].textContent === 'X' || squares[0].textContent === 'O')){ 
        playersTrnMsg("player " + firstMove + " wins"); 
        stillPlaying = false; 
   }else if(squares[1].textContent === squares[4].textContent && squares[1].textContent === squares[7].textContent && (squares[1].textContent === 'X' || squares[1].textContent === 'O')){ 
       playersTrnMsg("player " + firstMove + " wins"); 
       stillPlaying = false; 
   }else if(squares[2].textContent === squares[5].textContent && squares[2].textContent === squares[8].textContent && (squares[2].textContent === 'X' || squares[2].textContent === 'O')){ 
       playersTrnMsg("player " + firstMove + " wins"); 
       stillPlaying = false; 
   }else if(squares[0].textContent === squares[4].textContent && squares[0].textContent === squares[8].textContent && (squares[0].textContent === 'X' || squares[0].textContent === 'O')){ 
       playersTrnMsg("player " + firstMove + " wins"); 
       stillPlaying = false; 
   }else if(squares[2].textContent === squares[4].textContent && squares[2].textContent === squares[6].textContent && (squares[2].textContent === 'X' || squares[2].textContent === 'O')){ 
       playersTrnMsg("player " + firstMove + " wins"); 
       stillPlaying = false; 
   }else{ 
      return; 
  }
   
}

function reset(){ 
    let squares = document.querySelectorAll('.grid-square'); 
    squares.forEach(function (square){
        square.textContent = ''; 
     }); 
     startGame(); 
}
