var computer = {
	name: 'computer',
	score: 0,
	pick: ''
};

var player = {
	name: '',
	score: 0,
	pick:''
};

var round = '';

function newGame() {
	computer.score = 0;
	computer.pick = '';
	player.score = 0;
	player.pick = '';
	round = '';
	player.name = prompt("Jak się nazywasz?", "Imię bądź nick");
	document.getElementById("playerName").innerHTML = player.name;
	document.getElementById('playerScore').innerHTML = player.score;
	document.getElementById('computerScore').innerHTML = computer.score;
	document.getElementById('roundNr').innerHTML = round;	
	var buttons = document.getElementsByClassName("pick-button");
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
	}
}
function playerPick(pick) {
	player.pick = pick;	
	computerPick();
	checkResult();	
}
var x = Math.random()
function computerPick() {
	switch(Math.floor(Math.random()*3)) {
		case 0:
		computer.pick = 'rock';
		break;
		case 1:
		computer.pick = 'paper';
		break;
		case 2:
		computer.pick = 'scissors';
		break;
	}
}
function checkResult () {
		round++ ;	
	var gameResult;
	if (player.pick === computer.pick) {
		gameResult = "Remis!"
	}
	else if (player.pick === 'rock') {
		if (computer.pick === 'scissors') {
			player.score++;
			gameResult = 'Twoja wygrana!';	
		}
		else if (computer.pick === 'paper') {
			computer.score++;
			gameResult = 'Wygrał komputer!';
		}
	}
	else if (player.pick === 'paper') {
		if (computer.pick === 'rock') {
			player.score++;
			gameResult = 'Twoja wygrana!';		
		}
		else if (computer.pick === 'scissors') {
			computer.score++;
			gameResult = 'Wygrał komputer!';
		}
	}
	else if (player.pick === 'scissors') {
		if (computer.pick === 'paper') {
			player.score++;
			gameResult = 'Twoja wygrana!';		
		}
		else if (computer.pick === 'rock') {
			computer.score++ ;
			gameResult ='Wygrał komputer!';
		}
	}
	
	document.getElementById('computerPick').innerHTML = computer.pick;
	document.getElementById('playerPick').innerHTML = player.pick;
	document.getElementById('gameResult').innerHTML = gameResult;
	document.getElementById('playerScore').innerHTML = player.score;
	document.getElementById('computerScore').innerHTML = computer.score;
document.getElementById('roundNr').innerHTML = round;
	if (player.score >= 10 || computer.score >= 10) {
		if (player.score > computer.score) {
			document.getElementById('roundResult').innerHTML = "Wygrałeś tę rozgrywkę !";
		}
		else {
			document.getElementById('roundResult').innerHTML = "Sorry :( Komputer wygrał tym razem !";
		}
		var buttons = document.getElementsByClassName("pick-button");
  		for(var i = 0; i < buttons.length; i++) {
			 buttons[i].style.visibility = 'hidden';
  		};
	}
}
