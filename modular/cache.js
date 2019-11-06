'use strict';

const events = require('./events');

events.on('save', handleSave);

function handleSave(payload){
  console.log(`Recors ${payload.id} was saved`);
  events.emit('update', {});
}