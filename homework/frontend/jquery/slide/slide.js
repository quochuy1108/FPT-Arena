$(function () {
   
   
    
    $('.right').click(function (e) { 
        
        e.preventDefault();
        
        var sau = $('.active').next()
        var vitrigrey = $('.button ul li.grey').index() + 1
        if(vitrigrey == $('.button ul li').length){
            vitrigrey =0
        }
        $('.button ul li').removeClass('grey')
        $('.button ul li:nth-child('+ (vitrigrey+1) +')').addClass('grey')
        
       if(sau.length == 0 ){
        $('.active').addClass('bienmatbentrai').one('webkitAnimationEnd',function(){
            $('.bienmatbentrai').removeClass('bienmatbentrai')
        });
        $('.slideimages ._1slide:nth-child(1)').addClass('divaobenphai').one('webkitAnimationEnd',function(){
            $('.active').removeClass('active')
            $('.divaobenphai').removeClass('divaobenphai').addClass('active')
          
        });
       }
        else{
            $('.active').addClass('bienmatbentrai').one('webkitAnimationEnd',function(){
                $('.bienmatbentrai').removeClass('bienmatbentrai')
            });
            
            sau.addClass('divaobenphai').one('webkitAnimationEnd',function(){
                $('.active').removeClass('active')
               $('.divaobenphai').removeClass('divaobenphai').addClass('active')
              
            });
        }
        
    });

    $('.left').click(function (e) { 
        e.preventDefault();
        var truoc = $('.active').prev()
        var vitrigrey = $('.button ul li.grey').index() + 1
        if(vitrigrey == 1){
            vitrigrey = $('.button ul li').length + 1
        }
        $('.button ul li').removeClass('grey')
        $('.button ul li:nth-child('+ (vitrigrey-1) +')').addClass('grey')
        if(truoc.length == 1){
            $('.active').addClass('bienmatbenphai').one('webkitAnimationEnd',function(){
                $('.bienmatbenphai').removeClass('bienmatbenphai')
            });
           truoc.addClass('divaobentrai').one('webkitAnimationEnd',function(){
                $('.active').removeClass('active')
               $('.divaobentrai').removeClass('divaobentrai').addClass('active')
              
            });
          
        }

        else{
            $('.active').addClass('bienmatbenphai').one('webkitAnimationEnd',function(){
                $('.bienmatbenphai').removeClass('bienmatbenphai')
            });
           $('.slideimages ._1slide:last-child').addClass('divaobentrai').one('webkitAnimationEnd',function(){
                $('.active').removeClass('active')
               $('.divaobentrai').removeClass('divaobentrai').addClass('active')
              
            });
        }

    });
//    buttonslide
    $('.button ul li').click(function (e) { 
        e.preventDefault();
        $('.button ul li').removeClass('grey')
       $(this).addClass('grey')
        
         // slide
    $('.active').addClass('bienmatbentrai').one('webkitAnimationEnd',function(){
        $('.bienmatbentrai').removeClass('bienmatbentrai')
    });
    var vitrinut = $(this).index() + 1
  
    
    $('.slideimages ._1slide:nth-child(' + vitrinut +')').addClass('divaobenphai').one('webkitAnimationEnd',function(){
        $('.active').removeClass('active')
        $('.divaobenphai').removeClass('divaobenphai').addClass('active')
      
    });
    });
  
});