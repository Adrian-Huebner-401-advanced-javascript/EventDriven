'use strict';

const eventEmitter = require('./events');

eventEmitter.on('save', payload => log('save', payload));

function log(event, payload){
  let time = new Date();
  console.log(event, time, payload);
}

eventEmitter.on('file-read', () => {
  console.log('The file has been read');
});
eventEmitter.on('file-uppercase', (text) => {
  console.log('The file has been uppercased', text);
});
eventEmitter.on('file-wrote', () => {
  console.log('The file has been saved!');
});
eventEmitter.on('file-read-error', (error) => {
  console.log('There was an error in reading this file', error);
});