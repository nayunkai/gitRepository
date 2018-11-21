// // const mongoist = require('mongoist');
// const log = require("./log");
// // var requireFromString = require('require-from-string');

// // var connectionString = "mongodb://localhost:27917/runoob";
// // const db = mongoist(connectionString, {useNewUrlParser: true});
// // // const a = db.test.findOne();
// // // log.logger.info(a.startTime);
// // module.exports = db;

// log.logger.info("hello");

// const uuidv = require('uuid/v1');
// const a = uuidv();
// log.logger.info(a);
// console.log(typeof v);//undefined
// console.log(typeof 123);//number
// console.log(typeof '');//string
// console.log(typeof true);//boolean
// console.log(typeof null);//object

// if (!undefined) {
//     console.log('undefined is false');
//   }
//   // undefined is false
  
//   if (!null) {
//     console.log('null is false');
//   }
//   // null is false
  
// console.log(5+null);
//   // true
//   var o1 = {a:0,b:1};
//   var o2 = o1;
//   o1.a = 1;

//   o2.b = 2;
//  console.log(Object.keys(o1));

////作用域
// var a = 1;
// var x = function () {
//   console.log("1>"+a);
// };

// function f() {
//     var a = 2;
//   console.log("2>"+a);
//   x();
// }

// f() // 1

// function foo() {
//     var x = 1;
//     function bar() {
//       console.log(x);
//     }
//     return bar;
//   }
  
//   var x = 2;
//   var f = foo();
//   f() // 1

// var list = 1;
// var obj = Object(list);
// console.log([10111, 1101, 111].sort(function (a, b) {
//     return a - b;
//   }));


// console.log(1);
// var a = function (){
//   console.log(2);
// };
// setTimeout(a,1000);
// console.log(3);


    //执行脚本 使用nodejs 子进程
    //返回一个执行脚本 临时文件夹路径。
    // const modulePath = docs.script;
    // const child = fork(modulePath, null, (error) => {
    //     if (error) {
    //       throw error;
    //     }
    //   });
    //生成report，并更新数据库,选择json格式数据
    //删除临时文件 ，更新状态

    // let str = "hello boy, I love you!";

    // var a = str.split(",");
    // console.log(a)
    

// const data = require('../outPut/popdate.json');
// console.log(data.parameterData[0].userName);
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();