//  TIC TAC TOE GAME SCRIPT...
 
let music = new Audio("music.mp3")
let audioTurn = new Audio("turn.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let gameOver= false;
//Function to change the turn of user...

const changeTurn = () =>{
    return turn === "X"? "0":"X"
}
//Function to check for a win...
let boxtext = document.getElementsByClassName('boxtext');
const checkWin = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== '') ) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        gameOver= true;
        //img load on gameOver...
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
    }
    } )
} 

//Logic for Game...
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',() => {
    if(boxtext.innerText===''){
        boxtext.innerText = turn;
       turn = changeTurn();
      //  audioTurn.play();
        checkWin();
        if(!gameOver){
        document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
        }
    }
})
})
//RESET game button logic...

reset.addEventListener('click',() =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText='';
    });

    //To restart game from turn X...
    turn = "X";
    gameOver = false
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    // To make image disappear/width-0 when game reset/restart...
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";
});
