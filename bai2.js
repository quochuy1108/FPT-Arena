$("li.love").click(function (e) { 
    e.preventDefault();
    $(".lovely").toggleClass("lovely_on");
    $(".l1").toggleClass(".lovely l1_on");
    
 
});

$("li.love2").click(function (e) { 
    e.preventDefault();
    $(".beverage").toggleClass("dongke");

    
});

$("li.love3").click(function (e) { 
    e.preventDefault();
    $(".fine").toggleClass("fine_on");

    
});