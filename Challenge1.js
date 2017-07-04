// Integer Numbers Range: Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function integerNumbersRange (x1, x2) {
	if (x2<x1) {
		return -1
	} else {
		for (var i=x1; i<=x2; i++) {
			console.log(i)
		}
	}
}



// Multiplications table: Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationsTable() {
	var result = ""
	for (var i=1; i<=10; i++) {
		for (var j=1; j<=10; j++) {
			result += i*j + "\t"
		}
		result += "\n"
	}
	return result
}



// Multiplications table on demand: Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function onDemand (n) {
	var result = ""
	for (var i=1; i<=10; i++) {
		result += n*i + "\n"
	}
	return result
}



// Calculation: Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function multiplesOf23() {
	var elements = [0]
	var sum = 23
	while (sum<500){
		elements.push(sum) 
		sum +=23
	}
	var total = 0
	for (i=0; i<elements.length; i++) {
		total += elements[i]
	} 
	console.log(elements + "\n" + total)
}



// max() function: Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max (n1, n2) {
	if (n1>n2) {
		return n1
	} else {
		return n2
	}
}



// maxOfThree() function: Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree (n1, n2, n3) {
	var result = n1
	if (n2>result) {
		result = n2
	} 
	if (n3>result) {
		result = n3
	}
	return result
}



// isVowel() function: Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (s) {
	var vowels = ['a', 'e', 'i', 'o', 'u']
	if (vowels.indexOf(s) === -1) {
		return false
	} else {
		return true
	}
}



// Hexadecimal: Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRGB (hexcolor) {
	var toRGB = {'00':0, 'FF':255}
	var n1 = hexcolor[1] + hexcolor[2]
	var n2 = hexcolor[3] + hexcolor[4]
	var n3 = hexcolor[5] + hexcolor[6]
	var result = "rgb("
	result += toRGB[n1] + "," + toRGB[n2] + "," + toRGB[n3] + ")"
	return result
}



// Hexadecimal enhanced Improves the previous function so besides the conversion also identifies some basic colors:
/*
Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF*/

function hexadecimal (hexcolor) {
	var result = getRGB (hexcolor)
	var code = {'#000000':'Black', '#FFFFFF':'White', '#FF0000':'Red', '#00FF00':'Green', '#0000FF':'Blue'}
	result += ' ' + code[hexcolor]
	return result
}



