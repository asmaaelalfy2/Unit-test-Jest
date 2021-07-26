const { User } = require('../models/user');
const Joi = require('joi');

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('invalid email or password');
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('invalid email or password');
  }

  //   const token = jwt.sign({ _id: user._id }, config.get('jwtPrivate'));
  const token = await user.generateToken();

  res.send([user, { token: token }]);
});

function validate(user) {
  const schema = {
    email: Joi.string().required().email(),

    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(user, schema);
}

module.exports = router;
