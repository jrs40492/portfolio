$(document).ready(() => {
  $('.scroll-btn').click((e) => {
    const target = $(e.target);
    scrollTo(target.data('id'));
  });
});

const scrollTo = (element) => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`#${element}`).offset().top
  }, 1000);
};
