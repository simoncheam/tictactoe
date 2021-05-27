
// query selector, set index, set active status
let cells = document.querySelectorAll('.row > div');
let index = 0;
let active = true;
//console.log(cells);

// for loop >> run throu index, add event listener; inputes: string of event & function of what happens

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}


// run cell clicked function | if cell = blank or even # -> X
// index++
// else event.target.textcontent = O
//index++

function cellClicked () {
 //  console.log(event.target);
 //  console.log('IT WORKED! - cell clicked');

// asigning X or O in cell

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





//function cellClicked () {
   
 //   console.log(event.target.textContent);
 //   cells[2].textContent
 //   console.log('IT WORKED! - cell content');
   // console.log(cells[i].textContent);
     // event.target.textContent = 'X'
 
 }


// ----- LOGIC Check (8) combos, if match = winner!

    if((cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') || ((cells[0].textContent== 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[3].textContent== 'X' && cells[4].textContent== 'X' && cells[5].textContent == 'X') || ((cells[3].textContent= 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[6].textContent== 'X' && cells[7].textContent== 'X' && cells[8].textContent == 'X') || ((cells[6].textContent== 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[0].textContent== 'X' && cells[4].textContent== 'X' && cells[8].textContent == 'X') || ((cells[0].textContent== 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[0].textContent== 'X' && cells[3].textContent== 'X' && cells[6].textContent == 'X') || ((cells[0].textContent= 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[1].textContent== 'X' && cells[4].textContent== 'X' && cells[7].textContent == 'X') || ((cells[1].textContent= 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[2].textContent== 'X' && cells[5].textContent== 'X' && cells[8].textContent == 'X') || ((cells[2].textContent= 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O'))) {
        stateWinner(1);
    } else if((cells[2].textContent== 'X' && cells[4].textContent== 'X' && cells[6].textContent == 'X') || ((cells[2].textContent== 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O'))) {
        stateWinner(1);
}

    }
    

// winner
function stateWinner(winner) {

    active = false;
    if(winner) {

        if(index % 2 == 1){

            document.getElementById('message').textContent = 'X Wins';
        } else {
            document.getElementById('message').textContent = 'O Wins';
        }
    } else {
        document.getElementById('message').textContent = 'Draw!';
    }

    
}




//active = false;


/// X = win


/// O = win




//----------------//


//hints
/// cells[2].textContent
// if else Statements

