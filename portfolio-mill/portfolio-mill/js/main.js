
$(function(){
  //포트폴리오 슬라이드
  
$('.worksSlide').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
//works navi
$('.works_navi').click(function(e){
  e.preventDefault();
  let current=$(this).attr('data-name');
  $('.worksView').removeClass('on');
  $('#' + current).addClass('on');
});

//팝업
$('.post').click(function(e){
  e.preventDefault();
  let current=$(this).attr('data-id');
  $('#' + current).addClass('on');
});
$('.popUp button').click(function(){
  $('.popUp').removeClass('on');
});

});//ready

