const app = require('./app');
const config = require('config');

const server = app.listen(config.get('port'), () => {
  console.log(`App is running on http://localhost:${config.get('port')}`);
});
