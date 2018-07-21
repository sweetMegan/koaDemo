/**
 * Created by zhqmac on 2018/7/22.
 */
const Koa = require("koa");
const app = new Koa();
const koaBody = require("koa-body");

const router= require("koa-router")();
app.use(async (ctx,next)=>{
    console.log(ctx.request.method);
    console.log(ctx.request.url);
    await next()
});
router.post("/login", (ctx,next) => {
    var body = ctx.request.body;
    console.log(body);
    console.log(body.name);
    ctx.body = {name:body.name};

});
app.use(koaBody());
app.use(router.routes());
//开启服务,监听端口3000
app.listen(3000);
