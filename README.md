
# Skylab Bootcamp 2017

Notas del bootcamp de Full-stack Web Development en Skylab Coders Academy



## TODO list

~~TODO Codeacademy cmd~~
TODO Javascript Challenge 1 Extra: encodeWord, encodeWordPlus




## Semana 1 

### Class 1 (03/07)

* Introducción al Bootcamp
* Herramientas de trabajo (Sublime Text 3, Comand-line, Git y GitHub)
* Markdown

***[Comand-line]***

[Comand-line]: https://www.codecademy.com/learn/learn-the-command-line

* **pwd** outputs the name of the current working directory.
* **ls** lists all files and directories in the working directory.
* **cd** switches you into the directory you specify.
* **mkdir** creates a new directory in the working directory.
* **touch** creates a new file inside the working directory.
* **ls -a** lists all contents of a directory, including hidden files and directories
* **ls -l** lists all contents in long format
* **ls -t** orders files and directories by the time they were last modified
* Multiple options can be used together, like **ls -alt**
* **cp** copies files
* **mv** moves and renames files
* **rm** removes files
* **rm -r** removes directories

***Git commands***

* git init
* git add
* git commit -a
* git commit -m "Initial commit"
* git status
* git log
* git checkout
* git checkout head
* git diff
* Remote repositories
    * Connecting a Remote Repository: git remote add + repository name + url
    * git clone + url
    * Uploading data to a Remote Repository: git push
    * Integrating remote changes: git pull => git fetch + git merge
* git reset => remove from the staging area
* git checkout master => get back to the “current” state (latest commit) of the project

Git cheat sheet: http://files.zeroturnaround.com/pdf/zt_git_cheat_sheet.pdf



### Class 2 (04/07)

***Javascript Basics***

* Variables
* Data Types
* Operators
* Conditionals (if, else if, else; switch:  case, default)
* Loops (for, for in, while, do while, forEach)

***Javascript Functions***

* Funciones pre-definidas
    * parseInt()
    * parseFloat()
    * isNaN()
    * isFinite()
* Scope
    * Global variables
    * Local variables
* Callback functions
* Closures

***[Javascript Challenge 1]***

[Javascript Challenge 1]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%201.js



### Class 3 (05/07)

***Javascript Array Methods***

* array.push()
* array.pop()
* array.indexOf()
* array.from() 
* array.concat()
* array.join(separator)
* array.split()
* array.shift()
* array.unshift()
* array.reverse()
* array.slice(begin, end)
* array.splice(position, remove, elements)
* array.sort()
    * Numbers:
    ~~~ 
    numbers.sort(function(a, b) {
        return a - b;
    });
    ~~~
* array.forEach(function)
* array.map(function)
* array.filter(function)
* array.reduce(function[, initial value])
* array.some(function)
* funcion.every(function)

***[Javascript Challenge 2]***

[Javascript Challenge 2]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%202.js

***Javascript Objects***

Object.keys(obj)

* Constructor Functions
~~~
function Human(name, surname, weight, height, gender) {
    this.name = name;
    this.surname = surname;
    this.age = 0;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.eat = function(food) { console.log('eating ' + food); };
    this.sleep = function() { console.log('Zzzzz'); };
}

>>> var Pedro = new Human ('Pedro', 'Jimenez', 3.2, 0.4, 'male')
>>> console.log(Pedro)
Human {name: "Pedro", surname: "Jimenez", age: 0, height: 0.4, weight: 3.2, eat: function (food), sleep: function ()}

>>> Pedro.gender
"male"

>>> Pedro instanceof Object
true
>>> Pedro instanceof Human
true
~~~

* Prototypes
~~~
function Programmer(workingCompany) {
    this.workingCompany = workingCompany;
    this.program = function(language) { console.log('tktkt tktkt tktkt ' + language); };
}
Programmer.prototype = new Human();

