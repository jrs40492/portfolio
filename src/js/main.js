$(document).ready(() => {
  $('.scroll-btn').click((e) => {
    const target = $(e.target);
    const elementId = target.data('id');

    $('html, body').animate({
      scrollTop: $(`#${elementId}`).offset().top
    }, 1000);
  });
});
