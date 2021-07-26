const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const user = require('./routes/user');
const auth = require('./routes/auth');
const error = require('./middleware/error');

const express = require('express');
const app = express();

mongoose
  .connect('mongodb://localhost:27017/node')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error(err));

app.use(express.json());
require('./startup/routes')(app);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
