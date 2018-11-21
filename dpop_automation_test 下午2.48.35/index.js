
const mongoist = require("mongoist");
const uuidv = require("uuid/v1");    
const { fork } = require("child_process");
const fs = require("fs");
const rimraf = require("rimraf")
const mongoose = require('mongoose'); 

const tools = require("./config/tools");
const log = require("./config/log").logger;

/**
 * 连接数据库
 */
const connectionString = "mongodb://localhost:27917/runoob";
const dbs = mongoist(connectionString, {useNewUrlParser: true});
//************************************************//
async function findDocuments() {

  try {
    //查询数据库test 获取数据
    const docs = await dbs.test.findOne({});
    log.error(docs._id);
    //新建一个临时目录 例如：20181105103834
    // let tempDir  = "./temp/"+tools.currentdate;

    // let tempDir  = tools.currentdate;
    // fs.mkdir(tempDir,{ recursive: true }, (err, folder) => {
    //   if (err) throw err;
    //   console.log("folder:"+folder);
    // });

    //复制一下载好的文件到临时文件夹，并以uuid重命名
    // let fileUUID = uuidv();
    // fs.rename(docs.script,tempDir+"/"+fileUUID+".js");

    //执行脚本 使用nodejs 子进程
    //返回一个执行脚本 临时文件夹路径。
    // let dataArray = new Array();
    // for (const i in docs.parameterData) {
    //   dataArray.push(docs.parameterData[i]);
    // }
    // let modulePath = tempDir+"/"+fileUUID+".js";
    let modulePath = +"/test.js";
    const child = fork(modulePath, (err) => {
        if (err) {
          throw err;
        }
      });
    //生成report，并更新数据库,选择json格式数据
      
    // 删除临时文件夹 ，并根据_id更新状态
    // setTimeout(function() {
    //   console.log("hi,+1000");
    //   rimraf(tempDir,(err) =>{
    //     if(err) throw err;
    //     console.log("rm success!");      
    //   });
    // },1000);
    
    let _id = mongoose.mongo.ObjectId(docs._id);
    await dbs.test.update({"_id":_id},{$set:{"status":"2"}});

  } catch (err) {
    log.error("失败了，失败了，失败了！\n为啥嘞："+err);
  }
}
    
  findDocuments().then((function(){
    console.log('Done querying mongodb')
  }) );
