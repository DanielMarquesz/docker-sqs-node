const { Consumer } = require('sqs-consumer');
const { SQSClient } = require('@aws-sdk/client-sqs')
const handleMessage = require('./services/handler');
const logger = require('./services/logger');

// initiate AWS SQS SDK
const sqs = new SQSClient({
  region: process.env.SQS_REGION,
  apiVersion: process.env.SQS_API_VERSION,
  endpoint: process.env.SQS_QUEUE_URL,
  credentials: {
    accessKeyId: process.env.SQS_ACCESS_KEY,
    secretAccessKey: process.env.SQS_SECRET_KEY
  }
})


//initiate sqs-consumer
const app = Consumer.create({
  sqs: sqs,
  queueUrl: process.env.SQS_QUEUE_URL,
  visibilityTimeout: process.env.SQS_VISIBILITY_TIMEOUT,
  terminateVisibilityTimeout: true,
  attributeNames: ['All'],
  handleMessage
});

// attach event handlers to the sqs-consumer to log messages and track if there is any error
app.on('error', err => {
  logger.error('Error in Team data aggregator Consumer : ' + err.message);
  app.stop();
});

app.on('message_received', message => {
  logger.info('message received from queue : ' + message.Body);
});

app.on('message_processed', message => {
  logger.info('message processed : ' + message.Body);
});

app.on('empty', () => {
  logger.info('Queue is Empty');
});

app.on('stopped', () => {
  logger.info('Consumer has stopped');
  process.exit(1);
});
logger.info('Starting the consumer');
app.start();
