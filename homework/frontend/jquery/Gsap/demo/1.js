$(function () {
  TweenMax.staggerFrom($('.nut'),1,{y:300,opacity:0,ease: "bounce.out"},0.2)
  $('.btn-primary').click(function (e) { 
      e.preventDefault();
      TweenMax.staggerFrom($('.nut'),1,{y:300,opacity:0,ease: "elastic.out(1, 0.3)"},0.2)
  });
  $('.btn-danger').click(function (e) { 
      e.preventDefault();
      TweenMax.from($('.nut'),2,{scale:3,opacity:0,ease: "elastic.out(1, 0.3)"})
  });
});