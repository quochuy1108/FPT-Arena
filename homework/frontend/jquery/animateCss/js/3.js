$(function () {
    
  
    $(window).scroll(function(){
        var vitribody = $('html,body').scrollTop()
        console.log(vitribody);
        var vitrigiaodien = $('.giaodien').offset().top - 500
        if(vitribody >= vitrigiaodien){
            $('.giaodien').addClass('hienra');
           
            
        }
        
    })
    // het window
    
});
