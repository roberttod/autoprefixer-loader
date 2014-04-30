module.exports = function(source) {
  return require('autoprefixer').process(source).css;
};