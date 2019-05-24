const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

// for old Node before Promise were part of JS
mongoose.Promisse = global.Promise;
mongoose.set('useFindAndModify', false);
const dbURL = `mongodb+srv://Monica:${ process.env.DB_PW }@vocab-amf5b.mongodb.net/test?retryWrites=true`;
mongoose.connect(
  dbURL,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 3000;    // Future proof for deployment
const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);
//start listening
server.listen(PORT);

server.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found`});
});

console.log(`Server started on http://localhost:${ PORT }/`)