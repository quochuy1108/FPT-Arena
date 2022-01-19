document.addEventListener('DOMContentLoaded',function () {
    var button = document.querySelector('.btn')
    var btn = document.getElementsByClassName('btn');
    console.log(btn[3]);
    
    var bo2 = document.querySelector('.bo2');
    console.log(bo2);
    
    
    var khoi2 = document.querySelector('.khoi2');
    
    
    var bo = document.querySelector('.bo');
    button.onclick = function () {
        bo.classList.toggle('quayX')
      }

      btn[1].onclick = function(){
          khoi2.classList.toggle('len')
     
          
      }
      btn[3].onclick = function () {
        bo2.classList.toggle('hienlen')
        
      }    
  })