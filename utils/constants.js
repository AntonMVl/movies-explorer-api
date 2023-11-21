const rateLimit = require('express-rate-limit');

// const corsOptions = {
//   origin: [
//     'http://localhost:3000',
//     'https://amoro-diplom-front.nomoredomainsrocks.ru',
//   ],
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
//   credentials: true,
// };

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

module.exports = { limiter };