>>> var Juan = new Programmer ('Skylab')
>>> Juan
Programmer {workingCompany: "Skylab", program: function}

>>> Juan.workingCompany
"Skylab"
>>> Juan.gender
undefined
>>> Juan instanceof Human
true
>>> Juan instanceof Programmer
true
~~~
Programmer object inherits the properties of the Human object even though it has undefined value

### Class 4 (06/07)

***[Regular Expressions]***

[Regular Expressions]: https://regex101.com/

* Examples:
    * /b[aeiou]t/: Matches "bat", "bet", "bit", "bot" and "but". Also matches "cricket bat", "bitter lemon"
    * /^b[aeiou]t/: Will match "battering ram" but not "cricket bat"
    * /b[aeiou]+t/: Matches "bat" and "bit" etc, but also "boot" and "boat"
    * /[0-9a-f]*/: Will match hex
    * /[0-9a-zA-Z]/: Upper and lower case are distinct; this matches alphanumeric strings
    * /./: The dot '.' matches any character
    * /\ ./: If you actually want to match a dot, escape it

* Flags:
    * g: global
    * i: ignoreCase
    * m: multiline

* Methods:
    * test(): Returns true if it finds something and false if it doesn't
    * exec(): Return an array of string that match the pattern
    * match(): Return an array of occurrences
    * search(): Return the position of the first occurrence
    * replace(): Allow us to replace the found string by another string
    * split(): Accepts a regular expression to split a string in elements of an array

***Hoisting***

* Example :
~~~
var v = 1;
function fun() {
    console.log(v);
    v = 5;
    console.log(v);
    var v = 6;
}

>>> fun();
undefined
5
~~~

***[Javascript Challenge 1 Extra]***

[Javascript Challenge 1 Extra]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%201%20Extra.js

***Prototyping inheritance & Polyfill***

~~~
function fun() {
    this.hello = 'hello!';
}

>>> fun();
>>> window.hello;
"hello!"

>>> var obj = {};
>>> fun.call(obj);


function fun(name) {
    this.hello = 'hello ' + name + '!';
}

>>> var obj = {};
>>> fun.call(obj);
>>> obj.hello
"hello undefined!"

>>> fun.call(obj, 'Yasmina')
"hello Yasmina!"

>>> fun ('peter')
>>> window.hello
"hello peter!"
~~~
~~~
function Animal(species, name) {
    this.setSpecies(species);
    this.setName(name);
}
Animal.prototype.setSpecies = function(species) {
    this._species = species;
};
Animal.prototype.getSpecies = function() {
    return this._species;
};
Animal.prototype.setName = function(name) {
    this._name = name;
};
Animal.prototype.getName = function() {
    return this._name;
};
Animal.prototype.heal = function() {
    console.log('healing...');
};
Animal.prototype.eat = function () {
    console.log('eating...');
};
Animal.prototype.pee = function () {
    console.log('pssssing....');
};
Animal.prototype.poo = function() {
    console.log('poofffffff....');
};
Animal.prototype.sleep = function() {
    console.log('Zzzz');
};


function Tiger(name, speed) {
    Animal.call(this, 'tiger', name);
    this.setSpeed(speed);
}

Tiger.prototype = new Animal();
Tiger.prototype.setSpeed = function(speed) {
    this._speed = speed;
};
Tiger.prototype.getSpeed = function() {
    return this._speed;
};
~~~
~~~
Array.prototype.random = function random() {
    return this[Math.floor(Math.random() * this.length)];
}

function randomArg() {
     return Array.prototype.random.call(arguments);
}
~~~

***Closures***

~~~
function SafeBox(thing) {
    var secret = thing;
    return function (pass) {
        if (pass === 'dame un besito') {
            return secret
        }
        return 'no'
    }
}

>>> var caja = new SafeBox('me gusta jugar al futbol en pel...')
>>> caja ('pass')
"no"
>>> caja('dame un besito')
"me gusta jugar al futbol en pel..."
~~~











 


