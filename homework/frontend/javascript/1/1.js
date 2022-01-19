document.addEventListener('DOMContentLoaded',function () {
	var icon = document.getElementsByClassName('icon');
	var appear = document.getElementsByClassName
	('appear');
	
	for (let i = 0; i < icon.length; i++) {
		icon[i].onclick = function () {
			if(icon[i] == 'white'){
				
				this.classList.remove('white');
				x =	this.getAttribute('data-icon');
				y = document.getElementById(x);y.classList.remove('hienlen')

			}
			else {
				for (let b = 0; b < icon.length; b++) {
					icon[b].classList.remove('white')
					
				}
				this.classList.toggle('white')
				x =	this.getAttribute('data-icon')
				y = document.getElementById(x) ;
				for (let a = 0; a < appear.length; a++) {
					appear[a].classList.remove('hienlen')
					
				}
			y.classList.toggle('hienlen')
				
			}
		
				
			}
			
		  
		
	}
	
  })