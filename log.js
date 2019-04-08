var fs = require('fs');
var globalConfig = require('./config');
var fileName =globalConfig.log_path +globalConfig.log_name;
// fs.writeFile(globalConfig.log_path +globalConfig.log_name,'adfsaf',()=>{})


function log(data){
    // fs.writeFile(globalConfig.log_path +globalConfig.log_name,data + "\n",{flag:'a'},()=>{})
    fs.appendFile(globalConfig.log_path +globalConfig.log_name,data + "\n",()=>{})
}

module.exports = log;