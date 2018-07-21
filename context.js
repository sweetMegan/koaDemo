/**
 * Created by zhqmac on 2018/7/21.
 */
const Koa = require("koa");
const app = new Koa();
//开启服务,监听端口3000
app.use((ctx,next)=>{
   ctx.response.body="hello world";
});
app.listen(3000);
