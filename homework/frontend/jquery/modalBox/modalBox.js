$(function () {
    $('button ').click(function (e) { 
        e.preventDefault();
        $('.background').addClass('hienra');
        $('.popup .block').addClass('ra');
        var thongbao = setInterval(function(){
            $('.background').removeClass('hienra')
            $('.popup .block').removeClass('ra');
           clearInterval(thongbao)
        },3000)
    });
    
       
   
   
});