var h = require('hyperscript')

module.exports = h('.coc',
  h('h1', 'Please follow the js.la Code of Conduct: '),
  h('h1',
    h('span.highlight', 'js.la/code-of-conduct')
  ),

  h('div', {style: {height: '50px'}}),

  h('h1', 'If you need a js.la organizer:'),

  h('h1',
    h('span.highlight', 'js.la/team')
  ),

  h('div', {style: {height: '50px'}})
)
