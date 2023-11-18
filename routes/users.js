const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getCurrentUser, updateUserData } = require('../controllers/users');
const { emailRegex } = require('../utils/regex');

router.get('/users/me', getCurrentUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().pattern(emailRegex).required(),
  }),
}), updateUserData);

module.exports = router;
