var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Career Talk: JavaScript Unicorns'),
  h('h2', 'Jason Campbell'),

  h('img', {src: '/img/speakers/jason-campbell.jpg', style: {width: '50%'}})
)
