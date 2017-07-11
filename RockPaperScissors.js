var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors : function (val1, val2) {
	if (val2 === 'undefined') {
		val2 = getValue()
	}
	var values = [val1, val2];
	values.sort();
	if (val1 === val2) {
		return val1 + ' vs ' + val2 + ' => tie!'
	} else if (values[0] === 'PAPER' && values[1] === 'ROCK') {
		(val1 === values[0]) ? game.player1+=1 : game.player2+=1
		return val1 + ' vs ' + val2 + ' => PAPER wins!'
	} else if (values[0] === 'PAPER' && values[1] === 'SCISSORS') {
		(val1 === values[0]) ? game.player2+=1 : game.player1+=1
		return val1 + ' vs ' + val2 + ' => SCISSORS wins!'
	} else {
		(val1 === values[0]) ? game.player1+=1 : game.player2+=1
		return val1 + ' vs ' + val2 + ' => ROCK wins!'
	}
  }, 
  winner: function() {
  	if (this.player1 === this.player2) {
  		return 'There is a tie!'
  	} else if (this.player1 > this.player2) {
  		return 'Player1 is winning!'
  	} else {
  		return 'Player2 is winning!'
  	}
  }
}

function getValue () {
	var values = ['PAPER', 'ROCK', 'SCISSORS']
	return values[Math.floor(Math.random()*3)]
}





