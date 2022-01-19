document.addEventListener('DOMContentLoaded',function () { 
   var khoi = document.getElementsByClassName('khoi');
   var tamgiac = document.getElementById('tg');
    console.log(tamgiac)
   tamgiac.onclick = function () {  
       this.classList.toggle('trang')
       khoi[0].classList.toggle('hienra')
   }
 },false)

