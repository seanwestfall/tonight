var h = require('hyperscript')

module.exports = h('.wanted',
  h('h1', 'Does your company want to sponsor?'),
  h('h1',
    'Sign up at ',
    h('span.highlight', 'contribute.js.la/sponsor')
  )
)
