
# Skylab Bootcamp 2017

Notas del bootcamp de Full-stack Web Development en Skylab Coders Academy



## TODO list

~~TODO Codeacademy cmd~~





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

![Git cheat sheet](http://files.zeroturnaround.com/pdf/zt_git_cheat_sheet.pdf)



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

[Javascript Challenge 1]: https://github.com/yasminagavalda/skylab-bootcamp-2017/blob/master/Challenge1.js



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







 


