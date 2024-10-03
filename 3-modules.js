// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mine-grenade')  // will automatically run the function inside the module
                          
// When we import a module , we automatically invoke it 

// sayHi('uttkarsh')
// sayHi(names.john)
// sayHi(names.peter)
 