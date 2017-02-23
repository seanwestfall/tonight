var h = require('hyperscript')

module.exports = h('.wanted',
  h('h1', 'Want to give a talk?'),
  h('h1',
    'Sign up at ',
    h('span.highlight', 'contribute.js.la/speak')
  )
)
