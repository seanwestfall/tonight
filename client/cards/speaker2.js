var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Attacking Hardware with Node.js'),
  h('h2', 'Samy Kamkar'),

  h('img', {src: '/img/speakers/samy-kamkar.jpg', style: {width: '50%'}})
)
