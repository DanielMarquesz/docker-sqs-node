const logger = require('../services/logger');

function handleMessage(message) {
  // log the received message
  logger.info(message.Body);

  // return messageId to be aknolodge
  // return message.MessageId
}

module.exports = handleMessage;
