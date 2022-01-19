document.addEventListener('DOMContentLoaded',function(){
    var text = document.getElementById('text')
    var img = document.getElementById('img')
    kcimg = img.offsetTop;
    kc = img.offsetTop + 1200
    trangthaiimg = '<200'
    var trangthaitext = '<800'
    var menu = document.querySelector('.menu')
    var trangthaimenu = '<300'
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    
    if(window.pageYOffset > 300){
        if(trangthaimenu =='<300'){
            trangthaimenu = '>300';
            menu.classList.add('chuyendo')
            console.log('lolo');
            
        }
       
    }
    else if(window.pageYOffset <= 300){
        if(trangthaimenu =='>300'){
            trangthaimenu = '<300';
            menu.classList.remove('chuyendo')
            console.log('cac');
            
        }
        
    }
       if(window.pageYOffset > 500){
           if(trangthaitext =='<800'){
               trangthaitext = '>800';
             text.classList.add('divao')
               console.log('vao');
               
           }
       }
    else{
        if(trangthaitext =='>800'){
            trangthaitext ='<800';
            text.classList.remove('divao')
           
            
        }
    }
   
     if((window.pageYOffset > kcimg) && (window.pageYOffset < kc)){
        if(trangthaiimg =='<200'){
            trangthaiimg ='>200';
            img.classList.add('fixed')
            img.classList.remove('dungyen')
        } 
    }
    
   if(window.pageYOffset < kcimg){
    img.classList.remove('fixed')
    img.classList.remove('dungyen')
}
    else if(window.pageYOffset > kc){
        if(trangthaiimg =='>200'){
            trangthaiimg ='<200';
            img.classList.remove('fixed')
            img.classList.add('dungyen')
        }
    }
})






},false)