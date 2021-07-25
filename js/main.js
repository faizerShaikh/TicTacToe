// dom variables //

var cells = document.querySelectorAll(".cell");
var playAgnBtns = document.querySelectorAll(".play-agn");
const status = document.querySelector(".status");
const endGame = document.querySelector(".endGame");
const playerX = document.querySelector(".xp");
const playerO = document.querySelector(".op");
const tie = document.querySelector(".tie");
const chance = document.querySelector(".chance");
const tgame = document.querySelector(".tgame");
const exits = document.querySelectorAll(".stop");

// adding global event listeners //

playAgnBtns.forEach(play => {
				//to reset game 
				play.addEventListener("click",() => {
								status.style.display = 'none';
								resetGame();
				})
})

exits.forEach(exit => {
				// to stop whole game 
				exit.addEventListener("click",stopGame);
})


// game variables //

var b = ["","","",
									"","","",
									"","","",
];
var gameOver = false;
var playAgn = false;
var flag = true;
var count = 0;
var xWin = 0;
var oWin = 0;
var tieNo = 0;
var game = 0;
var validIP = false;


// main game start //

if (playAgn == false) {
				chanceUpdate(`Player <span class="red">X</span>'s Chance`);
				cells.forEach((cell,index) =>
								cell.addEventListener("click", () => {
												if (gameOver == false) {
																checkValidIP(index);
																if (validIP == true) {
																				if (flag == true) {
																								insertValue(cell,index,"X");
																								checkWin(b);
																								checkTie();
																								count += 1;
																								cell.classList.remove("red");
																								flag = false;
										     				 				chanceUpdate(`Player <span class="red">O</span>'s Chance`);
																				}else if(flag == false){
																								insertValue(cell,index,"O");
																								checkWin(b);
																								checkTie();
																								count += 1;
																								cell.classList.add("red");
																								flag = true;
										     				 				chanceUpdate(`Player <span class="red">X</span>'s Chance`);								
																				}
																}
												}
								})
				)
};


// check valid input function //

function checkValidIP(index) {
				if (b[index] == "X" || b[index] == "O") {
								setTimeout(	chanceUpdate(`Please Select <span class="red">Valid</span> Option`),2000);
								validIP = false;
				}else {
								validIP = true;			
				};
};

// insert value to board function //

function insertValue(cell,index,value) {
				cell.innerHTML = `${value}`;
				b[index] = `${value}`;
}


// checking win function //

function checkWin(b) {
				if((b[0] == 'X' && b[1] == 'X' && b[2] == 'X') || (b[3] == 'X' && b[4] == 'X' && b[5] == 'X') || (b[6] == 'X' && b[7] == 'X' && b[8] == 'X') || (b[0] == 'X' && b[4] == 'X' && b[8] == 'X') || (b[2] == 'X' && b[4] == 'X' && b[6] == 'X') || (b[0] == 'X' && b[3] == 'X' && b[6] == 'X') || (b[1] == 'X' && b[4] == 'X' && b[7] == 'X') || (b[2] == 'X' && b[5] == 'X' && b[8] == 'X')) {
								gameOver = true;
								xWin += 1;
								game += 1;
								tgame.innerHTML = game;
								playerX.innerHTML = xWin;
								displayStatus(`Congratulations <br> <span class="red">Player X</span> You Won`);
				}else if((b[0] == 'O' && b[1] == 'O' && b[2] == 'O') || (b[3] == 'O' && b[4] == 'O' && b[5] == 'O') || (b[6] == 'O' && b[7] == 'O' && b[8] == 'O') || (b[0] == 'O' && b[4] == 'O' && b[8] == 'O') || (b[2] == 'O' && b[4] == 'O' && b[6] == 'O') || (b[0] == 'O' && b[3] == 'O' && b[6] == 'O') || (b[1] == 'O' && b[4] == 'O' && b[7] == 'O') || (b[2] == 'O' && b[5] == 'O' && b[8] == 'O')) {
	 						gameOver = true;
								oWin += 1;
								game += 1;
								tgame.innerHTML = game;
								playerO.innerHTML = oWin;
					   displayStatus(`Congratulations <br> <span class="red">Player O</span> You Won`);
				};
};

// display status function //

function displayStatus(win){
				let msg = document.querySelector(".msg");
				msg.innerHTML = `${win}`;
				status.style.display = 'block';
}

// reset game function //

function resetGame() {
				b = ["","","",
								 "","","",
								 "","","",
				];
				cells.forEach((cell) => cell.innerHTML = "");
				gameOver = false;
				count = 0;
}

// to stop function  //

function stopGame(){
				endGame.style.display = "none";
			 const body = document.querySelector("body");
				const h1 = document.createElement("h1");
				h1.classList.add("heading");
				h1.innerHTML =`<span class="red">Thanks</span> For Playing Game ` ;
				h1.style.borderBottom = "none";
				body.appendChild(h1);
}

// to upadate chance function  //

function chanceUpdate(massage) {
				chance.innerHTML = `${massage}`;
}

// check tie function //

function checkTie(){
				if(gameOver == false) {
							 if(count == 8) {
			 								tieNo += 1;
												game += 1;
												tie.innerHTML = tieNo;
											 tgame.innerHTML = game;
												displayStatus("It's Tie! <br>Well Played Both");
												gameOver = true;
		  				}
				}			
}
