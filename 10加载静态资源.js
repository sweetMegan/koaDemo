/**
 * Created by zhqmac on 2018/7/22.
 */
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const koaStatic= require("koa-static");
const router= require("koa-router")();

//静态资源目录对于相对入口文件的路径
const staticPath = './static';

router.get("/",ctx=>{
   ctx.body = "<html><a href='/images/avatar.JPG'>点我</a></html>"
});
app.use(koaStatic(
    path.join(__dirname,staticPath)
));
app.use(router.routes());
//开启服务,监听端口3000
app.listen(3000);
