var fs = require('fs');
var conf = fs.readFileSync('./server.conf');
var confArr = conf.toString().split('\r\n');
var globalConf = {};
for(var i = 0 ; i < confArr.length; i++){
    var tempArr = [];
    tempArr = confArr[i].split('=');
    globalConf[tempArr[0]] = tempArr[1];
    if(tempArr[0] === "static_file_type"){
       globalConf.static_file_type = tempArr[1].split('|');
    }
}
if(!globalConf.static_file_type){
    throw new Error("should has static_file_type")
}
module.exports = globalConf;