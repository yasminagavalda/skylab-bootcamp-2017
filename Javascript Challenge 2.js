// translate(): Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (string) {
	var vowels = ['a', 'e', 'i', 'o', 'u', ' '];
	var trans = '';
	for (i=0; i<string.length; i++) {
		if (vowels.indexOf(string[i]) === -1) {
			trans += string[i] + 'o' + string[i]
		} else {
			trans += string[i]
		}
	}
	return trans
}



// sum() & multiply(): Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum (array) {
	var s = function (a, b) {return a+b}
	return array.reduce(s)
}

function multiply (array) {
	var m = function (a, b) {return a*b}
	return array.reduce(m)
}



// reverse(): Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (string) {
	return string.split('').reverse().join('')
};



// translate(): Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

function translate (string) {
	var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
	var trans = []
	var arr = string.split(' ')
	arr.forEach(function(word) {trans.push(dictionary[word])})
	return trans.join(' ')
}



// findLongestWord(): Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord (array) {
	var result = ''
	array.map(function longest (word) {
		if (word.length > result.length) {
			result = word
		}
	})
	return result
}



// filterLongWords(): Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords (array, num) {
	function f (element){
		return element.length>num
	}
	var longWords = array.filter(f)
	return longWords
}



// charFreq(): Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (string) {
	var frequency = {}
	function addfrequency (character) {
		if (frequency[character]) {
			frequency[character] += 1
		} else {
			frequency[character] = 1
		}
	}
	string.split('').forEach(addfrequency)
	return frequency
}

