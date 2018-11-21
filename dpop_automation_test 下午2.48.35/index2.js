
const mongoist = require("mongoist");
const { execFile } = require('child_process');
const fs = require("fs");

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
    let _id = docs._id;

    let scriptPath = docs.script;//脚本路径
    fs.writeFileSync("./outPut/popdate.json", JSON.stringify(docs));

    let jsonStdout = {};
    const child = execFile('mocha',
      ['--reporter=json','/Users/admin/dpop_automation_test/jscript/test.js'], 
      (error,stdout) => {
        console.log(stdout);
        jsonStdout = stdout;
        // console.log(jsonStdout);
        // console.log(JSON.stringify(jsonStdout));
      }
    );
    console.log("********"+child.stdout);
    // console.log(JSON.stringify(child));
    // console.log("(*&+…………+&*)"+jsonStdout);
    await dbs.test.update({"_id":_id},{$set:{"outPath":jsonStdout}});

  } catch (err) {
    log.error("失败了，失败了，失败了！\n为啥嘞："+err);
  }
}
    
  findDocuments().then((function(){
    console.log('Done querying mongodb')
  }) );
