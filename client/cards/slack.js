var h = require('hyperscript')

module.exports = h('.slack',
  h('img', {src: '/img/slack.png'}),

  h('h1', 'Join us on #Slack!'),
  h('h1',
    'Get invited at ',
    h('span.highlight', 'js.la/slack'),
    '!'
  )
)
