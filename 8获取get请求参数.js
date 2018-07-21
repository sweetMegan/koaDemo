/**
 * Created by zhqmac on 2018/7/22.
 */
const Koa = require("koa");
const app = new Koa();
const router= require("koa-router")();
app.use((ctx,next)=>{
   console.log(ctx.request.method);
    console.log(ctx.request.url);
    next()
});
//http://localhost:3000/login?name=zhq
router.get("/login",ctx=>{
   var name = ctx.query.name;
    var age = ctx.query.age;
    console.log(name+"年龄:"+age);
    ctx.body = `<h1> Hello,${name}</h1>`
});
//http://localhost:3000/regist/zhq/26
router.get("/regist/:name/:age",ctx=>{
    var name = ctx.params.name;
    var age = ctx.params.age;
    ctx.response.body = `<h1>regist, ${name} ${age}!</h1>`;


});
app.use(router.routes());
//开启服务,监听端口3000
app.listen(3000);