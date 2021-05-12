//EventEmitter class is used below
const EventEmitter = require('events');
//new Object is created from EventEmitter class
const emitter = new EventEmitter();
//Primarily we have to create the listener on the emit(register a listener)
emitter.on('messageLogged', function(){
    console.log('Hit it..!');
})
//seconddly the event emitter emits the signal of its happening(record and event)
emitter.emit('messageLogged');