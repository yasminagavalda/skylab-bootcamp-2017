
# Skylab Bootcamp 2017

Notas del bootcamp de Full-stack Web Development en Skylab Coders Academy



## TODO list

~~TODO Codeacademy cmd~~  
~~TODO Javascript Challenge 1 Extra: encodeWord, encodeWordPlus~~  
TODO ~~Challenge3(46), Functions(47),~~ Strings(49), Strings**(50), Arrays(51), ~~Kata Jasmine~~  
~~TODO FizzBuzz Kata with Jasmine: Añadir expect para comprobar que los 'Fizz', 'Buzz', 'FizzBuzz' y numbers estan en posiciones correctas~~  
~~TODO html markup skylab page (77)~~
TODO HTML, CSS, Bootstrap & SASS challenges
TODO jQuery & AngularJS Challenges
TODO NodeJs Challenges (acabar)
~~TODO ECMA2015 KATAs~~


# FRONTEND

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


### Class 5 (07/07)

***Repaso Javascript***

* Spread Operator
...arr

***TDD***

* Unit testings
* TDD y BDD
* Jasmine

  
***[Javascript Challenge 2]***

[Javascript Challenge 2]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%202.js

***[Javascript Challenge 3]***

[Javascript Challenge 3]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%203.js

***[Javascript Challenge Functions]***

[Javascript Challenge Functions]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Javascript%20Challenge%20Functions.js  

***[Javascript Kata: FizzBuzz (Jasmine)]***
  
[Javascript Kata: FizzBuzz (Jasmine)]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/FizzBuzzSpec.js

***[Javascript Kata: FizzBuzz (Program)]***
  
[Javascript Kata: FizzBuzz (Program)]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/FizzBuzz.js 

***[Javascript Kata: Rock Paper Scissors (Jasmine)]***
  
[Javascript Kata: Rock Paper Scissors (Jasmine)]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/RockPaperScissorsSpec.js 
  
***[Javascript Kata: Rock Paper Scissors (Program)]***
  
[Javascript Kata: Rock Paper Scissors (Program)]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/RockPaperScissors.js




## Semana 2 

### Class 6 (10/07)

***HTML 5***

Here's an example of a simple HTML document:
~~~
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
   <HEAD>
      <TITLE>My first HTML document</TITLE>
   </HEAD>
   <BODY>
      <P>Hello world!
   </BODY>
</HTML>
~~~

***[Semantic Markup Challenge]***

[Semantic Markup Challenge]: https://github.com/yasminagavalda/html5-layouts/blob/master/index.html

***[Layout Challenges]***

[Layout Challenges]: https://github.com/yasminagavalda/html5-layout-skylabcoders/blob/master/index.html

### Class 7 (11/07)

***CSS***

[Complex Selectors]:http://learn.shayhowe.com/advanced-html-css/complex-selectors/    
    
