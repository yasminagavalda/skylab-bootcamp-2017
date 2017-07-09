// Fibonacci Challenge: Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

function fibonacci (n) {
	var fiboArray = [0, 1];
	var i = 1;
	if (n === 1 || n === 2) {
		return fiboArray[n-1]
	} else {
		while (fiboArray.length<n) {
			fiboArray.push(fiboArray[i] + fiboArray[i-1]);
			i++;
		};
	}

	return fiboArray[fiboArray.length-1];
}

fibonacci (4)



// String Calculator: Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. 

function add () {
	var numbers = Array.prototype.slice.call(arguments)
	return numbers.reduce(function(a, b) {return a+b});
}

add(1,2,3,4)



//Reverse Number: Write a JavaScript function that reverse a number

function reverseNumber (number) {
	var numberS = number.toString();
	return parseInt(numberS.split('').reverse().join(''));
}

reverseNumber (2345)



// Is palindrome?: Write a JavaScript function that checks whether a passed string is palindrome or not A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome (string) {
	return string.split('').reverse().join('') === string;
}

isPalindrome('madam')



// String combinations: Write a JavaScript function that generates all combinations of a string

function stringCombinations (string) {
	var result = [];
	var j = 0;
	while (j<string.length) {
		var stringSlice = string.slice(j);
		for (var i = 1; i<stringSlice.length+1; i++) {
			result.push (stringSlice.slice(0, i));
		}
		j++;
	}
	return result.join();
}

stringCombinations ('dog')



// Sort letters: Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and numbers symbols are not included in the passed string.

function sortLetters (string) {
	return string.split('').sort().join('');
}

sortLetters ('webmaster')



// Uppercase First Letter: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function toUpper(word) {
	var array = word.split('')
	array[0] = array[0].toUpperCase()
	return array.join('')
}


function upperCaseFirstLetter (string) {
	var array = string.split(' ');
	for (i in array) {
		array[i] = toUpper(array[i])
	}
	return array.join(' ')
}

upperCaseFirstLetter('the quick brown fox')



//  Longest Word: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longestWord (string) {
	var words = string.split(' ');
	var result = words[0];
	for (i=1; i<words.length; i++) {
		if (words[i].length > result.length) {
			result = words[i];
		}
	}
	return result;
}

longestWord('Web Development Tutorial')



// How many vowels: Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

function howManyVowels (string) {
	var count = 0;
	for (i=0; i<string.length; i++) {
		if (/[aeiou]/gi.test(string[i]) === true) {
			count ++
		}
	}
	return count
}

howManyVowels ('The quick brown fox')



// Is prime: Write a JavaScript function that accepts a number as a parameter and check the number is prime or not Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime (number) {
	for (i=2; i<number; i++) {
		if (number % i === 0) {
			return number + " isn't prime.";
		}
	}
	return number + ' is prime.';
}

isPrime(7)



// What type: Write a JavaScript function which accepts an argument and returns the type Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function whatType (element) {
	return typeof element;
}

whatType ('3')



// Matrix: Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix (n) {
	var matrix = '';
	for (var i=0; i<n; i++) {
		for (var j=0; j<n; j++) {
			if (j !== n-1) {
				(i===j) ? matrix += 1 + '\t' : matrix += 0 + '\t';	
			} else {
				(i === j) ? matrix += 1 + '\n' : matrix += 0 + '\n';
			}
		}
		
	}
	return matrix;
}

identityMatrix (3)



// Second lowest and second greatest: Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondLowestGreatest (array) {
	array.sort(function(a,b) {return a-b});
	return 'The second lowest number is ' + array[1] + ' and the second greatest number is ' + array[array.length-2];
}

secondLowestGreatest([1,4,3,6,5,11])



// Perfect Numbers: Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumber (number) {
	var divisors = [];
	for (var i=1; i<number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		};
	}
	var sumdiv = divisors.reduce(function(a,b){return a+b});
	return number === sumdiv;
}

perfectNumber(28)



// Factors: Write a JavaScript function to compute the factors of a positive integer.

function factors (number) {
	var divisors = [];
	for (var i=-number; i<=number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		};
	}
	return divisors;
}

factors (42)



// Coinify: Write a JavaScript function to convert an amount to coins.

function amountToCoins (amount, coins) {
	var result = [];
	for (var i=0; i<coins.length; i++) {
		while (amount >= coins[i]) {
			result.push(coins[i]);
			amount-=coins[i];
		}
	}
	return result;
}

amountToCoins(46, [25, 10, 5, 2, 1])



// getExponent: Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function getExponent (base, exponent) {
	return Math.pow(base, exponent);
}

getExponent (2,3)



// Unique Characters: Write a JavaScript function to extract unique characters from a string.

function uniqueCharacters (string) {
	var result = '';
	var str = string.split('');
	for (var i=0; i<str.length; i++) {
		if (result.indexOf(str[i]) === -1) {
			result += str[i];
		}
	}
	return result;
}

