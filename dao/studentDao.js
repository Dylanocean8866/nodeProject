var dbUtil = require("./dbUtil");
function queryAllStudent(success){
    var connection = dbUtil.createConnection();
    var querySql = 'select * from  student';
    connection.query(querySql,function(error,result){
    if(error!="null"){
       success(result);
    }else{
        console.log(error);
    }
    });
    connection.end();
}


function queryStudentByClass(className,age){
    var connection = dbUtil.createConnection();
    var querySql = `select * from student  where class=? and age = ?`;
    connection.query(querySql,[className,age],function(error,result){
        if(error!="null"){
            console.log(result);
            
        }else{
            console.log(error);
        }
    })
    connection.end();
}


function login(stuNum,pwd,success){
    var connection = dbUtil.createConnection();
    var querySql = `select * from student  where stu_num=? and pwd = ?`;
    connection.query(querySql,[stuNum,pwd],function(error,result){
        if(error!="null"){
            success(result);
        }else{
            console.log(error);
        }

    })
    connection.end();
}


module.exports = {
    queryAllStudent,
    queryStudentByClass,
    login
}