
$(function(){
  $('.aboutMe p').eq(1).click(function(){
    $('.about').animate({bottom:'-70px'},500);
  });
  //메인화면 글자 체인지
  const hashtag = ["성실한","끈기있는","노력하는","호기심이 많은","발전하는","도움이 되는"];

		const randomHashtag= setInterval(function() {
				const num = Math.floor(Math.random() * hashtag.length);
        $('.intro span').text(hashtag[num]);
	},1000);
  
  //포트폴리오 슬라이드
  
$('.worksSlide').slick({
  centerMode: true,
  centerPadding: '20px',
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
$('.worksList li').click(function(e){
  e.preventDefault();
  $('.worksList li').removeClass('active');
  let current=$(this).addClass('active')
});
$('.works_navi').click(function(){
  $('.click').removeClass('on');
})
$('.worksList-1').click(function(){
  $('.click').addClass('on');
})
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

