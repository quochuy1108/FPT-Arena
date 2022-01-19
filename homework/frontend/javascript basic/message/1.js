function block({
        title = '',
        message = '',
        type = '',
        duration = 3000
})
{
    const main = document.getElementById('block');
    if (main) {
        const block = document.createElement('div');
        // auto remove block
        const autoRemove = setTimeout(function(){
            main.removeChild(block)
        }, duration + 1000)
        // remove block when clicked
      block.onclick = function(e){
         if(e.target.closest('.block__close')){
            main.removeChild(block);
            clearTimeout(autoRemove)
          
         }
         
      }
        
        const icons = {
            success: 'fas fa-check-circle',
            warning: 'fas fa-exclamation-triangle',
            danger:  'fas fa-exclamation-circle',
            info: 'fas fa-info-circle'
        }
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2)
     
       
        block.style.animation = `slideInLeft ease 1s  forwards,fadeOut linear 1s ${delay}s forwards `
        block.classList.add('block', `block--${type}`);
        block.innerHTML = `
        <div class="block__icon ">
        <i class="${icon}"></i>
    </div>
    <div class="block__body">
        <h3 class="block__title">${title}</h3>
        <div class="block__msg">${message}</div>
    </div>
    <div class="block__close">
        <i class="fas fa-times"></i>
    </div>`;
        main.appendChild(block);
        
     
    }
}


block({
    title: 'Thanh cong',
    message: 'Matt Liu lộ diện giữa tin đồn chia tay, rủ cả bạn trai cũ Hương Giang đi chơi golf?',
    type: 'success',
    duration: 5000
})

function showSuccessBlock() {
    block({
    title: 'Thanh cong',
    message: 'Matt Liu lộ diện giữa tin đồn chia tay, rủ cả bạn trai cũ Hương Giang đi chơi golf?',
    type: 'success',
    duration: 3000
})

}
function showErrorBlock() {
    block({
    title: 'That bai',
    message: 'Co loi xay ra roi kiem tra lai de',
    type: 'warning',
    duration: 3000
})

}
