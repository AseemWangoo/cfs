'use strict';

// [START gae_node_request_example]
const express = require('express');
const {PubSub} = require('@google-cloud/pubsub');
const app = express();

// The following environment variables are set by app.yaml when running on GAE,
// but will need to be manually set when running locally.
const PUBSUB_TOPIC = process.env.PUBSUB_TOPIC;

// Instantiate a pubsub client
// const pubsub = new PubSub();
// const publisher = pubsub.topic(PUBSUB_TOPIC).publisher();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, App Engine!....Pub Sub topic :' + PUBSUB_TOPIC)
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]
  