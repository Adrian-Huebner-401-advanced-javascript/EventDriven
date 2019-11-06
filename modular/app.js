'use strict';

const fs = require('fs');
const eventEmitter = require('./events');
const util = require('util');

//logging activity to console
require('./logger');

//handling data cache
require('./cache');

const readFile = async file => {
  const fsRead = util.promisify(fs.readFile);
  try{
    const data = await fsRead(file);
    eventEmitter.emit('file-read');
    return data;
  } catch(error){
    eventEmitter.emit('file-read-error', error);
  }
};

const upperCase = data => {
  let text = data.toString().toUpperCase();
  eventEmitter.emit('file-uppercase', text);
  return text;
};

const saveFile = async (file, text) => {
  const fsWrite = util.promisify(fs.writeFile);
  await fsWrite(file, Buffer.from(text));
  eventEmitter.emit('file-saved');
};

const alterFile = async file => {
  const data = await readFile(file);
  const text = upperCase(data);
  saveFile(file, text);
};


let file = process.argv.slice(2).shift();
alterFile(file);