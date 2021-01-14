var express = require('express');
const conn = require('../config/database.config.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = "select * from b0322_news where status = 1 order by id desc";
  console.log(sql);
  conn.query(sql,function(error,result){
    console.log(result);
    res.render('index3', { title: '公司名称',news_list :result });
  });
});

module.exports = router;
