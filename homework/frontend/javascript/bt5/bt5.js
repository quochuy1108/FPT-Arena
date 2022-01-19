document.addEventListener('DOMContentLoaded',function () {
    var icon = document.getElementsByClassName('icon')
    var frame = document.getElementsByClassName('frame')
    
    
    for (let i = 0; i < icon.length; i++) {
       icon[i].onclick = function(){
           
       if(icon[i].classList[1] == 'white'){
          icon[i].classList.remove('white')
          x=this.getAttribute('data-mk')
      y=document.getElementById(x)
      y.classList.remove('hienra')   
       }
     else{
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.remove('white')         
        }
       this.classList.toggle('white')
      x=this.getAttribute('data-mk')
      y=document.getElementById(x)
      for (let i = 0; i < frame.length; i++) {
          frame[i].classList.remove('hienra')  
      }
      y.classList.toggle('hienra')
     }
          
         
         
       }
        
    }
  
  },false)