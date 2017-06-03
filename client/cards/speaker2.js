var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Wheels, Gears, and Labyrinths'),
  h('h2', 'Jim Bumgardner'),

  h('img', {src: '/img/speakers/jbum.jpg', style: {width: '50%'}})
)
