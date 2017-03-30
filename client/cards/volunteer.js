var h = require('hyperscript')

module.exports = h('.wanted',
  h('h1', 'Want to join team js.la?'),
  h('h1',
    'Talk to an organizer or send us an email: ',
    h('span.highlight', 'hello@js.la')
  )
)
