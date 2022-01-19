document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementsByClassName('icon');
    var hienthi = document.getElementsByClassName('hienthi')

    for (let i = 0; i < icon.length; i++) {
        icon[i].onclick = function () {
            if (this.classList[1] == 'white') {
                console.log('xu ly');
                this.classList.remove('white')
                x = this.getAttribute('data-hienlen')
                y = document.getElementById(x)
                y.classList.remove('ra')
            }
            else {
                for (let i = 0; i < icon.length; i++) {
                    icon[i].classList.remove('white')

                }
                this.classList.toggle('white');


                x = this.getAttribute('data-hienlen')
                y = document.getElementById(x)
                for (let i = 0; i < hienthi.length; i++) {
                    hienthi[i].classList.remove('ra')

                }
                y.classList.toggle('ra')
                // y.classList.toggle('ra')
            }



        }

    }
}, false)