* [Complex Selectors]
    * Type selectors
    ~~~
    div {
        background-color: skyblue;
        width: 100px;
        height: 100px;
    }
    ~~~

    * Class Selectors  
    El selector de clase prevalece sobre el de tipo.
    En caso de tener dos clases asignadas, prevalece la última, por efecto cascada.
    Si se le aplica !important se fuerza que ese estilo prevalezca sobre los demás, aunque este por encima de otro.
    ~~~
    .warning {
        background-color: yellow !important;
    }
    .error {
        background-color: red;
    }
    ~~~

    * ID Selectors  
    El selector de ID prevalece sobre el de clase.
    ~~~
    #myDiv {
        background-color: cyan;
    }
    ~~~

    * Descendant selector  
    Afecta a todos los h2 dentro de article
    ~~~
    article h2 {
        color: white;
    }
    ~~~

    * Direct Child Selector  
    Afecta a los h2 que sean directamente hijos de article (si dentro de article hay un section y dentro h2, este h2 no se ve afectado).
    ~~~
    article > h2 {
        color: white;
    }
    ~~~

    * General Sibling Selector  
    Afecta a los h2 y p que sean hermanos (por identación).
    CSS
    ~~~
    h2 ~ p {...}
    ~~~
    HTML
    ~~~
    <p>...</p>
    <section>
      <p>...</p>
      <h2>...</h2>
      <p>This paragraph will be selected</p>
      <div>
        <p>...</p>
      </div>
      <p>This paragraph will be selected</p>
    </section>
    ~~~

    * Adjacent Sibling Selector  
    Afecta a h2 y al p que esta justo después, no a los demás.
    CSS
    ~~~
    h2 + p {...}
    ~~~
    HTML
    ~~~
    <p>...</p>
    <section>
      <p>...</p>
      <h2>...</h2>
      <p>This paragraph will be selected</p>
      <div>
        <p>...</p>
      </div>
      <p>...</p>
    </section>
    ~~~

    * Attribute Selectors  
    Afecta a los anchor que contengan atributo 'target'.
    CSS
    ~~~
    a[target] {...}
    ~~~
    HTML
    ~~~
    <a href="#" target="_blank">...</a>
    ~~~

    * Attribute Equals Selector and Attribute Contains Selector
    CSS
    ~~~
    a[href="http://google.com/"] {...}
    ~~~
    HTML
    ~~~
    <a href="http://google.com/">...</a>
    ~~~
    CSS
    ~~~
    a[href*="login"] {...}
    ~~~
    HTML
    ~~~
    <a href="/login.php">...</a>
    ~~~

    * Attribute Begins and Ends With Selector
    CSS
    ~~~
    a[href^="https://"] {...}
    ~~~
    HTML
    ~~~
    <a href="https://chase.com/">...</a>
    ~~~
    CSS
    ~~~
    a[href$=".pdf"] {...}
    ~~~
    HTML
    ~~~
    <a href="/docs/menu.pdf">...</a>
    ~~~



### Class 8 (12/07)
* [MediaQuery]
* [FlexBox]

[MediaQuery]:http://learn.shayhowe.com/advanced-html-css/responsive-web-design/
[FlexBox]:https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Class 9 (13/07)

* Bootstrap
    - [Estructura y ejemplos]
    - [Grid]
    - [Bootsnip]

[Estructura y ejemplos]:http://getbootstrap.com/getting-started/#whats-included-precompiled
[Grid]:http://getbootstrap.com/css/#grid
[Bootsnip]:https://bootsnipp.com/resources

### Class 10 (14/07)

SASS

## Semana 3 

### Class 11 (17/07)

***BOM***

* window
    * window.navigator
    * window.history
    * window.frames
    * window.screen
    * window methods
        - window.open(), window.close()
        - window.moveTo(), window.moveBy(), window.resizeTo(), window.resizeBy()
        - window.alert(), window.prompt(), window.confirm()
        - window.setTimeout(), window.setInterval()

***DOM***

* The document node gives us access to the document (the starting point). All nodes have the following properties:
    * nodeType: There are 12 types of nodes represented by numbers(1=element, 2=attribute, 3=text, ...)
    * nodeName: For HTML tags is the name of the tag and for text nodes is #text
    * nodeValue: For text nodes will be the text
     
    ~~~
    >>> document.documentElement
    <html>
    >>> document.documentElement.nodeType
    1
    >>> document.documentElement.nodeName
    "HTML"
    >>> document.documentElement.tagName
    "HTML"
    ~~~

* Every node can have children-nodes:
    * hasChildNodes() : This methos will return true if the node has children-nodes
    * childNodes: Return an array of all the children-nodes of an element.
Because of being an array we can figure out the number of children-nodes with childNodes.length
    * parentNode: Return us the father-node of a children-node

* We can access the content of a tag:
    * textContent: This property give us the plain text inside of a tag In IE this property doesn't exists (we have to use innerText)
    * innerHTML: This property gives us the content (in HTML) inside of a tag

* We can directly access to some elements without the need of going over all the tre:
    * getElementsByTagName(): Return an array with all the elements with the tag passed as a parameter
    * getElementsByName(): Return an array with all the elements with the name passed as a parameter
    * getElementById(): Return an element with the ID passed as a parameter

