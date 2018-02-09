const EXPRESS = require('express');
const WECHAT = require('wechat');

let config = {
    token:'weixin',
    appid:'wx3b9f858eb0afba48',
    encodingAESKey:'EAAlBTzylrUYN3diUHT2niASy6ia6KkOVnSCkk5jouz'
}

let app = new EXPRESS();

app.use(EXPRESS.query());

app.get("/",WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);

}));

app.get("/",(req,res)=>{
    res.end("It Work..")
})

app.listen(3000);