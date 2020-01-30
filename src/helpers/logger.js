const pino = require('pino')();

function logger(type, loggerPayload) {
  pino[type]({ loggerPayload });
};

module.exports = logger;