* Creating and modifying the nodes
    * style
    * align
    * name
    * id
    
    ~~~
    >>> my.style.border = "1px solid red";
    "1px solid red"
    >>> my.align = "right";
    "right"
    >>> my.name
    >>> my.name = 'myname';
    "myname"
    >>> my.id
    "closer"
    >>> my.id = 'further'
    "further"
    ~~~

    * createElement
    * createTextNode
    * appendChild
    * cloneNode()
    * insertBefore()
    * removeChild(), replaceChild()

* DOM objects only for HTML
    * document.body: document.getElementsByTagName(‘body’)[0]
    * document.images: document.getElementsByTagName(‘img’)
    * document.applets: document.getElementsByTagName(‘applet’)
    * document.links: Return an array of all the links with aatribute href
    * document.anchors: Return an array with all the links with attribute name
    * document.forms: document.getElementsByTagName(‘form’)
    * document.write()
    * document.cookies
    * document.title
    * document.referrer
    * document.domain

* Advanced selection of elements
    * options: From a select we can access the array of its options
    ~~~
    >>> document.getElementsByTagName('select')[0].options;
    [option.windows, option.movil, option.aplicaciones-web, option.mac,
    option.linux, option.palm, option.pocketpc, option.blog]
    ~~~
    * querySelector, querySelectorAll
    ~~~
    >>> oMyElem = document.querySelector("#myid");
    >>> aMyHiddenElems = document.body.querySelectorAll(".hidden");
    ~~~

***jQuery***

* Selecting Elements:
    - By ID: $("#myId");  
    - By Class Name: $(".myClass");
    - By Attribute: $("input[name='first_name']");
    - By Compound CSS Selector: $("#contents ul.people li");
    - With a Comma-separated List of Selectors: $("div.myClass, ul.people");
    - Pseudo-Selectors:$("a.external:first");  $("tr:odd");

* [Manipulating Elements]
[Manipulating Elements]:http://learn.jquery.com/using-jquery-core/manipulating-elements/

* [Traversing]
[Traversing]:http://learn.jquery.com/using-jquery-core/traversing/

* [Utility Methods]
[Utility Methods]:http://learn.jquery.com/using-jquery-core/utility-methods/

* [Iterating with $.each(), .each(), $.map() and .map()]
[Iterating with $.each(), .each(), $.map() and .map()]:http://learn.jquery.com/using-jquery-core/iterating/

* Events

### Class 11 (18/07)

***[Calculadora de Porcentajes jQuery]***

[Calculadora de Porcentajes jQuery]:https://github.com/yasminagavalda/percent-calculator-jQuery/tree/master

***[JSON]***

[JSON]:https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/13-JSON

***[AJAX]***

[AJAX]:https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/14-AJAX

***[Same Origin Policy]***

[Same Origin Policy]:https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/15-same-origin-policy

***API's***

### Class 12 (19/07)

***[Introducción a Angular JS]***

[Introducción a Angular JS]:https://gist.github.com/juanmaguitar/c538d6cb108d27a37c73

### Class 13 (20/07)

***[Angular JS]***

* $scope
* Controllers
* Templates
* Routing
* API calls ($http)
* Factory & service

[Angular JS]:https://angularjs.org/

### Class 14 (21/07)

***[Challenge: Angular Spotify API]***

***[Challenge: Angular GitHub API]***

[Challenge: Angular Spotify API]:https://github.com/yasminagavalda/spotiapp-angular-ajax
[Challenge: Angular GitHub API]:https://github.com/yasminagavalda/github-user-repos-angular-ajax



## Semana 4

***Proyecto en grupos: [Wevelopers]***

* [GitHub]

[Wevelopers]:https://yasminagavalda.github.io/wevelopers/#!/
[GitHub]:https://github.com/yasminagavalda/wevelopers



# BACKEND

## Semana 5

### Class 15 (31/07)

####Node.js

***[Module Patterns]***

[Module Patterns]:https://darrenderidder.github.io/talks/ModulePatterns/#/

