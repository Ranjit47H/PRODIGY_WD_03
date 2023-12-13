let currentPlayer;
let players;
let isSinglePlayer;
let SinglePlayer;
let play;
let gameActive=false;

const formContainer = document.getElementById('form-container');
const singlePlay=document.getElementById("sel-sin");
const choseXO=document.getElementsByClassName("select-box")[0];
const mode2Selection=document.getElementById("buttton-mod-selection");
const rebox=document.getElementById('result');
const replay=document.getElementById('play-again');
const board = document.getElementById('board');

singlePlay.addEventListener('click',startSingle);
function startSingle(){
    mode2Selection.style.display='none';
    choseXO.style.display='block';
    SinglePlayer=true;
    const sinX=document.getElementById("sinx");
    const sinO=document.getElementById("sino");
    sinX.addEventListener('click',()=>{
        currentPlayer='X';
        choseXO.style.display='none';
        board.style.display = 'grid';
        initializeBoard();
        gameActive=true;
        players=["Player","Computer"];
    })
    sinO.addEventListener('click',()=>{
        currentPlayer='X';
        choseXO.style.display='none';
        board.style.display = 'grid';
        initializeBoard2();
        gameActive=true;
        players=["Computer","Player"];
    })
}
function initializeBoard() {
    board.textContent = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', () => cellClicked(cell));
        board.appendChild(cell);
    }
}
function initializeBoard2(){
    board.textContent = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cellClicked2(cell);
            board.appendChild(cell);
        }
}
function cellClicked2(cell){
    if (!cell.textContent&&gameActive) {
        if(currentPlayer==='X'){
            cell.classList.add('cell-x');
            makeComputerMove2();
        }
        if(currentPlayer==='O'){
            cell.classList.add('cell-o');
            cell.textContent = currentPlayer;
        }
        if (checkWin()) {
            let x=players[currentPlayer==='X'?0:1];
            showResult(`${x} WINS!`);
        } else if (checkDraw()) {
            showResult('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
}

function cellClicked(cell) {
    if (!cell.textContent&&gameActive) {
        cell.textContent = currentPlayer;
        if(currentPlayer==='X'){
            cell.classList.add('cell-x');
        }
        if(currentPlayer==='O'){
            cell.classList.add('cell-o');
        }
        if (checkWin()) {
            let x=players[currentPlayer==='X'?0:1];
            showResult(`${x} WINS!`);
        } else if (checkDraw()) {
            showResult('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (SinglePlayer && currentPlayer==="O") {
                makeComputerMove();
            }
            }
        }
    }
const doublPlay=document.getElementById("sel-dou");
doublPlay.addEventListener("click",()=>{
    formContainer.style.display="block";
    mode2Selection.style.display="none";
    SinglePlayer=false;
})
const twosub=document.getElementById("sub");
twosub.addEventListener('click',startGame);
function startGame() {
    console.log("hello");
    players = [
                document.getElementById('player1').value || 'Player 1',
                document.getElementById('player2').value || 'Player 2'
            ];
    currentPlayer = 'X';
    formContainer.style.display="none";
    initializeBoard();
    board.style.display = 'grid';
    gameActive=true;
        }

    
    function makeComputerMove() {
        const emptyCells = Array.from(document.querySelectorAll('.cell')).filter(cell => !cell.textContent);
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerMove = emptyCells[randomIndex];
        setTimeout(() => cellClicked(computerMove), 400);
    }
    function makeComputerMove2(){
        const emptyCells = Array.from(document.querySelectorAll('.cell')).filter(cell => !cell.textContent);
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerMove = emptyCells[randomIndex];
        setTimeout(()=>{
            computerMove.textContent='X';
        })
        currentPlayer='X';
    }
    function checkWin() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            if (document.querySelector(`.cell[data-index="${a}"]`).textContent &&
                document.querySelector(`.cell[data-index="${a}"]`).textContent ===
                document.querySelector(`.cell[data-index="${b}"]`).textContent &&
                document.querySelector(`.cell[data-index="${a}"]`).textContent ===
                document.querySelector(`.cell[data-index="${c}"]`).textContent) {
                return true;
            }
        }
        return false;
    }

    function checkDraw() {
        return !Array.from(document.querySelectorAll('.cell')).some(cell => !cell.textContent);
    }
    function showResult(name){
        const re=document.getElementById('re');
        re.textContent=name;
        rebox.style.display='block';
        gameActive=false;
    }
    replay.addEventListener('click',()=>{
        gameActive=true;
      mode2Selection.style.display='block';
      rebox.style.display='none';  
      board.style.display = 'none';
    })

   var y=document.getElementById('clickone');
   y.addEventListener('click',function(event){
    event.target.classList.add('clicktwo');
    console.log(event.target);
   });