//CommonJS, every file is module (by default)
//Modulos - Encapsulated Code (only share minimum)

//El profesor comenta que no hace falta pasar la extensión de "js"
const names = require('./4-names')
const sayHi = require ('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade') //Nota 52:30- when you import a module you actually invoke it

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)