'use strict';

module.exports = function CustomError(message, extra) {
  Error.captureStackTrace(this, this.constructor);

  console.log(JSON.stringify(this));
  console.log(JSON.stringify(this.constructor));

  this.name = this.constructor.name;
  this.message = message;
  this.extra = extra;
};

require('util').inherits(module.exports, Error);