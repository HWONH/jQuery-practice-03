$(document).ready(function(){
    /* ex01 */ 
    // var $n=1;
    // setInterval(function(){
    //     if($n<=100){ /* $n==1~100 */
    //         $("#ex_01 span").text($n); /* $n==1~100 */
    //         $n++; /* $n==2~101 */     
    //     }else{ /* $n==101 */
    //         $n=1;
    //     }
    // }, 10);

    /* ex02 */ 
    // 같은 변수값으로 선언하면 안되는 이유 : 
    // var $n=1;
    // setInterval(function(){
    //     var $color="#"+(parseInt(Math.random()*0xffffff)).toString(16);
    //     // "#"+ < $color < "#"+ (단, 정수값)
    //     var $fontSize = (10+parseInt(Math.random()*40))+"px";
    //     // 10+0*40+"px" < $fontSize < 10+1*40+"px" (단, 정수값)
    //     if($n<101){
    //         $("#ex_02 span").text($n).css({"color":$color, "font-size":$fontSize}); /* $n==1~100 */
    //         $n++; /* $n==2~101 */
    //     }else{ /* $n==101 */
    //         $("#ex_02 span").text("100까지 종료되었습니다.");
    //     }
    // }, 10);

    // var $i=1;
    // setInterval(function(){
    //     var $color="#"+(parseInt(Math.random()*0xffffff)).toString(16);
    //     // "#"+ < $color < "#"+ (단, 정수값)
    //     var $fontSize = (10+parseInt(Math.random()*40))+"px";
    //     // 10+0*40+"px" < $fontSize < 10+1*40+"px" (단, 정수값)
    //     if($i<101){
    //         $("#ex_02 span").text($i).css({"color":$color, "font-size":$fontSize}); /* $i==1~100 */
    //         $i++; /* $i==2~101 */
    //     }else{ /* $i==101 */
    //         $("#ex_02 span").text("100까지 종료되었습니다.");
    //     }
    // }, 10);

    /* review02 */ 
    $("#rv_02 img").hover(function(){
        $(this).attr({"src":"img/image_2.jpg", "alt":"두번째 이미지"})
    }, function(){
        $(this).attr({"src":"img/image_1.jpg", "alt":"첫번째 이미지"})
    });

    /* review03 */ 
    // 더 이상 추가 못하도록 제어할 것!
    $("#rv_03 .add_02").click(function(){
        $("#rv_03").append("<img src='img/image_2.jpg' alt='이미지-02'/>")
        $(this).attr("disabled","disabled");
    });
    $("#rv_03 .add_03").click(function(){
        $("#rv_03").append("<img src='img/image_3.jpg' alt='이미지-03'/>")
        $(this).attr("disabled","disabled");
    });

    /* review04 */ 
    var $rv_arr=["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg", "image_7.jpg", "image_8.jpg", "image_9.jpg", "image_10.jpg"]
    
    var $a=1;
    $("#rv_04 button").click(function(){
        if($a<10){
            $("#rv_04").append("<img src='img/"+$rv_arr[$a]+"' alt='이미지-"+($a+1)+"'/>")
            $a++;
            console.log($a);
        }else{
            $(this).attr("disabled","disabled");
        }
    });

    /* review05 */ 
    // var $b=1;
    // $("#rv_05 button").click(function(){
    //     if($b<10){
    //         console.log($b);
    //         $("#rv_05 img").attr({"src":"img/"+$rv_arr[$b]+"", "alt":"이미지-"+($b+1)+""});
    //         $b++;
    //     }else{
    //         $b=0;
    //         $("#rv_05 img").attr({"src":"img/"+$rv_arr[$b]+"", "alt":"이미지-"+($b+1)+""});
    //     }
    // });

    var $b=1;
    $("#rv_05 button").click(function(){
        if($b>=10){
            $b=0;
        }
        console.log($b);
        $("#rv_05 img").attr({"src":"img/"+$rv_arr[$b]+"", "alt":"이미지-"+($b+1)+""});
        $b++;
    });

    /* review06 */ 
    var $length=$rv_arr.length; /* 10 */
    $c=0;
    $("#rv_06 .prev_btn").click(function(){
        $c--;
        if($c<0){
            $c=$length-1; /* 9 */
        }
        $("#rv_06 img").attr({"src":"img/"+$rv_arr[$c]+"", "alt":"이미지-"+($c+1)+""});
    });
    $("#rv_06 .next_btn").click(function(){
        $c++;
        if($c>$length-1){
            $c=0;
        }
        $("#rv_06 img").attr({"src":"img/"+$rv_arr[$c]+"", "alt":"이미지-"+($c+1)+""});
    });
});