'use strict';

const fs = require('fs');

/**
 * @param {String} filePath
 * @param {Function} cb
 */
exports.readFile = (file, cb) => {
  if(!file || file.match(/bad/i)){
    cb('invalid file');
  } else {
    cb(undefined, new Buffer('File Content'));
  }
};

/**
 * @param {String} file -location to write to
 * @param {Object : Text : String} text - text info to write at the provided file path
 * @param {Function} cb - our callback function
 */
exports.writeFile = (file,buffer,cb) => {
  if(!file || file.match(/bad/i)){
    cb('invalid file');
  } else if(!Buffer.isBuffer(buffer)){
    cb('invalid buffer');
  } else {
    cb(undefined, undefined);
  }
};