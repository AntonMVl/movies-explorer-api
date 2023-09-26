const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const ruText = /^[а-яА-Я\s\d]+$/;
const enText = /^[a-zA-Z\s\d]+$/;

module.exports = {
  httpRegex, emailRegex, ruText, enText,
};
