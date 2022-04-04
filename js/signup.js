(function(){
    // 选择学校
    var schoolinfo=document.getElementById("schoolinfo");
    var schoolleftul=document.getElementById("schoolleftul");
    var schoollis=schoolleftul.getElementsByTagName("li");
    var schoolleft=document.getElementById("schoolleft");
    var selectschool1=document.getElementById("selectschool1");
    var selectschool=document.getElementById("selectschool");
    var schoolleft=document.getElementById("schoolleft");
    var citylist=document.querySelectorAll(".schoollist");
    var currentschooluls=document.querySelectorAll("#currentschoolul");
    // console.log(currentschooluls);
    

    schoolinfo.onmouseenter=function(){
        // console.log("1")
        selectschool1.style.display="block"
        selectschool.style.display="block";
        schoolinfo.style.borderRadius="8px 8px 0 0";
        schoolinfo.style.background="white";

    }
    schoolinfo.onmouseleave=function(){
        selectschool1.style.display="none"
        selectschool.style.display="none";
        schoolinfo.style.borderRadius="8px";
        schoolinfo.style.background="#E0E0E0";   

    }
    selectschool1.onmouseenter=function(){
        selectschool.style.display="block"
        selectschool1.style.display="block";
        schoolinfo.style.borderRadius="8px 8px 0 0";
        schoolinfo.style.background="white";
    }
    selectschool1.onmouseleave=function(){
        selectschool1.style.display="none";
        selectschool.style.display="none";
        schoolinfo.style.borderRadius="8px";
        schoolinfo.style.background="#E0E0E0";   
    }
    var t=0;
    schoolleftul.onmouseover=function(e){
        if(e.target.tagName.toLowerCase()=="li")
        {
            var name=e.target.getAttribute("data-n");
            console.log(name);
            if(name==""){
                name="city1";
            }
            
            for(var i=0;i<schoollis.length;i++)
            {
                schoollis[i].className=""
            }
            e.target.className="current";
            for(var i=0;i<citylist.length;i++)
            {
                    citylist[i].className="schoollist"
            }
            for(var i=0;i<citylist.length;i++)

            {
                if(citylist[i].getAttribute("data-n")==name)
                {
                    citylist[i].className="currentschool schoollist"
                    t=i;
                    // currentschooluls[t].onmouseover=function(e){
                    //     var schoolullis=currentschooluls[t].getElementsByTagName("li");
                    //     if(e.target.tagName.toLowerCase()=="li"){
                    //         for(var i=0;i<schoolullis.length;i++)
                    //         {
                    //             schoolullis[i].className=""
                    //         }
                    //         e.target.className="current";
                    //     }
                    // }
                    currentschooluls[t].onclick=function(e){
                        console.log(e.target)
                       
                        if(e.target.tagName.toLowerCase()=="li"){
                            for(var j=0;j<currentschooluls.length;j++)
                            {
                                var schoolullis=currentschooluls[j].getElementsByTagName("li");
                                    for(var i=0;i<schoolullis.length;i++)
                                    {
                                    schoolullis[i].className=""
                                    }
                                    schoolinfo.value=e.target.innerHTML;
                                    e.target.className="current";
                            }
                        }
                        
                    }
                    
                }
            }
        }
    }

    currentschooluls[t].onclick=function(e){
        console.log(e.target)
       
        if(e.target.tagName.toLowerCase()=="li"){
            for(var j=0;j<currentschooluls.length;j++)
            {
                var schoolullis=currentschooluls[j].getElementsByTagName("li");
                    for(var i=0;i<schoolullis.length;i++)
                    {
                    schoolullis[i].className=""
                    }
                    schoolinfo.value=e.target.innerHTML;
                    e.target.className="current";
            }
        }
        
    }

    
//     var  el = window.document.body; //声明一个变量，默认值为body
// window.document.body.onmouseover =  function (event){
//    el = event.target; //鼠标每经过一个元素，就把该元素赋值给变量el
//    console.log( '当前鼠标在' , el,  '元素上' ); //在控制台中打印该变量
// }


    schoolleftul.onclick=function(e){
        console.log("1")
        if(e.target.tagName.toLowerCase()=="li")
        {
            console.log(1);
        }
    }




    // 选择年份
    var selectyearsul=document.getElementById("selectyearsul");
    var yearsinfo=document.getElementById("yearsinfo");
    var selectlis=selectyearsul.getElementsByTagName("li");
    var selectyears=document.getElementById("selectyears");
   var selectyears1buttom=document.getElementById("selectyears1buttom");
    var selectyears1topspan=document.getElementById("selectyears1topspan");
    yearsinfo.onmouseenter=function(){
 
        selectyears1buttom.style.display="block";  
        selectyears.style.display="block";   
        yearsinfo.style.borderRadius="8px 8px 0 0";
        yearsinfo.style.background="white";
      
    }
    yearsinfo.onmouseleave=function(){
        selectyears1buttom.style.display="none";  
        selectyears.style.display="none";
        yearsinfo.style.borderRadius="8px";
        yearsinfo.style.background="#E0E0E0";   
    }
    selectyears1buttom.onmouseenter=function(){
        
        selectyears1buttom.style.display="block";    
        selectyears.style.display="block"; 
        yearsinfo.style.borderRadius="8px 8px 0 0";
        yearsinfo.style.background="white";
    }
    selectyears1buttom.onmouseleave=function(){
        selectyears1buttom.style.display="none";  
        selectyears.style.display="none";
        yearsinfo.style.borderRadius="8px";
        yearsinfo.style.background="#E0E0E0";   
    }

    selectyearsul.onclick=function(e){
        if(e.target.tagName.toLowerCase()=="li")
        {
            // console.log(e.target)
            yearsinfo.value=e.target.innerHTML;
            for(var i=0;i<selectlis.length;i++)
            {
                selectlis[i].className="";
            }
            e.target.className="current";
        }
    }





    // 提交验证
    var signbtn=document.getElementById("signbtn");
    var emailiput=document.getElementById("emailiput");
    var infopop=document.getElementById("infopop");
    var sucpop=document.getElementById("sucpop");
    var warnpop=document.getElementById("warnpop");
    var sucinfo=document.getElementById("sucinfo");
    var schoolinfo=document.getElementById("schoolinfo");
    // var yearsinfo=document.getElementById("yearsinfo");
    signbtn.onclick=function(){
        console.log("1");
        var emailtext=emailiput.value;
        var schooltext=schoolinfo.value;
        var yearstext=yearsinfo.value;
        // var regexp1=/^[A-Za-z0-9_-.]+@[A-Za-z1-9]+(\.[a-zA-Z0-9-])*\.[a-zA-Z0-9]{2,6}$/;
       var regexp1=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if(regexp1.test(emailtext)&&emailiput.value!=""&&yearsinfo.value!=""&&schoolinfo.value!="")
        {
            infopop.style.display="none";
            sucpop.style.display="block";
            sucinfo.style.display="block"
            warnpop.style.display="none";
            sucinfo.innerHTML="恭喜您，来自 "+schooltext+" "+yearstext+"级 "+emailtext+" 同学，您的报名信息已记录，请关注您的邮件";
            // 清除报名前的信息

            // 清除学校选择信息
            for(var i=0;i<schoollis.length;i++)
            {
                schoollis[i].className=""
            }
            for(var j=0;j<currentschooluls.length;j++)
                 {
                       var schoolullis=currentschooluls[j].getElementsByTagName("li");
                          for(var i=0;i<schoolullis.length;i++)
                            {
                             schoolullis[i].className=""
                            }
                 }
            schoolinfo.value=""
            // 清除年份选择信息
            for(var i=0;i<selectlis.length;i++)
            {
                selectlis[i].className="";
            }
            yearsinfo.value="";
            // 清除邮箱信息
            emailiput.value="";

        }else{
            if(emailiput.value==""||yearsinfo.value==""||schoolinfo.value=="")
            {
                warnpop.style.display="block";
                warnpop.innerHTML="请将您的信息录入完整"
            }else if(!regexp1.test(emailtext))
            {
            warnpop.style.display="block";
            warnpop.innerHTML=" 邮箱地址不符合要求（youxiang@host.com）,请重新输入";
            }
        }
    }

    // 重新报名
    var againsign=document.getElementById("againsign");
    againsign.onclick=function(){
        infopop.style.display="block";
        sucinfo.style.display="none"
        sucpop.style.display="none";
    }

})();