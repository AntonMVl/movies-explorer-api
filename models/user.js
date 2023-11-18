const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { emailRegex } = require('../utils/regex');
const UnautorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Минимальная длина поля 2 символа'],
    maxlength: [30, 'Максимальная длина поля 30 символов'],
  },
  email: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(email) {
        return emailRegex.test(email);
      },
      message: 'Введите верный email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnautorizedError('Неправильные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnautorizedError('Неправильные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
