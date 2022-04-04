(function(){
    var classmenyul=document.getElementById("classmenuul");
    var classlis=classmenyul.getElementsByTagName("li");
    var textul=document.getElementById("textul")
    var textlis=textul.getElementsByTagName('li');
    var kcap=document.getElementById("kcap");
    var kcaptext=document.getElementById("kcaptext");
    var centerwarp=document.getElementById("centerwarp");
    classmenyul.onclick=function(e){
        var x=0;    //当前展示行
        if(e.target.tagName.toLowerCase()=='li')
        {
            for(var i=0;i<classlis.length;i++)
            {
                classlis[i].className="";
            }
            e.target.className="current"
        }
        if(e.target.getAttribute('data-n')=='cAll')
        {
            for(var i=0;i<textlis.length;i++)
            {
                textlis[i].style.display="block";    
                x++;
            }
        }else{
            for(var i=0;i<textlis.length;i++)
            {
                textlis[i].style.display="none";
                // console.log(textlis[i].getAttribute('data-n')+"    "+e.target.getAttribute('data-n'))
                if(textlis[i].getAttribute('data-n').indexOf(e.target.getAttribute('data-n'))!=-1)
                {
                    
                    textlis[i].style.display="block";
                    x++;
                }
            }
         }
         var cheight=x*130;

        centerwarp.style.height=560+cheight+"px";
        kcap.style.height=160+cheight+"px";
        kcaptext.style.height=cheight+"px";
    
    }
})();