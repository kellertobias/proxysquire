'use strict';

var util = require('util');

function ProxysquireError(msg) {
  this.name = 'ProxysquireError';
  Error.captureStackTrace(this, ProxysquireError);
  this.message = msg || 'An error occurred inside proxyquire.';
}

util.inherits(ProxysquireError, Error);

module.exports = ProxysquireError;
