

 






document.addEventListener('DOMContentLoaded',function(){
    var nutPhai = document.querySelector('.nuts b.phai')
    var nutTrai = document.querySelector('.nuts b.trai'),
    slides = document.querySelectorAll('.slides ul li');
    var chiSoHienTai = 0,
    soLuongSlide = slides.length;
    var trangThai = 'dangDungYen'

    function xacDinh2SlideVaCD(nutnao){
             if(trangThai == 'dangChuyenDong')
        {
            return false
        };
        trangThai = 'dangChuyenDong'
        var trangThaiHaiCD = 0;
        var phanTuHienTai = slides[chiSoHienTai];

        if(nutnao == 'nutTrai'){
            
            (chiSoHienTai) = (chiSoHienTai > 0)? ( chiSoHienTai - 1) :  (soLuongSlide - 1)
        
}
        else if(nutnao =='nutPhai'){
    
       (chiSoHienTai) = (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : 0
        }
        var phanTuTiepTheo = slides[chiSoHienTai];
// ketthucchuyendong
        var xuLyHienTaiKetThucCD = function () {
            
        this.classList.remove('dangxem');
        this.classList.remove((nutnao =='nutTrai')?('bienMatKhiAnPrev') :('bienMatKhiAnNext'))
        
        trangThaiHaiCD ++;
        
        if(trangThaiHaiCD ==2){trangThai = 'dangDungYen'}
    }
  var xuLyTiepTheoKetThucCD = function () { 
    this.classList.remove((nutnao =='nutTrai')?'diVaoKhiAnPrev' : 'diVaoKhiAnNext')

           
            this.classList.add('dangxem');
            trangThaiHaiCD ++;
           
            trangThai = (trangThaiHaiCD ==2)? 'dangDungYen' : trangThai
     }   
        phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucCD); 
         phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD)
// chuyendong
      
        phanTuHienTai.classList.add((nutnao == 'nutTrai')? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'))
        phanTuTiepTheo.classList.add((nutnao == 'nutTrai')? ( phanTuTiepTheo.classList.add('diVaoKhiAnPrev')):(  phanTuTiepTheo.classList.add('diVaoKhiAnNext')))

    }
 //    nutPhai
    var chuyenSlideChoNutPhai = function(){
        xacDinh2SlideVaCD('nutPhai')}         
       
//   nutTrai
        var chuyenSlideChoNutTrai = function () {
            xacDinh2SlideVaCD('nutTrai') }
          
    nutTrai.addEventListener('click',chuyenSlideChoNutTrai)
    nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
})
