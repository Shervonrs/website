
$(document).ready(function(){
  var scene =$('.js-parallax-mtn')[0];
  var parallax = new Parallax(scene, {
    relativeInput: true
  })
})

var fullPageInstance = new fullpage('.fullpage', {
    navigation: true,
});

$(document).ready(function (){
  $('.fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  });
  // methods
  $.fn.fullpage.setAllowScrolling(true);
});
