document.addEventListener('DOMContentLoaded', function () {
    var ul = document.querySelector('ul')

    var btn = document.getElementsByClassName('khung5n');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            for (let k = 0; k < btn.length; k++) {
                btn[k].classList.remove('active')

            }
            this.classList.add('active');

            phantuhientai = document.querySelector('.active')
            for (var vitri = 0; phantuhientai = phantuhientai.previousElementSibling; vitri++) { console.log('ptht:', phantuhientai.previousElementSibling) }

            ul.classList.remove('so0', 'so1', 'so2', 'so3')
            ul.classList.add('so' + vitri)


        }

    }

})