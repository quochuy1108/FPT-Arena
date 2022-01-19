
document.addEventListener('DOMContentLoaded',function () {
 var nut = document.getElementById('nuthieuung')
 var khoi = document.getElementById('kcd')
 var trangthai = 'click lan 1'
//  console.log(nut)
    nut.onclick = function () {
        if(trangthai == 'click lan 1')
        {
            console.log('click lan 1');
            trangthai = 'click lan 2';
            khoi.classList.add('chieuso1');
            // khoi.classList.remove('kodong')
        }
        else if(trangthai =='click lan 2'){
            console.log('click lan 2')
            trangthai='click lan 1'
            // khoi.classList.remove('chieuso1')
            khoi.classList.add('chieuso2');
            khoi.classList.remove('chieuso1');
        }
   
    }
},false)
