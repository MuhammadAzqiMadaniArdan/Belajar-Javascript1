// TODO 1
const {EventEmitter} = require('events');


const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// Todo2
const myEventEmitter = new EventEmitter();


// Todo3
const onBirthdayEventListener = ({name}) => {
    birthdayEventListener(name);
}

// Todo4
myEventEmitter.on('birthday-event', onBirthdayEventListener);

myEventEmitter.emit('birthday-event',{name : 'Azqi'});