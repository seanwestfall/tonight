var h = require('hyperscript')

module.exports = h('.drinks',
  h('.map',
    h('img.frame', {style: {width: '80%'}}, {src: '/img/sponsors/sponsor-risingstack.png'})
  )
)
