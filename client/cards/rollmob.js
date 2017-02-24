var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Want to level up?'),
  h('img.frame', {src: 'http://rollmob.com/wp-content/uploads/2015/10/logo.png'}),
  h('h1', 'is looking for a Director of Technology.'),

  h('div', {style: {height: '50px'}}, ' '),

  h('h1', 'While you\'ve been reading this slide,'),
  h('h1',
    'we\'ve served ',
    h('span.reqs', '0'),
    ' requests.'
  ),
  h('h1', '$170k, equity, and other good stuff.'),

  h('div', {style: {height: '50px'}}, ' '),

  h('h1', 'If you know a good fit, we\'ve got $5,000 with your name on it.'),
  h('h1',
    h('span.highlight', 'js.la.rollmob.exchange/event')
  )
)

var raf = require('raf')
var accounting = require('accounting')

var lastTick = Date.now()
var count = 0
var parent = module.exports
var el = parent.querySelector('.reqs')

function tick (t) {
  var now = Date.now()
  var elapsed = now - lastTick
  lastTick = now

  var amount = Math.round(Math.random() * 10 + 18)
  count += amount * elapsed
  if (parent.style.opacity === '0') {
    count = 0
  } else {
    el.innerHTML = accounting.formatNumber(count)
  }

  raf(tick)
}

raf(tick)
