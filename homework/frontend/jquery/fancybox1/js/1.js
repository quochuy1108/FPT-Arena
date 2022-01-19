$(function () {
    $(".imgs a").fancybox({closeEffect : 'elastic',openEffect : 'elastic',prevEffect : 'none',
    nextEffect : 'none',});
    $('button').click(function (e) { 
        e.preventDefault();
        $('.khoi').animate({marginLeft:400},1500,'easeInOutExpo')
        
    });
    $('.block:nth-child(2) .slidedown').slideUp()
    $('.block:nth-child(3) .slidedown').slideUp()
    $('.title').click(function (e) { 
        e.preventDefault();
        $('.slidedown').slideUp()
        $(this).next().slideToggle()
        $('.chevron').toggleClass('chevron-up'),
        $('body, html').animate({scrollTop:$(this).offset().top})
        $(this).toggleClass('yellow')
    });
});
