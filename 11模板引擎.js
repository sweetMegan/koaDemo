/**
 * Created by zhqmac on 2018/7/22.
 */
const Koa = require("koa");
const app = new Koa();
//引入koa-router的时候要加上一个()
var router = require("koa-router")();
var views = require("koa-views");
var path = require("path");
//views 必须是异步才可以
router.get("/login",async ctx=>{
    //将json里面的值替换为文件里面的变量
    //go 里面使用的是template模板,他们功能类型
    var name = "zhq";
    await ctx.render("loginEjs.ejs",{
        name
    })
});
router.get("/regist",async ctx=>{
    await ctx.render("regist.html")
});
app.use(views(
    path.join(__dirname,"./views"),
    {
        extensions:"ejs",
        //默认去views下面获取ejs后缀的文件
        //如果是其他类型的文件需要制定文件类型
        map:{
            html:"ejs"
        }
    }
));
//路由注册到中间件
app.use(router.routes());
//开启服务,监听端口3000
app.listen(3000);
