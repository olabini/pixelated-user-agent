var path = require('path')

module.exports = {
  resolve: {
    alias: {
      'mail_list': path.join(__dirname, '/app/js/mail_list'),
      'page': path.join(__dirname, '/app/js/page'),
      'feedback': path.join(__dirname, '/app/js/feedback'),
      'DOMPurify': path.join(__dirname, '/app/bower_components/DOMPurify/dist/purify.min'),
      'hbs': path.join(__dirname, '/app/js/generated/hbs'),
      'helpers': path.join(__dirname, '/app/js/helpers'),
      'lib': path.join(__dirname, '/app/js/lib'),
      'views': path.join(__dirname, '/app/js/views'),
      'tags': path.join(__dirname, '/app/js/tags'),
      'mail_list_actions': path.join(__dirname, '/app/js/mail_list_actions'),
      'user_alerts': path.join(__dirname, '/app/js/user_alerts'),
      'mail_view': path.join(__dirname, '/app/js/mail_view'),
      'dispatchers': path.join(__dirname, '/app/js/dispatchers'),
      'services': path.join(__dirname, '/app/js/services'),
      'mixins': path.join(__dirname, '/app/js/mixins'),
      'search': path.join(__dirname, '/app/js/search'),
      'foundation': path.join(__dirname, '/app/js/foundation'),
      'features': path.join(__dirname, '/app/js/features/features'),
      'user_settings': path.join(__dirname, '/app/js/user_settings')
    },
    moduleDirectories: ['app/js']
  }
}