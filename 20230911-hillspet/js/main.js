$(function(){
  $('#banner a').click(function(){
    var btn = $(this).attr('href');
    var por = $(btn).offset();
    $('html,body').animate({scrollTop:por.top},1000);
  });
  $('#gotop').click(function(){
    $('html,body').animate({
      scrollTop:0},1000);
  });
  $(window).scroll(function(){
  if($(this).scrollTop()){
    $('#gotop').stop().fadeTo('fast',.65);
  } else {
    $('#gotop').stop().fadeOut('slow');
  }
  });
});

const mySwiper = new Swiper ('.swiper', {
  loop: true, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2000,
  
});   