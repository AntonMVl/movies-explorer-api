require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const { corsOptions, limiter } = require('./utils/constants');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorMidleware');
const router = require('./routes/index');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(cors(corsOptions));

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Монго подключена');
});

app.use(express.json());

app.use(requestLogger);

app.use(limiter);

app.use(helmet());

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Запущен порт ${PORT}`);
});
