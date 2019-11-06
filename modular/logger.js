'use strict';

const events = require('./events');

events.on('save', payload => log('save', payload));

function log(event, payload){
  let time = new Date();
  console.log(event, time, payload);
}

