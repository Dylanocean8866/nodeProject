var http  = require('http');
var url = require('url');
var gc = require('./config');
var fs = require('fs');
var loader = require('./loader');
var log = require('./log');

http.createServer((request,response)=>{
    var urlbj =  url.parse(request.url,true);
    log(urlbj)
    var isStatic = isStaticRequest(urlbj.pathname);
    if(isStatic){   
        try{
            var data = fs.readFileSync(gc.page_path +  urlbj.pathname);
            response.writeHead(200);
            response.write(data);
            response.end();
        }
        catch(e){
            response.writeHead(404);
            response.write("<html><body>404</body></html>");
            response.end();
        }
    }else{
        if(loader.get(urlbj.pathname) != null){
            try{
                loader.get(urlbj.pathname)(request,response)
            }
            catch(e){
                response.writeHead(500);
                response.write("<html><body>500 badServer</body></html>");
                response.end();
            }
        }else{
            response.writeHead(404);
            response.write("<html><body>404</body></html>");
            response.end();
        }
    }
}).listen(gc.port);
log('service is running')
function isStaticRequest(pathName){
    for(var i = 0; i <gc.static_file_type.length; i++){
       var temp = gc.static_file_type[i];
       if(pathName.indexOf(temp) == pathName.length - temp.length){
            return true;
       }
    }
    return false;
}