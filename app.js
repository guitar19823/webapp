const Koa = require('koa');
const Router = require('koa-router');
const config = require('config');

const app = new Koa();
const router = new Router();

require('./handlers/favicon').init(app);
require('./handlers/static').init(app);
require('./handlers/logger').init(app);
require('./handlers/templates').init(app);
require('./handlers/errors').init(app);
require('./handlers/session').init(app);
require('./handlers/bodyParser').init(app);
require('./handlers/passport').init(app);
require('./handlers/flash').init(app);
//require('./handlers/csrf').init(app);

router.get('/*', require('./routes/index').get);
router.post('/', require('./routes/index').post);
router.post('/login', require('./routes/login').post);
router.post('/logout', require('./routes/logout').post);
router.post('/getdata', require('./routes/getdata').post);
router.post('/register', require('./routes/register').post);
router.post('/recovery', require('./routes/recovery').post);

app.use(router.routes());

module.exports = app;