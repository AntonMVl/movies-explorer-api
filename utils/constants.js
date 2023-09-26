const rateLimit = require('express-rate-limit');

const corsOptions = {
  origin: 'https://test-front.students.nomoredomainsicu.ru',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  credentials: true,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

module.exports = { corsOptions, limiter };
