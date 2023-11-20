const rateLimit = require('express-rate-limit');

const corsOptions = {
  origin: ['http://localhost:3000', 'https://amoro-diplom-front.nomoredomainsrocks.ru'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  credentials: true,
  optionsSuccessStatus: 200,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

module.exports = { corsOptions, limiter };
