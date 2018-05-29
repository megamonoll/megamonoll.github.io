$(document).ready(function(){
		$('.slider').slick();
	});
$(document).ready(function(){
		$('.slider-cl').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	});
(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

          $(".acord").click(function(e){
            e.preventDefault();
             if($(this).hasClass('active')){
              $(this).removeClass("active");
              $(this).siblings('.content').slideUp(200);
              $(".acord i").removeClass("fa-minus").addClass("fa-plus");
            }else{
              $(".set > .acord i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".acord").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
            } 

          }) 
            

          
  