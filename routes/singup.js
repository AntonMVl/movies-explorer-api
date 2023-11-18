const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { emailRegex } = require('../utils/regex');
const { createUser } = require('../controllers/users');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().pattern(emailRegex),
    password: Joi.string().required().min(3),
  }),
}), createUser);

module.exports = router;
