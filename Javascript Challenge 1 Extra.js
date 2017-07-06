// Calculator: Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

function calculator (operation, n1, n2) {
	var result;
	switch (operation) {
		case 'suma':
			result = n1+n2;
			break;
		case 'resta':
			result = n1-n2;
			break;
		case 'multiplicacion':
			result = n1*n2;
			break;
		case 'division':
			result = n1/n2;
			break;
	} 
	return result
}

calculator ('suma',1,2)



// Calculator Plus: Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

function calculator (operation) {
	var numbers = Array.prototype.slice.call(arguments)
	numbers.shift()
	var result;
	switch (operation) {
		case 'suma':
			result = numbers.reduce(function(a,b){return a+b});
			break;
		case 'resta':
			result = numbers.reduce(function(a,b){return a-b});
			break;
		case 'multiplicacion':
			result = numbers.reduce(function(a,b){return a*b});
			break;
		case 'division':
			result = numbers.reduce(function(a,b){return a/b});
			break;
	} 
	return result;
}

calculator('suma', 10,2,5)



// getFullName: Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated

function getFullName (name, surname) {
	return 'Your full name is ' + name + ' ' + surname;
}

getFullName( "Yasmina", "Gavalda")



// isNumber: Define a function called ​isNumber​ that receives a value and return true if the value received is a number

function isNumber (value) {
	return /^[0-9]+$/.test(value);
}

isNumber (3)



// isString: Define a function called ​isString​ that receives a value and return true if the value received is a string

function isString (value) {
	return /^[a-z]+$/i.test(value);
}

isString ('aBJk')



// isBoolean: Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

function isBoolean (value) {
	return value === true || value === false
}

isBoolean (false)



/* encodeWord: Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:
7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (string) {
	return string.replace(/T/g,7).replace(/A/g,4).replace(/S/g,5).replace(/O/g,0)
}

encodeWord ('TASOT')



// encodeWordPlus: Improve the previous function to add a random number between 0 and 1000 every 7 characters

function encodeWordPlus (string) {
	code = string.replace(/T/g,7).replace(/A/g,4).replace(/S/g,5).replace(/O/g,0).split('')
	for (i=7; i<=code.length; i+=7) {
		code.splice(i, 0, Math.round(Math.random()*1000))
	}
	return code.join('')
}

encodeWordPlus ('TASOTASOTASO')






