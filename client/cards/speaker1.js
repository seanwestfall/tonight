var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Visualizing Sound on the Web'),
  h('h2', 'Jacob Lowe'),

  h('img', {src: '/img/speakers/jacob-lowe.png', style: {width: '50%'}})
)
