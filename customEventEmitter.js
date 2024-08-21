
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    customMethod() {
        this.emit('customEvent', 'This is a custom event!');
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (message) => {
    console.log(message);
});

myEmitter.customMethod();