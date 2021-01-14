var express = require('express');
const conn = require('../config/database.config.js');
var router = express.Router();

/* GET users listing. */
router.get('/news/:id', function(req, res, next) {
    console.log(req.params.id);
    let sql = "select * from b0322_news where id = " + req.params.id;
    conn.query(sql,function(error,result){
        res.render('news')
    })
//   res.render('news');
});

module.exports = router;
