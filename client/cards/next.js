var h = require('hyperscript')

module.exports = h('.next',
  h('h1', {style: {'font-size': '400%'}}, 'Next js.la'),

  h('h1', 'Thursday, March 30th at Nation Builder'),

  h('h2', 'Gregor Martynus on Building Offline First Apps'),
  h('h2', 'Lauren Spiegel on Having Your Very Own S3'),

  h('div', {style: {'margin-top': '5%'}},
    h('h2', 'Tickets will go fast.'),
    h('h2', 'Join the mailing list to know as soon as tickets are available'),
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
