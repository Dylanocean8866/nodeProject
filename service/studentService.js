var studentDao = require('../dao/studentDao');


function getStudentInfo(success){
     studentDao.queryAllStudent(success);
}
function login(stuNum,pwd,success){
      studentDao.login(stuNum,pwd,success);
}
 

module.exports = {getStudentInfo,login};