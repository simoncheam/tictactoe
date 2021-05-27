
// query selector, set index, set active status
let cells = document.querySelectorAll('.row > div');
let index = 0;
let active = true;
let gameOver = false;

// for loop >> run throu index, add event listener; inputes: string of event & function of what happens

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}


function cellClicked () {
 //  console.log(event.target);
    if (gameOver === true) {
        location.reload();
    }

    if (active) {
        if (event.target.textContent == '') {
            if (index % 2 == 0) {
            event.target.textContent = 'X';
            index++;
            } else {
            event.target.textContent = 'O';
            index++;
             }
         }
    }





// ----- LOGIC Check (8) combos, if match = winner!

    if((cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') || ((cells[0].textContent== 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[3].textContent== 'X' && cells[4].textContent== 'X' && cells[5].textContent == 'X') || ((cells[3].textContent== 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[6].textContent== 'X' && cells[7].textContent== 'X' && cells[8].textContent == 'X') || ((cells[6].textContent== 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[0].textContent== 'X' && cells[4].textContent== 'X' && cells[8].textContent == 'X') || ((cells[0].textContent== 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[0].textContent== 'X' && cells[3].textContent== 'X' && cells[6].textContent == 'X') || ((cells[0].textContent== 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[1].textContent== 'X' && cells[4].textContent== 'X' && cells[7].textContent == 'X') || ((cells[1].textContent== 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[2].textContent== 'X' && cells[5].textContent== 'X' && cells[8].textContent == 'X') || ((cells[2].textContent== 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[2].textContent== 'X' && cells[4].textContent== 'X' && cells[6].textContent == 'X') || ((cells[2].textContent== 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O'))) {
        stateWinner(1);
    
    } else if(index==9 && stateWinner(0)) {
      
     console.log("DRAW! - Click any cell to restart game...");
     //addEventListener('click', restartGame)

    }

}
    

// winner
function stateWinner(winner) {

    active = false;

    if(winner) {
        if(index % 2 == 1){

            //document.getElementById('message').textContent = 'X Wins';
            console.log("X Wins! - Click any cell to restart game...");
            alert("X Wins! - Click any cell to restart game..." );
            gameOver = true;


        } else {
          //  document.getElementById('message').textContent = 'O Wins';  /// --- ERROR HERE!
            console.log("O Wins! - Click any cell to restart game...");
            alert("O Wins! - Click any cell to restart game..." );
            gameOver = true;
        }
    } else {
      //  document.getElementById('message').textContent = 'Draw!';
        console.log("DRAW! - Click any cell to restart game...");
        alert("DRAW! - Click any cell to restart game..." );
        gameOver = true;
    }
}
