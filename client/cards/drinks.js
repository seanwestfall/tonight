var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Golden Gopher'),
  h('h2', '417 W 8th St (between Hill and Olive)')
)
