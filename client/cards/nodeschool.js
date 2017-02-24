var h = require('hyperscript')

module.exports = h('.iframe',
  h('iframe', {
    src: 'http://nodeschool.io/los-angeles',
    scrolling: 'no',
    style: {
      height: '86%'
    }
  }),
  h('h1', 'nodeschool.io/los-angeles')
)
