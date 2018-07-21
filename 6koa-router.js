/**
 * Created by zhqmac on 2018/7/21.
 */
const Koa = require("koa");
const app = new Koa();
const r = require("koa-router");
const router = r();
//设置路由
router.get("/",(ctx,next)=>{
    ctx.body = "首页";

});
router.get("/login",(ctx,next)=>{
    ctx.body = "login";

});
router.get("/test",(ctx,next)=>{
    ctx.body = "test";
});
//绑定路由
app.use(router.routes());
//开启服务,监听端口3000
app.listen(3000);