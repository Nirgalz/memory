
var pics = [],
	results = [],
	count = 0,
	elements = [],
	bestScore = 0,
	won = document.getElementById("won");

	function initialize() {
		nombreDeCoups = 0;
		document.getElementById("nb").innerHTML = 0;
		for (var i = 1; i < 10; i++) {
			pics.push("images/"+i+".jpg");
			pics.push("images/"+i+".jpg");
		}	
		for (var i = 0; i < 18; i++) {
			var j = i+1;
			var randoume = Math.floor((Math.random() * pics.length) );
			var pif = pics[randoume];
			var affichage = '<div class="conti"><div class="image" id="'+j+'" style="background-image: url(' +pif+ ')" onclick="compare('+j+')"></div></div>';
			document.getElementById("contain").innerHTML += affichage;
			pics.splice(randoume, 1);
		}
	}

	function compare(a) {
		if (elements.length < 2) {

			aElem = document.getElementById(a);
			elements.push(aElem);
			var attrib = aElem.style.backgroundImage;
			aElem.style.opacity = 1;
			results.push(attrib);
			count++;
			count2 = count - 2;
			count1 = count - 1;
			if (count%2 == 0) {
				nombreDeCoups++;
				document.getElementById("nb").innerHTML = nombreDeCoups;
				if (results.length == 18) {
					gameWon();
				}
				else {
					resultat();
				}
			}
		}
	}

	function resultat () {
		if (results[count2] != results[count1] || elements[0] == elements[1]) {
			setTimeout(function() {
				elements[0].style.opacity = 0;
				elements[1].style.opacity = 0;
				elements = [];
			}, 1000);
			results.splice(- 1);
			results.splice(- 1);
		count = count - 2;
		}

		else if (results[count2] == results[count1]){
			elements[0].onclick = null;
			elements[1].onclick = null;
			elements = [];
		}
	}

	function restartGame() {
			document.getElementById("contain").innerHTML = "";
			won.innerHTML = "";
			nombreDeCoups = 0;
			initialize();
	}

	function gameWon() {
		won.innerHTML = '<H1>WON IN '+nombreDeCoups+' MOVES, <br>WELL DONE!</H2><button onclick="restartGame()">Restart</button>';
		if (nombreDeCoups < bestScore) {
			highScore()
		}
		else if (bestScore == 0) {
			highScore()
		}
	}

	function highScore() {
		bestScore = nombreDeCoups;
		document.getElementById("best").innerHTML = bestScore;
	}