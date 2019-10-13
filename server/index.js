const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const router = require('./routes');

require('./db');

const app = new Koa();

app.use(koaBody());
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(9000, () => {
  console.log('Server runnig on http://localhost:9000');
});
