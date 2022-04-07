// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const testEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
testEmitter.on("response",(name, id)=>{
    console.log(`data recieved user ${name} with id:${id}`)
})

testEmitter.on('response', () => {
    console.log('some other logic here')
})

testEmitter.emit("response", "john", 34)