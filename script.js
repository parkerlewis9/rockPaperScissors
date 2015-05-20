document.onLoad = initialize();

function initialize() {
	function getRandomInt() {
		return Math.floor(Math.random()*(4-1) + 1);
	};

	function randomNum() {
		var random = getRandomInt();
		console.log(random);
		var computerPick = "";
		if (random === 1) {
			computerPick = "rock"
		};
		if (random === 2) {
			computerPick = "paper"
		};
		if (random === 3) {
			computerPick = "scissors"
		};
		return computerPick;
		console.log(computerPick);
	};

	var win = 0;
	var lose = 0;
	var tie = 0;

	var scores = document.querySelector("h2");
	var describe = document.querySelector("h3");

	var rockPick = document.querySelector("#rock");
	rockPick.addEventListener("click", function() {
		console.log("hello")
		var computerPick = randomNum();
		if (computerPick === "rock") {
			tie += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(tie)
		} else if (computerPick === "paper") {
			lose += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(lose)
		} else if (computerPick === "scissors") {
			win += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(win)
		}
	});

	var paperPick = document.querySelector("#paper");
	paperPick.addEventListener("click", function() {
		console.log("hello")
		var computerPick = randomNum();
		if (computerPick === "rock") {
			win += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(win)
		} else if (computerPick === "paper") {
			tie += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(tie)
		} else if (computerPick === "scissors") {
			lose += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(lose)
		}
	});

	var scissorPick = document.querySelector("#scissors");
	scissorPick.addEventListener("click", function() {
		console.log("hello")
		var computerPick = randomNum();
		if (computerPick === "rock") {
			lose += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(lose)
		} else if (computerPick === "paper") {
			win += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(win)
		} else if (computerPick === "scissors") {
			tie += 1;
			describe.innerHTML = "Computer picked " + computerPick + ".";
			scores.innerHTML = "Wins: " + win + " Loses: " + lose + " Ties: " + tie;
			console.log(tie)
		}
	});

};



