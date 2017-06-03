var h = require('hyperscript')

module.exports = h('.next',
  h('h1', {style: {'font-size': '400%'}}, 'Next js.la'),

  h('h1', 'Thursday, June 29th at Google'),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'David Guttman'),
    h('h2', 'The Rise of the Sound-Reactive, Beat-Detecting, Robotic Browser VJ')
  ),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Samy Kamkar'),
    h('h2', 'AKA My Hero')
  ),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Mark your calendar -- tickets will go fast.'),
    h('h2', 'Join the mailing list to get tickets:'),
    h('h2',
      h('span.highlight', 'js.la/subscribe')
    )
  )
)
//
//
// .next
//
//   div
//     h1(style='font-size: 400%') Next js.la
//
//     h1 Thursday, February 23rd at GoGuardian
//
//   div(style='margin-top: 5%')
//     h2 Tickets will go fast.
//     h2 Join the mailing list to be notified as soon as tickets are available:
//     h2 <span class='highlight'>js.la/subscribe</span>
