$(function () {
     var vitri1 = $('.chapter1').offset().top
     var vitri2 = $('.chapter2').offset().top
     var vitri3 = $('.chapter3').offset().top
     var vitri4 = $('.chapter4').offset().top
    $('.menutren ul li:nth-child(1) a').click(function (e) { 
        e.preventDefault();            
    $('html, body').animate({scrollTop:vitri1},1500,'easeOutExpo')
    });
    // het chapter
    $('.menutren ul li:nth-child(2) a').click(function (e) { 
        e.preventDefault();            
    $('html, body').animate({scrollTop:vitri2},1500,'easeInOutSine')
    });
    // het chapter
    $('.menutren ul li:nth-child(3) a').click(function (e) { 
        e.preventDefault();            
    $('html, body').animate({scrollTop:vitri3},1500,'easeOutElastic')
    });
    // het chapter
    $('.menutren ul li:nth-child(4) a').click(function (e) { 
        e.preventDefault();            
    $('html, body').animate({scrollTop:vitri4},1500,'easeOutBounce')
    });
    // het chapter
    
    $('.btn').click(function (e) { 
        e.preventDefault(); 
        $('html, body').animate({scrollTop:0},'slow',)
        
    });
   
});