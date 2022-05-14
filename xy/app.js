//changing Player 
var userOne = true;
var userTwo = false;



function changeUser(){
    userOne = !userOne;
    userTwo = !userTwo;
    if(userOne){
        document.querySelector('h1').innerHTML = 'User one';
    } else {
        document.querySelector('h1').innerHTML = 'User Two';
    }
}

// adding X and 0

function changeColor(id){
    if(isBoxClickable(id)){

        if(this.userOne){
            document.getElementById(id).innerHTML = '0';
            this.playerOneClicks.push(id)
        }

        if(this.userTwo){
            document.getElementById(id).innerHTML = 'X';
            this.playerTwoClicks.push(id)
        }

        this.allClicks.push(id)
        changeUser()
        getResults()

    } else {
        alert('this box allready clicked')
    }
}

function isBoxClickable(id){
    return !allClicks.find(element => element == id)
}

//stop the game
// check results
// finish game 


var allClicks = [];
var playerOneClicks = [];
var playerTwoClicks = [];


function getResults(){
    checkWinner()
    if(allClicks.length >= 9){
        alert('game has been finished, nobody wins')
        startAgain()
    }

}

function startAgain(){
    allClicks = [];
    playerOneClicks = [];
    playerTwoClicks = [];
    var list = document.getElementsByClassName("cell-input");
    for (let item of list) {
        item.innerHTML = '';
    }
}

function checkWinner(){
    isPlayeroneWinner()
    isPlayerTwoWinner()

}


function isPlayeroneWinner(){
    if(winningCombinations.some(combination => checkWinningCombination(combination, playerOneClicks))){
        alert('player one wins')
        return true
    } else {
        console.log('aint working')
    }
}

function isPlayerTwoWinner(){
    if(winningCombinations.some(combination => checkWinningCombination(combination, playerTwoClicks))){
        alert('player Two wins')
        return true
    } else {
        console.log('aint working')
    }
}
 

// function takes in two arguments, first argument combination, second argument playerClicks
//function should check if all elements of the combination are in playerClicks array
// function should return true or false

function checkWinningCombination(combination, playerClicks){
    return combination.every(combinationElement => playerClicks.find(playerClick => playerClick == combinationElement))
}

var winningCombinations = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
    [12, 22, 32],
    [13, 23, 33],
    [11, 21, 31],
    [11, 22, 33],
    [13, 22, 31],
] 


