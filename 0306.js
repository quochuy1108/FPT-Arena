$(".nut").click(function (e) { 
    e.preventDefault();
    $(".thanhmenu").toggleClass("divao");
});
$(".nut2").click(function (e) { 
    e.preventDefault();
    $(".thanhmenuphai").toggleClass("divao2");
});
$(".nut3").click(function (e) { 
    e.preventDefault();
    $(".thanhmenutop").toggleClass("dixuong");
});
$(".nut4").click(function (e) { 
    e.preventDefault();
    $(".thanhmenubot").toggleClass("dilen");
});
$(".nut5").click(function (e) { 
    e.preventDefault();
    $(".body").toggleClass("nutday");
    $(".thanhmenu").toggleClass("divao");
});
$(".nut6").click(function (e) { 
    e.preventDefault();
    $(".body").toggleClass("nutday2");
    $(".thanhmenuphai").toggleClass("divao2");
});

