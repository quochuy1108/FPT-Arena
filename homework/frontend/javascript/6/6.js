document.addEventListener('DOMContentLoaded',function () { 
   var btn = document.querySelector('.btn'),
       menutrai = document.querySelector('.menutrai'),
       black = document.querySelector('.black')
       ndto = document.querySelector('.ndto') 
       white =  document.querySelector
       ('.white')

       btn.onclick = function () {
       menutrai.classList.add('divao');
       black.classList.add('len');
       white.classList.add('quay')      
         }
       black.onclick = function () {
        menutrai.classList.remove('divao');
        black.classList.remove('len');
        white.classList.remove('quay')
         } 
         
 },false)