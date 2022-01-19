$(function () {
    cd1 = new TimelineMax({paused:true});
    cd1.to($('.nut'),1,{x:-300})
    .to($('.nut'),1,{y:300},'>1')
    .to($('.nut'),1,{x:0},'>1')
    .to($('.nut'),1,{rotationX:360})
    .to($('.nut'),1,{rotationX:0,y:0})
   
    // code cac nut
    // nutdung
    $('.nutdung').click(function (e) { 
        e.preventDefault();
        cd1.pause()
    });
    // nutchay
    $('.nutchay').click(function (e) { 
        e.preventDefault();
        cd1.resume()
    });
    // reverse
    $('.nutdaonguoc').click(function (e) { 
        e.preventDefault();
        cd1.reverse()
    });
    $('.nutseek').click(function (e) { 
        e.preventDefault();
        cd1.seek()
    });
    $('.kickhoat').click(function (e) { 
        e.preventDefault();
        cd1.resume()
    });
});