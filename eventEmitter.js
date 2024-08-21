const EventEmitter = require("events")

const myEventEmitter = new EventEmitter()

myEventEmitter.on("victor", (greet, name) => {
    console.log(greet, name)
})

myEventEmitter.emit("victor", "Hello", "JavaScript")