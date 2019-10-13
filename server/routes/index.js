const Router = require('koa-router');
const Widget = require('../api/widget');

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

router.post('/addWidget', async (ctx) => {
  try {    
    const result = await Widget.addWidget({ ...ctx.request.body });
    ctx.body = result;
  } catch (error) {
    console.log('Error: ', error);
    ctx.status = 500;
    ctx.body = 'Internel error!';
  }
});

router.get('/widget/:id', async (ctx) => {
  try {
    const result = await Widget.getWidget({ id: ctx.params.id });
    ctx.body = result;
  } catch (error) {
    console.log('Error: ', error);
    ctx.status = 500;
    ctx.body = 'Internel error!';
  }
});

module.exports = router;
