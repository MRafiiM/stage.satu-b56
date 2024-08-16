// const number = [1, 2, 3, 4, 5];

// function idxFE(idx, val) {
//     console.log(`array[${val}] = ${idx}`);
// }

// console.log("ForEach");
// number.forEach(idxFE);

// console.log("Map;")
// const updNumber = number.map((idx, val) => {
//     console.log(`array[${val}] = ${idx * 2}`);
// });

// console.log("Filter");

// const filNum = number.filter((idx, val) => {
//     return (idx % 2 == 0);
// }) 

// console.log(filNum);

// const totlNum = updNumber.reduce((prev, cur) => {
//     return prev + cur;
// }, 4);

// console.log(totlNum);

// console.log();

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = '';
// window.message
// global.setTimeout
// console.log(global.message);

// const numbers = [1, 2, 3, 4, 5]; 

// function idxXE(num, val) {
//     console.log(`Array[${val}]=${num}`);
// }

// numbers.forEach(idxXE);

// const log = require('./logger');

// console.log(logger); 

// log('message');

// const path = require('node:path'); 

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total memory : ", totalMemory);

// console.log(`Total memory : ${totalMemory}`);
// console.log(`Free Memory : ${freeMemory}`);

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(error, files) {
//     if (error) console.log('Error', error);
//     else console.log('Result', files);
// });

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on("messageLogged", (arg) => {
    console.log('Listener Called', arg);
});

logger.log('message');