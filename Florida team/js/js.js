'use stict'
 $('.skillbar').each(function(){
  $(this).find('.skillbar-bar').animate({
    width:$(this).attr('data-percent')
  }, 2000);
 });

 $('.js-show_hide').click(function(ev){
  ev.preventDefault();
  $('.info-text').find('.js-text-show').toggleClass('now-show');
  if($(this).hasClass('js-show_hide')){
    $(this).removeClass('js-show_hide');
    $(this).html('Less More');
  } else {
    $(this).addClass('js-show_hide');
    $(this).html('Show More');
  }
  
 });