'use stict'
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
$(".js-loader").viewportChecker({
  callbackFunction:function(){
    $('.loader').ClassyLoader({
      width: 200, // width of the loader in pixels
      height: 200, // height of the loader in pixels
      animate: true, // whether to animate the loader or not
      displayOnLoad: true,
      percentage: 80, // percent of the value, between 0 and 100
      speed: 50, // miliseconds between animation cycles, lower value is faster
      roundedLine: true, // whether the line is rounded, in pixels
      showRemaining: true, // how the remaining percentage (100% - percentage)
      fontFamily: 'Helvetica', // name of the font for the percentage
      fontSize: '50px', // size of the percentage font, in pixels
      showText: true, // whether to display the percentage text
      diameter: 90, // diameter of the circle, in pixels
      fontColor: '#404040', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
      lineColor: '#ff9900', // line color of the main circle
      remainingLineColor: '#f2f2f2', // line color of the remaining percentage (if showRemaining is true)
      lineWidth: 20 // the width of the circle line in pixels
      });
  }
  });
$(".js-loader-2").viewportChecker({
  callbackFunction:function(){
    $('.loader-2').ClassyLoader({
      width: 200, // width of the loader in pixels
      height: 200, // height of the loader in pixels
      animate: true, // whether to animate the loader or not
      displayOnLoad: true,
      percentage: 65, // percent of the value, between 0 and 100
      speed: 50, // miliseconds between animation cycles, lower value is faster
      roundedLine: true, // whether the line is rounded, in pixels
      showRemaining: true, // how the remaining percentage (100% - percentage)
      fontFamily: 'Helvetica', // name of the font for the percentage
      fontSize: '50px', // size of the percentage font, in pixels
      showText: true, // whether to display the percentage text
      diameter: 90, // diameter of the circle, in pixels
      fontColor: '#404040', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
      lineColor: '#ff9900', // line color of the main circle
      remainingLineColor: '#f2f2f2', // line color of the remaining percentage (if showRemaining is true)
      lineWidth: 20 // the width of the circle line in pixels
      });
  }
  });
$(".js-loader-3").viewportChecker({
  callbackFunction:function(){
    $('.loader-3').ClassyLoader({
      width: 200, // width of the loader in pixels
      height: 200, // height of the loader in pixels
      animate: true, // whether to animate the loader or not
      displayOnLoad: true,
      percentage: 90, // percent of the value, between 0 and 100
      speed: 50, // miliseconds between animation cycles, lower value is faster
      roundedLine: true, // whether the line is rounded, in pixels
      showRemaining: true, // how the remaining percentage (100% - percentage)
      fontFamily: 'Helvetica', // name of the font for the percentage
      fontSize: '50px', // size of the percentage font, in pixels
      showText: true, // whether to display the percentage text
      diameter: 90, // diameter of the circle, in pixels
      fontColor: '#404040', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
      lineColor: '#ff9900', // line color of the main circle
      remainingLineColor: '#f2f2f2', // line color of the remaining percentage (if showRemaining is true)
      lineWidth: 20 // the width of the circle line in pixels
      });
  }
  });
$(".js-loader-4").viewportChecker({
  callbackFunction:function(){
    $('.loader-4').ClassyLoader({
      width: 200, // width of the loader in pixels
      height: 200, // height of the loader in pixels
      animate: true, // whether to animate the loader or not
      displayOnLoad: true,
      percentage: 75, // percent of the value, between 0 and 100
      speed: 50, // miliseconds between animation cycles, lower value is faster
      roundedLine: true, // whether the line is rounded, in pixels
      showRemaining: true, // how the remaining percentage (100% - percentage)
      fontFamily: 'Helvetica', // name of the font for the percentage
      fontSize: '50px', // size of the percentage font, in pixels
      showText: true, // whether to display the percentage text
      diameter: 90, // diameter of the circle, in pixels
      fontColor: '#404040', // color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla
      lineColor: '#ff9900', // line color of the main circle
      remainingLineColor: '#f2f2f2', // line color of the remaining percentage (if showRemaining is true)
      lineWidth: 20 // the width of the circle line in pixels
      });
  }
  });
