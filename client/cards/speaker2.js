var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'bomBora'),
  h('h2', 'How To Hold Down Your Vegemite in a Non-Stop Sea of Waves'),
  h('h2', 'Keith Moore'),

  h('img', {src: '/img/speakers/keith-moore.png', style: {width: '50%'}})
)
