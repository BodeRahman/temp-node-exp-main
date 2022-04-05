// local only accessible in this file because its not in module.export/global object
const secret = 'SUPER SECRET'
// sharing this with the rest of our application
const john = 'john'
const peter = 'peter'

//We use objects because we have multiple variables
module.exports = { john, peter }

//console.log(module) to check module methods 