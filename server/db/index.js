const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.Promise = global.Promise;

const connectionURL = `mongodb://${config.db.user}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionURL, { useNewUrlParser: true }).catch((error) => console.error(error));

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connection open on: ${connectionURL}`);
});

db.on('error', (error) => console.error(error));

db.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed');
    process.exit(0);
  });
});
