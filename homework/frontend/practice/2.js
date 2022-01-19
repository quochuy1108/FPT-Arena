$(function () {
    dem = 1
    $('.imgs .slideanh').append("<img src='' class='anh'> ");
    $('.clicknutphai').click(function (e) { 
        e.preventDefault();
     $(this).prev().prev().prev().children('.anh').attr({src:$('.imgs .slideanh img:nth-child('+dem+')').attr('src')})
     
   
     console.log(dem);
     
     var dodaianh = $(this).prev().prev().prev().children().length
   
     
     
     if(dem == dodaianh - 1){
         dem = 1
     }
      else{
          dem =dem + 1
      }  
    });
    // nuttrai
    $('.clicknuttrai').click(function (e) { 
        e.preventDefault();
     $(this).prev().prev().prev().prev().children('.anh').attr({src:$('.imgs .slideanh img:nth-child('+dem+')').attr('src')})
      
   
    console.log(dem);
    
     
     var dodaianh = $(this).prev().prev().prev().prev().children().length
        
     if(dem == 1){
         dem = dodaianh - 1
     }
     else{
         dem = dem - 1
     }
        
    });

    $('.quickview').click(function (e) { 
        e.preventDefault();
        $('.popup').addClass('popuphienlen');
        $('.den').addClass('denhienlen');

    });
    $('.den').click(function (e) { 
        e.preventDefault();
        $('.popup').removeClass('popuphienlen');
        $('.den').removeClass('denhienlen');

    });
});