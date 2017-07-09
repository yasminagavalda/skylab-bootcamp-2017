// randomLargest(): Randomizes three numbers in range (0.. 100) and prints the largest one.

function randomLargest () {
	var randomNumbers = [];
	for (var i=0; i<3; i++) {
		randomNumbers.push(Math.round(Math.random()*100));
	}
	console.log('The random numbers are ' + randomNumbers);
	var max = randomNumbers[0];
	randomNumbers.forEach(function(number) {
		if (number>max) {
			max = number;
		};
	});
	console.log('The largest one is ' + max);
};

randomLargest()



// randomEven(): Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven () {
	var numberRandom = Math.round(Math.random()*100);
	console.log('The random number is ' + numberRandom);
	for (var i=0; i<=numberRandom; i+=2) {
		console.log(i);
	};
};

randomEven()



// randomOdd(): Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed

function randomOdd () {
	var numberRandom = Math.round(Math.random()*100);
	console.log('The random number is ' + numberRandom);
	if (numberRandom > 40) {
		for (var i=41; i<=numberRandom; i+=2) {
			console.log(i);
		};
	};
}

randomOdd()



// randomOddSmallers(): Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)

function randomOddSmallers () {
	var numberRandom = Math.round(Math.random()*100);
	console.log('The random number is ' + numberRandom);
	if (numberRandom > 40) {
		for (var i=41; i<=numberRandom; i+=2) {
			console.log(i);
		};
	} else {
		for (var i=40; i>=numberRandom; i--) {
			console.log(i);
		};
	}
}

randomOddSmallers()



// randomRandom(): Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

function randomRandom () {
	var numberRandom = Math.round(Math.random()*100);
	console.log('The random number is ' + numberRandom);
	var randomNumbers = [];
	for (var i=0; i<=numberRandom; i++) {
		randomNumbers.push(Math.round(Math.random()*100));
	}
	console.log(numberRandom + ' random numbers are ' + randomNumbers);
	var max = randomNumbers[0];
	randomNumbers.forEach(function(number) {
		if (number>max) {
			max = number;
		};
	});
	console.log('The largest one is ' + max);
}

randomRandom()



// randomSum(): Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

function randomSum () {
	var numberRandom = (Math.floor(Math.random()*8999) + 1000).toString();
	console.log('The random number is ' + numberRandom);
	var numbers = [];
	for (i=0; i<numberRandom.length; i++) {
		numbers.push(Number(numberRandom[i]));
	}
	var sum = numbers.reduce(function(a,b) {
		return a + b;
	});
	console.log('The sum of its digits is ' + sum)
}

randomSum()



// randomOne(): Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5

function randomOne () {
	var numberRandom = (Math.floor(Math.random()*8999) + 1000)
	console.log('The random number is ' + numberRandom);
	var sum;
	do {
		numberRandom = numberRandom.toString()
		var numbers = [];
		for (i=0; i<numberRandom.length; i++) {
			numbers.push(Number(numberRandom[i]));
		}
		var numberRandom = numbers.reduce(function(a,b) {
			return a + b;
		});
		
	} while (numberRandom >= 10);
	console.log('The sum of its digits until getting only on is ' + numberRandom);
}

randomOne()



// randomSmallest(): Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

function randomSmallest () {
	var n1 = Math.round(Math.random()*100);
	var n2 = Math.round(Math.random()*100);
	console.log('The random numbers are ' + n1 + ' and ' + n2);
	for (var i=2; i<=Math.min(n1,n2); i++) {
		if (n1 % i === 0 && n2 % i === 0) {
			return 'The lowest common divisor for ' + n1 + ' and ' + n2 + ' is ' + i;
		}
	}
	return 'There is no common divisor for ' + n1 + ' and ' + n2;
}

randomSmallest()



// randomLeastCommon(): Randomizes two numbers and prints their least common multiplication of them.

function MCD (n1, n2) {
	for (var i=Math.min(n1,n2); i>1; i--) {
		if (n1 % i === 0 && n2 % i === 0) {
			return i
		}
	}
	return -1
}

function randomLeastCommon () {
	var n1 = Math.round(Math.random()*100);
	var n2 = Math.round(Math.random()*100);
	console.log('The random numbers are ' + n1 + ' and ' + n2);
	if (MCD(n1, n2) !== -1) {
		var mcm = (n1*n2) / MCD(n1,n2)
		return 'Their least common multiple is ' + mcm
	} else {
		return 'Their least common multiple is ' + n1*n2
	}

}

randomLeastCommon()