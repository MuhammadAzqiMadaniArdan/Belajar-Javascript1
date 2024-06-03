
// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} dan ${lastName}`);



const coffee = require("./coffee");

console.log(coffee);

// Gunakan Object destructuring untuk mengimpor lebih dari satu nilai pada modul .

const {firstName,lastName} = require('./user');

console.log(firstName,lastName);

// mengimpor core module http
const http = require('http');

const moment = require('moment');

const date = moment().format('MMM Do YY');
console.log(date);

// melakukan handler dan listener
const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter()

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat! `);

}

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat !`);
}

const onCoffeeOrderedListener = ({name,price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order',{name: 'Tubruk', price: 15000});

const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});