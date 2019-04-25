const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  mongodb: {
    debug: true,
    uri: 'mongodb://localhost/passport_register'
  },
  crypto: {
    hash: {
      length: 128,
      iterations: 10
    }
  },
  mailer: {
    gmail: {
      user: 'course.test.mailer',
      password: 'course-test-password2'
    },
    senders:  {
      // transactional emails, register/forgot pass etc
      default:  {
        fromEmail: 'gandon111@gmail.com',
        fromName:  'Alexey',
        signature: "<em>С уважением,<br>Alexey</em>"
      },
    }
  }
};