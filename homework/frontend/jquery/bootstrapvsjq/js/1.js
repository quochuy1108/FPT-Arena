$(function () {
   
    $('[data-bs-toggle="popover"]').popover()
    $('[data-bs-toggle="tooltip"]').tooltip()
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.menutren'
      })
});