* require('hello.js')
* export:
~~~
// bar.js
module.exports = function () {
  console.log('bar!');
}
 
// app.js
var bar = require('./bar.js');
bar();
~~~
* exports:
~~~
// fiz.js
exports.fiz = function () {
  console.log('fiz!');
}

// app.js
var fiz = require('./fiz.js').fiz;
fiz();
~~~

***Modules Node***

* cool-ascii-faces
~~~
var cool = require('cool-ascii-faces')
console.log(cool())
~~~
CMD: 
$ node app.js
(\/)(°,,,°)(\/)

* Install modules:
    - npm install: Instala en el directorio local
    - npm install -g / npm install --global: Instala en global

* npm init -y
~~~
//package.json
{
  "name": "demo-node",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
  "dependencies": {
    "cool-ascii-faces": "^1.3.4"
  }
}
~~~

***Modulos nativos***

* http
~~~
var http = require('http');
~~~

~~~
var server = http.createServer();
 
server.on("request", function (req, res) {
    res.end("this is the response");
});

server.listen(3000);
~~~

* url
~~~
var myUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
var oUrl = url.parse(myUrl);
~~~
    - href → http://host.com:8080/p/a/t/h?query=string#hash
    - protocol → http:
    - host → host.com:8080
    - hostname → host.com
    - hostname → 8080
    - pathname → /p/a/t/h
    - search → ?query=string
    - path → /p/a/t/h?query=string
    - hash → #hash

* path
~~~
var path = require('path');

path.basename('/foo/bar/baz/asdf/quux.html') // 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html') // 'quux'

process.env.PATH // '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
process.env.PATH.split(path.delimiter) // ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

path.dirname('/foo/bar/baz/asdf/quux') // '/foo/bar/baz/asdf'

path.extname('index.html') // returns '.html'

path.isAbsolute('/foo/bar') // true
path.isAbsolute('qux/')     // false

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') // returns '/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..') // returns '/foo/bar/baz/asdf'

'foo/bar/baz'.split(path.sep) // returns ['foo', 'bar', 'baz']
~~~

* fs
~~~
//app.js
var fs = require('fs')
fs.writeFileSync('data.txt', 'this is a test')
~~~
CMD:
$ node app.js
$ cat data.txt
this is a test

    - fs.stat() 
    - fs.statSync() 
    - fs.lstat() 
    - fs.lstatSync() 
    - fs.fstat() 
    - fs.fstatSync() devuelve una instancia (stats) de fs.Stats

~~~
stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink() (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()
~~~

***Modulos node (core)***

* [process]: El objeto process es global y es una instancia de EventEmitter.

    - process.cwd directorio actual del proceso (directorio desde donde se llama el archivo, directorio donde se ejecuta node)
    - process.argv: array que contiene los argumentos que se le pasan a la llamada del archivo con node, siendo process.argv[0] el propio comando node
    - process.env: object

[process]:http://www.hacksparrow.com/understanding-directory-references-in-node-js.html

* Con __dirname podemos obtener el directorio del archivo que está siendo ejecutado


### Class 16 (01/08)

***[Event emiters, streams and buffers]***

[Event emiters, streams and buffers]:http://book.mixu.net/node/ch9.html


### Class 17 (02/08)

***[Streams]***

***[Readable, Writable & Transform Streams]***

[Streams]:https://github.com/juanmaguitar/apuntes-nodejs/blob/master/streams/streams.md

[Readable, Writable & Transform Streams]:https://gist.github.com/juanmaguitar/75a007ea2343f79068996bfbe7dcf47a

### Class 18 (03/08)

####ES2015

***Arrow Functions***

* Shorter syntax using =>
* Always anonymous
* Lexically bind this
* Really useful for event handlers and callbacks
* Really neat when using functional programming

***Block Scope***

* let
* const

***Template Strings***

* Enclosed by back-ticks ``
* Multi-line support
* Can contain placeholders ${ expression }

***Enhanced Object Literals***

* Shorthand property names
* Shorthand methods names
* Dynamic property names
* getter and setter

***Default Parameters***
~~~
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
~~~

***Destructuring Arrays and Objects***
~~~
var [first, second, third, , fifth = 5] = [1, 2];
first // 1
second // 2
third // undefined
fifth // 5
~~~

~~~
var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};
­
var {name, surname, dateOfBirth: {year}, children} = customer;
name // 'John'
surname // 'Doe'
year // 1988
children // undefined
~~~

