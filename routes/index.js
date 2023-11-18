const router = require('express').Router();
const singupRouter = require('./singup');
const singinRouter = require('./signin');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

router.use(singupRouter);
router.use(singinRouter);

router.use(auth);

router.use(userRouter);
router.use(movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Not found path!'));
});

module.exports = router;
