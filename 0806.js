$(".nut").click(function (e) { 
    e.preventDefault();
    $(".do").toggleClass("dolen");
    $(".den").toggleClass("denlen");
});
$(".den").click(function (e) { 
    e.preventDefault();
    $(".do").toggleClass("dolen");
    $(".den").toggleClass("denlen");
});
$(".nut2").click(function (e) { 
    e.preventDefault();
    $("body").append("<h2> Viet nam vo dich </h2>");
});

$(".com"). on("keypress", function(e){
    if(e. which == 13){
   noidung = $(".com").val();
    }
    });
    $(".caccomment").append('  <div class="comment"> <div class="ava"> <img src="080620/a2.jpg" alt="">  </div>  <div class="text">  <b>Nguyen quoc huy</b>   <i>alo alo</i>  </div></div>');