let userName = prompt("Hello, what's your name?");
alert(`Welcome, ${userName}!\nGet ready to face off against The Computer!\nYou may enter 'r', 'p', or 's' and the game will still work.`);
let playerSelection = "RPS";
let computerSelection = 10;

function getComputerChoice()
{
	let randomAssigner = Math.floor(Math.random() * 3);
	if (randomAssigner === 0)
	{
		computerSelection = 1;
	}
	else if (randomAssigner === 1)
	{
		computerSelection = 2;
	}
	else 
	{
		computerSelection = 3;
	}
}

function playerInput()
{
	playerSelection = prompt("Rock, Paper, or Scissors?");
	playerSelection = playerSelection.toLowerCase().charCodeAt(0);
	if (playerSelection === 114)
	{
		playerSelection = 1;
	}
	else if (playerSelection === 112)
	{
		playerSelection = 2;
	}
	else if (playerSelection === 115)
	{
		playerSelection = 3;
	}
	else 
	{
		playerInput();
	}
}