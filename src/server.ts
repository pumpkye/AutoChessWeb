import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaJson from 'koa-json';
import * as KoaBody from 'koa-body';
import * as kcors from 'kcors';
import { layoutController } from './controller/layout_controller';
import { npcController } from './controller/npc_controller';
import { randomLayoutController } from './controller/random_layout_controller';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/index', async (ctx) => {
    ctx.body = "index";
})

router.get('/testParam/:id', async (ctx) => {
    console.log(ctx.params);
})

router.get('/saveLayout/:jsonStr', async (ctx) => {
    console.log(ctx.params);
})

//获得所有布局列表
router.get('/layout', async (ctx) => {
    await layoutController.getLayoutList(ctx);
})


//获得某个布局的详情
router.get('/layout/:id', async (ctx) => {
    let id = ctx.params.id;
    if (id == "all") {
        await layoutController.getAllLayout(ctx);
    } else {
        await layoutController.getLayoutById(ctx);
    }
})

//存储布局
router.post('/layout', async (ctx) => {
    await layoutController.addLayout(ctx);
})

router.delete('/layout/:id', async (ctx) => {
    await layoutController.deleteLayout(ctx);
})

router.put('/layout/:id', async (ctx) => {
    await layoutController.updateLayout(ctx);
})

router.put('/npc/:id', async (ctx) => {
    console.log("updateNpc")
    await npcController.updateNpc(ctx);
})

router.put('/npc', async (ctx) => {
    console.log("updateNpcBatch");
    await npcController.updateNpcBatch(ctx);
})

//随机布局
router.put('/random_layout', async (ctx) => {
    await randomLayoutController.addLayoutBatch(ctx);
})

router.get('/random_layout/:jsonParam', async (ctx) => {
    await randomLayoutController.getLayoutList(ctx);
})

app.use(kcors());
app.use(KoaJson());
app.use(KoaBody());
app.use(router.routes());

app.listen(3000);
console.log('Server running on port 3000');