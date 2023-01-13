const configNext = require('./next')
module.exports = configNext({
  storage: 'https:/barakahit.net',
  locales: {
    list: ['en'],
    default: 'en',
  }
})