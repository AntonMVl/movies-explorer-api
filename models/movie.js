const mongoose = require('mongoose');
const { httpRegex } = require('../utils/regex');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return httpRegex.test(url);
      },
      message: 'Не верный URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return httpRegex.test(url);
      },
      message: 'Не верный URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return httpRegex.test(url);
      },
      message: 'Не верный URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    // validate: {
    //   validator(value) {
    //     return ruText.test(value);
    //   },
    //   message: 'Название фильма должно быть на русском языке',
    // },
  },
  nameEN: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    // validate: {
    //   validator(value) {
    //     return enText.test(value);
    //   },
    //   message: 'Название фильма должно быть на английском языке',
    // },
  },
});

module.exports = mongoose.model('movie', movieSchema);
