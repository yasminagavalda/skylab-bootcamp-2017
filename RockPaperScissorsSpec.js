describe("RockPaperScissors", function() {
  var game;

  beforeEach(function() {
    game = game
  });

  function getRandomValue () {
    var values = ['ROCK', 'PAPER', 'SCISSORS']
    return values[Math.floor(Math.random()*3)]
  }

  it("Decides the correct winner between two random values", function() {
    val1 = getRandomValue();
    val2 = getRandomValue();
    var players = [val1, val2];
    players.sort()
    var result = ''
    if (val1 === val2) {
      result = val1 + ' vs ' + val2 + ' => tie!'
    } else if (players[0] === 'PAPER' && players[0] === 'ROCK') {
      result = val1 + ' vs ' + val2 + ' => PAPER wins!'
    } else if (players[0] === 'PAPER' && players[0] === 'SCISSORS') {
      result = val1 + ' vs ' + val2 + ' => SCISSORS wins!'
    } else {
      result = val1 + ' vs ' + val2 + ' => ROCK wins!'
    }
    expect(game.rockPaperScissors(val1, val2)).toBe(result);
  });

  it("If the function is called with 'PAPER' the move of the second player is randomly generated", function() {
    val1 = 'PAPER'
    result1 = 'PAPER vs PAPER => tie!'
    result2 = 'PAPER vs SCISSORS => SCISSORS wins!'
    result3 = 'PAPER vs ROCK => PAPER wins!'

    expect(game.rockPaperScissors(val1)).toBe(result1 || result2 || result3);
  });

  it("If the function is called with 'ROCK' the move of the second player is randomly generated", function() {
    val1 = 'ROCK'
    result1 = 'ROCK vs ROCK => tie!'
    result2 = 'ROCK vs SCISSORS => ROCK wins!'
    result3 = 'ROCK vs PAPER => PAPER wins!'

    expect(game.rockPaperScissors(val1)).toBe(result1 || result2 || result3);
  });

  it("If the function is called with 'SCISSORS' the move of the second player is randomly generated", function() {
    val1 = 'SCISSORS'
    result1 = 'SCISSORS vs SCISSORS => tie!'
    result2 = 'SCISSORS vs ROCK => ROCK wins!'
    result3 = 'SCISSORS vs PAPER => SCISSORS wins!'

    expect(game.rockPaperScissors(val1)).toBe(result1 || result2 || result3);
  });


  it("Ranking sums ok if the winner is player1", function() {
    var count1 = game.player1
    game.rockPaperScissors('ROCK', 'SCISSORS')
    expect(game.player1).toBe(count1+1);
  });

  it("Ranking sums ok if the winner is player2", function() {
    var count2 = game.player2
    game.rockPaperScissors('ROCK', 'PAPER')
    expect(game.player2).toBe(count2+1);
  });

  it("The ranking does not add up to the player1 if there is a tie", function() {
    var value = getRandomValue();
    var count1 = game.player1
    game.rockPaperScissors(value, value)
    expect(game.player1).toBe(count1);
  });

  it("The ranking does not add up to the player2 if there is a tie", function() {
    var value = getRandomValue();
    var count2 = game.player2
    game.rockPaperScissors(value, value)
    expect(game.player2).toBe(count2);
  });

  it("Shows the correct winner", function() {
    var player1 = game.player1;
    var player2 = game.player2;
    result = ''
    if (player1 === player2) {
      result = 'There is a tie!'
    } else if (player1 > player2) {
      result = 'Player1 is winning!'
    } else {
      result = 'Player2 is winning!'
    }
    expect(game.winner()).toBe(result);
  });

});
