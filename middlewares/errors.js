const { codeError, messageError } = require('../errors/errors');

const handleErrors = (error, req, res, next) => {
  const { statusCode = codeError.SERVER_ERROR, message } = error;

  if (error.code === 11000) {
    res.status(codeError.CONFLICT).send({ message: messageError.ConflictError });
  } else if (error.code === codeError.SERVER_ERROR) {
    res.status(codeError.SERVER_ERROR).send({ message: messageError.defaultError });
  } else if (error.name === 'ValidationError') {
    res.status(codeError.BAD_REQUEST).send({ message: messageError.badDataError });
  } else {
    res.status(statusCode).send({ message });
  }
  next();
};

module.exports = handleErrors;
