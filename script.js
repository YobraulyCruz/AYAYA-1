$(".begin").click(function(){
    $(".begin").fadeOut();
});
$(".begin").click(function(){
    $("#quiz").fadeIn();
});
$(".next").click(function(){
    $("#quiz").fadeOut();
});
$(".next").click(function(){
    $("#quiz1").fadeIn();
});
$(".next1").click(function(){
    $("#quiz1").fadeOut();
});
$(".next1").click(function(){
    $("#quiz2").fadeIn();
});
$(".next2").click(function(){
    $("#quiz2").fadeOut();
});
$(".next2").click(function(){
    $("#quiz3").fadeIn();
});
$(".next3").click(function(){
    $("#quiz3").fadeOut();
});

$(".next3").click(function() {
    var jonathan = $(".ipt").val();
    var dio = $(".ipt1").val();
    var duwang = $(".ipt2").val();
    var Kira = $(".ipt3").val();
    
    var jonathan = jonathan.toLowerCase();
    var dio = dio.toLowerCase();
    var duwang = duwang.toLowerCase();
    var Kira = Kira.toLowerCase();

    if(jonathan === "yes" && dio >= "3" && duwang >= "20" && Kira === "hero"){
        $(".jonathan").show();
        }
        
        else if(jonathan === "yes" && dio < "3" && duwang <= "19" && Kira === "hero"){
         $(".joseph").show();
         }
         
         else if(jonathan === "no" && dio <= "3" && duwang >= "17" && Kira === "hero"){
         $(".jotaro").show();
         }
         
         else if(jonathan === "no" && dio === "4" && duwang === "16" && Kira === "hero"){
         $(".josuke").show();
         }
         
         else if(jonathan === "no" && dio === "5" && duwang <= "15" && Kira === "hero"){
         $(".giorno").show();
         }
         
         else if(jonathan === "no" && dio >= "4" && duwang >= "21" && duwang <= "32" && Kira === "villian"){
         $(".DIO").show();
         }
         
         else if(jonathan === "no" && dio <= "3" && duwang >= "33" && Kira === "villian"){
         $(".Kira").show();
         }
         else if(jonathan === "no" && dio === "1" && duwang <= "16" && Kira === "villian"){
         $(".fugo").show();
         }
        
        else{
            $(".secret").show();
        }

});

$(".restart").click(function(){
    $(".begin").fadeIn();
});
$(".restart").click(function(){
    $(".jonathan").fadeOut();
});
$(".restart").click(function(){
    $(".joseph").fadeOut();
});
$(".restart").click(function(){
    $(".jotaro").fadeOut();
});
$(".restart").click(function(){
    $(".josuke").fadeOut();
});
$(".restart").click(function(){
    $(".giorno").fadeOut();
});
$(".restart").click(function(){
    $(".DIO").fadeOut();
});
$(".restart").click(function(){
    $(".Kira").fadeOut();
});
$(".restart").click(function(){
    $(".fugo").fadeOut();
});
$(".restart").click(function(){
    $(".secret").fadeOut();
});










