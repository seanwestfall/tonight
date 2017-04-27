var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Barkowski'),
  h('h2', '2819 Pico Blvd (Pico & 28th)')
)
