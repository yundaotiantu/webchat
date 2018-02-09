const EXPRESS = require('express');
const WECHAT = require('wechat');
const MYSQL = require('mysql');

let app = new EXPRESS();

app.use(EXPRESS.query());

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'cYle8mum9YiDwC1C3y1QcJDW24Vc4Z9OWNVSm3nuEyV',
    checkSignature: true
};

let pool = MYSQL.createPool({
    user: 'root'
});

app.use('/', WECHAT(config, (req, res) => {
    let message = req.weixin;
    let content = message.Content;
    console.log(content);

    let sql = `SELECT * FROM db.chat WHERE question LIKE ?`;
    pool.query(sql, ['%' + content + '%'], (err, results) => {
        if (results.length === 1) {
            res.reply(results[0].answer);
        } else {
            res.reply('你在说什么？我听不懂。。。');
        }
    });
}));

app.listen(4000);// E_ADDR_IN_USE