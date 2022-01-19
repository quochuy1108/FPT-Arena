document.addEventListener('DOMContentLoaded',function(){
    icon = document.getElementsByClassName('icon')
hienthi = document.getElementsByClassName('hienthi')

for (let i = 0; i < icon.length; i++) {
icon[i].onclick = function(){
    
if(icon[i].classList[1] == 'white'){
    icon[i].classList.remove('white');
    console.log(this.classList);
    
  
y.classList.remove('hienra')

}
else{
    for (let q = 0; q < icon.length; q++) {
        icon[q].classList.remove('white')  
    }
    this.classList.add('white') 
x = this.getAttribute('data-mk');
y = document.getElementById(x);

for (let h = 0; h < hienthi.length; h++) {
hienthi[h].classList.remove('hienra') 
}   
y.classList.add('hienra')
}
    

    
}

}
},false)
