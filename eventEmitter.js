const fs = require('fs');
const EventEmitter = require("events")

const myEventEmitter = new EventEmitter()

myEventEmitter.on("victor", (greet, name) => {
    console.log(greet, name)
})

myEventEmitter.emit("victor", "Hello", "JavaScript")


// Another example with file reading
const myEmitter = new EventEmitter();

// Set up a listener for 'fileRead' event
myEmitter.on('fileRead', (data) => {
    console.log('File content:', data);
});

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        myEmitter.emit('error', err);
        return;
    }
    // Emit 'fileRead' event with file data
    myEmitter.emit('fileRead', data);
});