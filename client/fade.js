var zanimo = require('zanimo')

module.exports = function (el, opacity, duration, cb) {
  opacity = opacity || 0
  duration = duration || 1000

  zanimo(el, 'opacity', opacity, duration, 'ease-in').then(cb)
}
