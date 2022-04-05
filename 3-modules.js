//CommonnJS, every file module (by default)
//Modules - Encapsulated code (only share minimum)

//Import modules as variables in order to access them
const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
//This module will run even though we didnt assign it to a variable
//because it there is a function there and we invoked it 
require("./7-mind-grenade")

// sayHi("Susan")
// sayHi(names.john)
// sayHi("names.peter") 