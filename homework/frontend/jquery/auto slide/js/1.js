$(function () {
   


    $('.button .right').click(function (e) { 
        e.preventDefault();
         
        var sau = $('.active').next()
        var vitrigreen = $('.circlebutton ul li.green').index() + 1
       if(vitrigreen == $('.circlebutton ul li').length){
         vitrigreen = 0
       }
        
            $('.circlebutton ul li').removeClass('green')
            $('.circlebutton ul li:nth-child('+ (vitrigreen+1) +')').addClass('green')
      
      
       
       
        
        
       if(sau.length == 0){
        $('.active').addClass('diratrai').one('webkitAnimationEnd',function(){
       
            $('.diratrai').removeClass('diratrai')
          })
          $('.slide ._1slide:nth-child(1)').addClass('divaophai').addClass('active').one('webkitAnimationEnd',function(){
          
            $('.active').removeClass('active')
            $('.divaophai').removeClass('divaophai').addClass('active')
           
        })
       }
        

     $('.active').addClass('diratrai').one('webkitAnimationEnd',function(){
       
       $('.diratrai').removeClass('diratrai')
     })
     $(sau).addClass('divaophai').addClass('active').one('webkitAnimationEnd',function(){
         $('.active').removeClass('active')
         $('.divaophai').removeClass('divaophai').addClass('active')
        
     })
        //het di ra 
    });
    $('.button .left').click(function (e) { 
        e.preventDefault();
        console.log('asd');
        
        
        var truoc = $('.active').prev()
        console.log(truoc.length);
        var vitrigreen = $('.circlebutton ul li.green').index() + 1
        if(vitrigreen == 1){
          vitrigreen = $('.circlebutton ul li').length + 1
        }
         
             $('.circlebutton ul li').removeClass('green')
             $('.circlebutton ul li:nth-child('+ (vitrigreen-1) +')').addClass('green')
       

        if(truoc.length == 0 ){
            $('.active').addClass('diraphai').one('webkitAnimationEnd',function(){
                $('.diraphai').removeClass('diraphai')
             })
             $('.slide ._1slide:last-child').addClass('divaotrai').addClass('active').one('webkitAnimationEnd',function(){
                $('.active').removeClass('active')
                $('.divaotrai').removeClass('divaotrai').addClass('active')
            })
        }
        
        $('.active').addClass('diraphai').one('webkitAnimationEnd',function(){
           $('.diraphai').removeClass('diraphai')
        })
        $(truoc).addClass('divaotrai').addClass('active').one('webkitAnimationEnd',function(){
            $('.active').removeClass('active')
            $('.divaotrai').removeClass('divaotrai').addClass('active')
        })
    });
   $('.circlebutton ul li').click(function (e) { 
       e.preventDefault();
       $('.circlebutton ul li').removeClass('green')
       $(this).addClass('green')
    //    slide
       $('.active').addClass('diratrai').one('webkitAnimationEnd',function(){
       
        $('.diratrai').removeClass('diratrai')
      })
       var vitrinut = $(this).index() + 1
       console.log(vitrinut);
      $('.slide ._1slide:nth-child('+ vitrinut +')').addClass('divaophai').addClass('active').one('webkitAnimationEnd',function(){
          
        $('.active').removeClass('active')
        $('.divaophai').removeClass('divaophai').addClass('active')
       
    })
       
   });
});

