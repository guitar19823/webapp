const User = require('../models/User');
//const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

exports.post = async function(ctx) {

  const name = ctx.request.body.name;
  const email = ctx.request.body.email;
  const phone = ctx.request.body.phone;
  const country = ctx.request.body.country;
  const city = ctx.request.body.city;
  const mobile_os = ctx.request.body.mobile_os;
  const password = ctx.request.body.password;
  const verifyEmailToken = uuid4();
  const verifiedEmail = true; //if use email verify false

  try {
    const user = new User({
      name,
      email,
      phone,
      country,
      city,
      mobile_os,
      verifyEmailToken,
      verifiedEmail
    });

    await user.setPassword(password);

    await user.save();
  } catch(e) {
    if (e.name === 'ValidationError') {
      let errorMessages = '';

      for(let key in e.errors) {
        errorMessages += `${e.errors[key].message} `;
      }

      return ctx.body = errorMessages;
      throw e;
    }
  }

  /*
  await sendMail({
    template: 'verify-registration-email',
    to: email,
    subject: 'Подтверждение email',
    link: `${config.get('server.host')}:${config.get('server.port')}/confirm/${verifyEmailToken}`
  });
  */

  ctx.body = 'Вы успешно зарегистрированы';
};
