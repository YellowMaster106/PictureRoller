var lb = document.getElementById("lunbo")
        var num=1;
        var left = document.getElementById("left")
        var right = document.getElementById("right")
        document.getElementsByClassName('point')[0].classList.add("point-active")
        lb.src="img/"+num+".jpg" 

        //清除红点
        function timeClear(){
            document.getElementsByClassName('point')[0].classList.remove("point-active")
            document.getElementsByClassName('point')[1].classList.remove("point-active")
            document.getElementsByClassName('point')[2].classList.remove("point-active")
            document.getElementsByClassName('point')[3].classList.remove("point-active")
        }

        //上翻图片
        function imgback(){
            num--;
            if(num == 0){
                num = 4;     
            }
            timeClear();
            document.getElementsByClassName('point')[num-1].classList.add("point-active")
            lb.src="img/"+num+".jpg" 
        }

        //下翻图片
        function imgnext(){
            num++;
            if(num == 5){
                num = 1;     
            }
            timeClear();
            document.getElementsByClassName('point')[num-1].classList.add("point-active")
            lb.src="img/"+num+".jpg" 
        }

        //计时器
        let timer = setInterval(() => {imgnext()},3000)

        //停止计时
        function timeStop(){
            clearInterval(timer);
        }

        //开始计时
        function timeStart(){
            timer = setInterval(() => {imgnext()},3000)
        }

        //箭头上翻事件
        function backAction(){
            timeStop();
            imgback();
            timeStart();
        }

        //箭头下翻事件
        function nextAction(){
            timeStop();
            imgnext();
            timeStart();
        }

        //给箭头附上鼠标点击事件
        left.onclick=backAction;
        right.onclick=nextAction;


        // 点击圆点换图
        var allLi = document.getElementsByTagName('ul')[0].getElementsByTagName("li");
        for(var i = 0 ; i < allLi.length ; i++){
            allLi[i].index = i;
            allLi[i].onclick=function(){
                timeStop();
                num = this.index+1;
                lb.src="img/"+num+".jpg"  
                timeClear();
                document.getElementsByClassName('point')[this.index].classList.add("point-active")
                timeStart();
            }   
        }

        // 点击图片换图
        var imgLi = document.getElementsByClassName('imgDisplay')[0].children
        for(var i = 0 ; i < imgLi.length ; i++){
            imgLi[i].index = i;
            imgLi[i].onclick=function(){
                timeStop();
                num = this.index+1;
                lb.src="img/"+num+".jpg"  
                timeClear();
                document.getElementsByClassName('point')[this.index].classList.add("point-active")
                timeStart();
            }   
        }