// var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');//请求体解析
const cors=require('cors')
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(cors())

//引入mysql,全局安装
var mysql = require('mysql')

//引入数据库配置文件
const config = require('./config/config.json')

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// view engine setup res.render访问静态页面需要
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.engine('jade', require('jade').__express); //定义模板引擎
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');





// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// 页面路由处理，这段处理代码表示，路由/ 也就是首页的时候执行index
app.use('/aaa', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//查询
app.get('/getsomething', function (req, res) {
  var sql = 'select * from test';
  //连接数据库
  var connection = mysql.createConnection(config)
  connection.connect()
  console.log('start')
  connection.query(sql, function (err, result) {
    console.log('result',result)
      if (err) {
          console.log('err:', err.message);
      }
      var data = { 'err': 0, 'msg': '成功', 'result': result };
      // console.log(data);
      // res.status(200);
      // res.json(data);
      res.send(data)
      connection.end();
      console.log('end')

  });
});

// //添加
app.post('/add', function (req, res) {
  var name = req.body.name
  console.log('name',name);
  //构建添加语句，Id属性为auto_increment
  var sql='INSERT into test (name,age) \ VALUES ("'+ name +'","'+ 12 +'")';
  console.log('sql',sql);
  //连接数据库
  var connection = mysql.createConnection(config)
  connection.connect()
  connection.query(sql, function (err, result) {
          if (err) {
              console.log('err:', err.message);
          }
          console.log('result',result)
          res.status(200);
          res.send({message:"添加成功"})
          connection.end();
  });
})

app.get('*', function (req, res){
  console.log('404 handler..')
})


// 运行127.0.0.1:9999
// const server = app.listen(9000, function () {
//   console.log('127.0.0.1:9000 启动成功');
// });

module.exports = app;
