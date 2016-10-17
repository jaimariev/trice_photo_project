$(document).ready(function(){
  function imageSlide() {
   var curDiv = $('#imgDiv div.current');
   var nextDiv = curDiv.next();
   if (nextDiv.length === 0) {
    nextDiv = $('#imgDiv div:first');
  }

   curDiv.removeClass('current').addClass('previous');
   nextDiv.css({ opacity: 0.0 });
   nextDiv.addClass('current');
   nextDiv.animate({ opacity: 1.0 },
            1000,
             function() {
              curDiv.removeClass('previous');
            });
}

   $(function() {
       // create the image rotator
       setInterval(imageSlide, 3000);
   });

});