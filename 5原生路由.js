/**
 * Created by zhqmac on 2018/7/21.
 */
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx)=>{
    if (ctx.request.path=="/"){
        ctx.response.body = "首页";
    }
    switch (ctx.request.path){
        case "/":{
            ctx.response.body = "首页";
            break;
        }
        case "/login":{
            ctx.body = "login";
            break;
        }
        case "/test":{
            ctx.body = "test";
            break;
        }

    }
});
//开启服务,监听端口3000
app.listen(3000);