var h = require('hyperscript')

module.exports = h('.drinks',
  h('.map', {style: {background: 'white', padding: '40px'}},
    h('img.frame', {src: '/img/sponsors/host-razorfish.png'})
  )
)
