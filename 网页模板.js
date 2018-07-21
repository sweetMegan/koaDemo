/**
 * Created by zhqmac on 2018/7/21.
 */
const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
app.use((ctx,next)=>{
    //必须指定type,否则调用fs模板后默认响应类型为为`application/octet-stream`类型
    ctx.response.type="text/html";
    //将文件作为响应体流失传输
    ctx.response.body=fs.createReadStream("./views/index.html");
});
app.listen("3000");