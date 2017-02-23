var h = require('hyperscript')

module.exports = h('.iframe',
  h('iframe', {
    src: 'http://lunch.js.la',
    scrolling: 'no',
    style: {
      height: '86%'
    }
  }),
  h('h1', 'lunch.js.la')
)
