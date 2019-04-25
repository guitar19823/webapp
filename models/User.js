const mongoose = require('../libs/mongoose');
const crypto = require('crypto');
//const _ = require('lodash');
const config = require('config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'У пользователя должно быть имя',
    unique: 'Такой пользователь уже существует'
  },
  email: {
    type: String,
    required: 'E-mail пользователя не должен быть пустым.',
    validate: [
      {
        validator(value) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        message: 'Некорректный email.'
      }
    ],
    unique: 'Такой email уже существует'
  },
  phone: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  mobile_os: {
    type: String
  },
  verifyEmailToken: {
    type: String,
    index: true,
  },
  verifiedEmail: Boolean,
  passwordHash: {
    type: String,
  },
  salt: {
    type: String,
  },
  providers: [{
    id: String,
    profile: {}
  }]
}, {
  timestamps: true,
});

function generatePassword(salt, password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password, salt,
      config.get('crypto.hash.iterations'), config.get('crypto.hash.length'),
      'sha512',
      (err, key) => {
        if (err) return reject(err);
        resolve(key.toString('hex'));
      }
    );
  });
}

userSchema.methods.setPassword = async function setPassword(password) {
  if (password !== undefined) {
    if (password.length < 6) {
      throw new Error('Пароль должен быть минимум 6 символа.');
    }
  }

  this.salt = crypto.randomBytes(config.get('crypto.hash.length')).toString('hex');
  this.passwordHash = await generatePassword(this.salt, password);
};

userSchema.methods.checkPassword = async function(password) {
  if (!password) return false;

  const hash = await generatePassword(this.salt, password);
  return hash === this.passwordHash;
};

userSchema.methods.getData = async function(password) {
  if (!password) return false;

  const hash = await generatePassword(this.salt, password);

  if (hash === this.passwordHash) {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      country: this.country,
      city: this.city,
      mobile_os: this.mobile_os
    };
  }
};

module.exports = mongoose.model('User', userSchema);
