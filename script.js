$('.proj2').hide();
$('.proj3').hide();
$('.proj4').hide();
$('.proj5').hide();

$(".proj1").on('click', function(event) {
  event.preventDefault();
  $('.container').css({'transform':'rotate(180deg)'});
  setTimeout(function() {
    $('.slide').addClass('go');
  }, 600);
  setTimeout(function() {
    $('.slide').addClass('bounce');
  }, 1200);
  setTimeout(function() {
    $('.return').addClass('btnFall');
  }, 1200);
});

$('.return').on('click', function(event) {
  event.preventDefault();
  $('.container').css({'transform':'rotate(0deg)'});
  setTimeout(function() {
    $('.slide').removeClass('go');
    $('.slide').removeClass('bounce');
    $('.return').removeClass('btnFall');
    $('.proj1').hide();
    $('.proj2').show();
  }, 600);
});

$(".proj2").on('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    $('.stageLeft').addClass('go2');
  }, 600);
  setTimeout(function() {
    $('.stageLeft').addClass('bounce2');
  }, 1200);
});