uniqueCharacters ('thequickbrownfoxjumpsoverthelazydog')



// Occurences: Write a JavaScript function to get the number of occurrences of each letter in specified string.

function occurrences (string) {
	var counter = {};
	var array = string.split('');
	for (var i=0; i<array.length; i++) {
		(counter[array[i]]) ? counter[array[i]] += 1 : counter[array[i]] = 1;
	}
	return counter;
}

occurrences ('ornitorrinco')



// Binary Search: Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch (number, array) {
	var arr = array.slice();
	var index = Math.floor(arr.length/2);
	while (arr[index] !== number) {
		if (arr.length === 1) {
			return false;
		} else if (arr[index] > number) {
			arr = arr.slice(0, index);
			index = Math.floor(arr.length/2);
		} else {
			arr = arr.slice(index);
			index = Math.floor(arr.length/2);
		}
	}
	return true;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

binarySearch (67, primes)



// getLargerArrays: Write a JavaScript function that returns array elements larger than a number.

// V1: Devuelve array con los elementos en posición mayor al índice dado.

function getLargerArrays (index, array) {
	return array.slice(index);
}

// V2: Devuelve array con mayores al numero dado.

function getLargerArrays (number, array) {
	if (array.indexOf(number) !== -1) {
		if (array.indexOf(number) !== array.length-1) {
			return array.slice(array.indexOf(number)+1);
		} else {
			return "There isn't any number larger than " + number + " in the array."
		}
	} else {
		for (var i = 0; i<array.length; i++) {
			if (array[i]>number) {
				return array.slice(i);
			}
		}
	}
	return "There isn't any number larger than " + number + " in the array."
}



// getStringId: Write a JavaScript function that generates a string id (specified length) of random characters.

function getStringId (length) {
	var charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var stringId = '';
	for (var i=0; i<length; i++) {
		stringId += charlist[Math.floor(Math.random()*charlist.length)];
	}
	return stringId;
}

getStringId(5)



// Occurrencers Letter: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function occurrenceLetter (string, letter) {
	var count = 0;
	for (var i = 0; i<string.length; i++) {
		if (string[i].toLowerCase() === letter) {
			count++;
		}
	}
	return count;
}

occurrenceLetter ('w3resource.com', 'o')



// First not repeated: Write a JavaScript function to find the first not repeated character.

function occurrences (string) {
	var counter = {};
	var array = string.split('');
	for (var i=0; i<array.length; i++) {
		(counter[array[i]]) ? counter[array[i]] += 1 : counter[array[i]] = 1;
	}
	return counter;
}

function firstNotRepeated (string) {
	var occurrence = occurrences (string);
	for (var i=0; i<string.length; i++) {
		if (occurrence[string[i]] === 1) {
			return string[i];
		};
	}
	return 'All characters are repeated';
}

firstNotRepeated('abacddbec')



// Bubble Sort algorithm: Write a JavaScript function to apply Bubble Sort algorithm.
//Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

function bubbleSort (array) {
	return array.sort(function(a,b) {return b-a});
}



// Longest Country: Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function longestCountry (array) {
	var result = array[0];
	for (var i=1; i<array.length; i++) {
		if (array[i].length > result.length) {
			result = array[i];
		}
	}
	return result;
}

longestCountry (["Australia", "Germany", "United States of America"])



// Longest palindrome: Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada". In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

function stringCombinations (string) {
	var result = [];
	var j = 0;
	while (j<string.length) {
		var stringSlice = string.slice(j);
		for (var i = 1; i<stringSlice.length+1; i++) {
			result.push (stringSlice.slice(0, i));
		}
		j++;
	}
	return result;
}

function isPalindrome (string) {
	return string.split('').reverse().join('') === string;
}

function longestPalindrome (string) {
	var combinations = stringCombinations(string);
	var palindromes = [];
	for (i=0; i<combinations.length; i++) {
		if (isPalindrome(combinations[i])) {
			palindromes.push(combinations[i]);
		}
	}
	var longest = palindromes[0];
	for (i=1; i<palindromes.length; i++) {
		if (palindromes[i].length > longest.length) {
			longest = palindromes[i]
		}
	}
	var arrayLongests = [];
	for (i=1; i<palindromes.length; i++) {
		if (palindromes[i].length === longest.length) {
			arrayLongests.push(palindromes[i]);
		}
	}
	return arrayLongests
}

longestPalindrome ('bananas')



// doOperation: Write a JavaScript program that accepts three parameters:
// 1. function to be applied to the operands
// 2. First Operand
// 3. Second Operand

function doOperation (func, n1, n2) {
	return func(n1,n2);
}

doOperation( function(a,b) {return a-b;}, 10, 3)



// Function name: Write a JavaScript function to get the function name.

function getName (func) {
	return func
}

