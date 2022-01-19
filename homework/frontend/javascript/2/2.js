

 document.addEventListener('DOMContentLoaded',function () {
   nut = document.getElementById('nut1')
   card = document.getElementsByClassName('card')
  //  console.log(card[0])
   nut.onclick = function () {
   card[0].classList.toggle('sangphai')
   }
 },false)