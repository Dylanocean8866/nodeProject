window.onload = () =>{
   
    function getAjax(method,url,param,callback){
        let xhr;
        if(XMLHttpRequest){
            xhr =new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
        if(method == "GET"){
            xhr.open(method,url+"?"+param,true);
            xhr.send();
        }else{
            xhr.open(method,url,true);
            xhr.send(param);
        }
        xhr.onreadystatechange = () =>{
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(xhr.responseText);
            }
        }
    
    }
    // function showData(data){
    //     var curData = JSON.parse(data);
    //     var htmlText = "";
    //     curData.forEach((item,index)=>{
    //          htmlText += `<div>
    //             <span>${item.id}</span>
    //             <span>${item.stu_num}</span>
    //             <span>${item.name}</span>
    //             <span>${item.age}</span>
    //             <span>${item.class}</span>
    //             </br>
    //         </div>`;
    //     })
    //     info.innerHTML =htmlText;
    // }
    // getAjax('GET','/getData',showData)
    var btn = document.getElementsByTagName("button")[0];
    btn.onclick = function(){
        var sNum = document.getElementById('stuNum').value;
        var sPwd = document.getElementById('pwd').value;
        // console.log(sNum,sPwd);
        // var param = "sNum="+sNum+"&sPwd="+sPwd+"";
        var param = JSON.stringify({sNum,sPwd});
        getAjax('POST','/login',param,(data)=>{
           if(JSON.parse(data)[0]){
               alert('success')
           }else{
               alert('faild')
           }
        })
    }  

}