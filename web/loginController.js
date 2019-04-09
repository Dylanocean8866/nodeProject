var url = require('url');
var studentService = require('../service/studentService');
var path = new Map();
function getData(request,response){
    var allData = studentService.getStudentInfo((data)=>{
        response.writeHead(200);
        response.write(JSON.stringify(data));
        response.end();
    });
}
function login(request,response){
   // var queryData = url.parse(request.url,true).query;
   request.on("data",(data)=>{
       var paramData = JSON.parse(data)
       studentService.login(paramData.sNum,paramData.sPwd,(data)=>{
           response.writeHead(200);
           response.write(JSON.stringify(data));
           response.end();
       })
   })
}
path.set('/getData',getData)
path.set('/login',login)
module.exports.path = path;