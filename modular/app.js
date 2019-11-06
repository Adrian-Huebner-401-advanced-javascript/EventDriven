'use strict';

const fs = require('./fs');
const events = require('./events');

//logging activity to console
require('./logger');

//handling data cache
require('./cache');

function read(file){
  fs.readFile(file, (err, data) => {
    if(err) {throw err};
    events.emit('uppercase', data)
  });
};

function toUpper(data){
  let text = data.toString().toUpperCase();
  eventEmitter.emit('write file', text)
};

function write(text){
  fs.writeFile(file, Buffer.from(text), (err, data) => {
    if(err){throw err};
  });
};

events.on('uppercase', (data) => toUpper(data));
events.on('write file', () => console.log('File has been written'));

events.emit('save', 'In my logger');

let file = process.argv.slice(2).shift();
read(file);