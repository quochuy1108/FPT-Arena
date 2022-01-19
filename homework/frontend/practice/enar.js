btn = document.querySelectorAll('.button .btn')
textappear = document.querySelectorAll('.textappear .block')
textappear2 = document.querySelector('.textappear .block.active')


for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(){
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('cam')
            btn[i].classList.remove('do')
        }
        this.classList.add('cam')    
        var dangclick = this;
        for ( chiso = 0; dangclick = dangclick.previousElementSibling; chiso++) {  }
       for (let e = 0; e < textappear.length; e++) {
           textappear[e].classList.remove('active')
       }
         textappear[chiso].classList.add('active')
           
           
    }    
  
    
    
}
