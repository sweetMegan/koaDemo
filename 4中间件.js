/**
 * Created by zhqmac on 2018/7/21.
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    console.log("first");
    await next();
    console.log("first over")
});
app.use(async(ctx,next)=>{
   console.log("second");
    await next();
    console.log("second over")

});
app.use(async(ctx,next)=>{
    console.log("third");
    await next();
console.log("third over");
});



// logger
// app.use(async (ctx, next) => {
//     console.log("first");
//     await next();
//     // const rt = ctx.response.get('X-Response-Time');
//     // console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });
// // x-response-time
// app.use(async (ctx, next) => {
//     console.log("second");
//     // const start = Date.now();
//     await next();
//     // const ms = Date.now() - start;
//     // ctx.set('X-Response-Time', `${ms}ms`);
// });
// app.use(async ctx => {
//     console.log("third");
//     ctx.body = 'Hello World';
// });
app.listen("3000");