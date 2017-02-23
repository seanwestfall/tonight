var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'The Standard Station'),
  h('h2', '226 Standard St El Segundo, CA 90245')
)
