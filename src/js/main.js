$(document).ready(() => {
  $('#tech-btn').click(() => {
    $.scrollify.move('#tech-section');
  });

  $('#projects-btn').click(() => {
    $.scrollify.move('#projects-section');
  });
});
