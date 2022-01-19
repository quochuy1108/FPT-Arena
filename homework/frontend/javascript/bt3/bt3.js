document.addEventListener('DOMContentLoaded',function () {  
   nut1 = document.getElementById('nut')
   nut2 = document.getElementById('nutduoi')
   trangthai = 'click lan 1'
    nut1.onclick = function () {
        if(trangthai == 'click lan 1'){
            console.log('lan 1');
            trangthai = 'click lan 2'
            nutduoi.classList.add('cd1')          
        }
        else if(trangthai =='click lan 2'){
            console.log('lan 2');
            trangthai = 'click lan 1'
           nutduoi.classList.add('cd2')
           nutduoi.classList.remove('cd1')

        }
      }
  
   
   
   
},false)