***Rest and Spread operators***
~~~
function multiply(multiplier, ...numbers) {
  return numbers.map(n => multiplier * n);
}
­
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
~~~

~~~
function f(x, y, z) {
  return x + y + z;
}
­
var arr = [1, 2, 3];
f(...arr) === 6; // true
­
[0, ...arr, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]
~~~

***Classes***

* Class and [extends] keywords
* [Constructor definition]
* [Static] method definitions

[extends]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

[Constructor definition]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

[Static]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static


### Class 19 (04/08)

***Promises***

* [Callback Hell]
* Función constructora *new Promise*
~~~
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
~~~
* Promise.all
* Promise.race


[Callback Hell]:http://callbackhell.com/


## Semana 6

### Class 20 (07/08)

***Express***

* app.get, app.post, app.delete, app.put
~~~
app.get('/', (req, res) => {
    res.send('GET -> Hello World!')
})

app.post('/', (req, res) => {
    res.send('POST -> Hello World!')
})
~~~
~~~
app.all('/', (req, res) => {
    res.send('ALL -> Hello World!')
})
~~~

* [Express routing]

    - Routing and static files: app.use( express.static('public') ) -> Todos los archivos estaticos los buscará en la carpeta 'public'
    ~~~
    const express = require('express')
    const path = require('path')
    const app = express()

    app.use( '/static', express.static( path.join(__dirname, 'public') )
    ~~~
    This route path will match requests to the root route, /.
    ~~~
    app.get('/', function (req, res) {
      res.send('root')
    })
    ~~~
    This route path will match requests to /about.
    ~~~
    app.get('/about', function (req, res) {
      res.send('about')
    })
    ~~~
    This route path will match acd and abcd.
    ~~~
    app.get('/ab?cd', function (req, res) {
      res.send('ab?cd')
    })
    ~~~

    - Route parameters
    ~~~
    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }

    app.get('/users/:userId/books/:bookId', function (req, res) {
      const { userId: user, bookId: book } = req.params
      res.send( `userId->${user} bookId->${book})
    })
    ~~~

    - Route handlers
    ~~~
    app.get('/example/a', function (req, res) {
      res.send('Hello from A!')
    })

    app.get('/example/b', function (req, res, next) {
      console.log('the response will be sent by the next function ...')
      next()
    }, function (req, res) {
      res.send('Hello from B!')
    })
    ~~~

[Express routing]: https://www.diigo.com/annotated/495f15003add267cdd7ea347dfa1ad64

* [Middlewares]

[MiddleWares]:https://www.diigo.com/annotated/7f913fbf87c8453d076b1d0d7d826622

* Pug. Permite trabajar con páginas dinámicas.
~~~
app.set('view engine', 'pug') //Busca en carpeta 'views' archivos .pug

app.get('/', (req, res) => {
    res.render('index') //Renderiza a html archivo index.pug
})
~~~

* Request
    - req.query: para capturar parametros de busqueda en una ruta: /books?sort=asc&limit=20

* Response 
    - res.json


### Class 21 (08/08) & Class 22 (09/08)

***[TO DO APP with Express& Pug]***

[TO DO APP with Express& Pug]:https://github.com/yasminagavalda/todoapp-express-pug


### Class 23 (10/08)

***[Login & register with Express & Pug]***

[Login & register with Express & Pug]:https://github.com/yasminagavalda/login-register-express-pug

### Class 24 (11/08)

***[TO DO App with Login & register made with Express & Pug]***

[TO DO App with Login & register made with Express & Pug]:https://github.com/yasminagavalda/todoapp-login-express-pug