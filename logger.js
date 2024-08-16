// console.log(__filename);
// console.log(__dirname);

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    logger(message) {
        console.log(message);
    
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}
module.exports = Logger;

