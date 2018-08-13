function openNav() {

  if($(".site-nav").hasClass("is-open")){
    $(".site-nav").removeClass("is-open");
    $(".site-title").addClass("is-hidden");
  }else{
    $(".site-nav").addClass("is-open");
    $(".site-title").removeClass("is-hidden");
  }

  $(".site-nav_item_contact a").click(function(e){
    e.preventDefault();
    $(".site-nav").removeClass("is-open");
  });

}

function closeNav() {
  if($(".site-nav").hasClass("is-open")){
    $(".site-nav").removeClass("is-open");
    $(".site-title").addClass("is-hidden");
  }else{
    $(".site-nav").addClass("is-open");
    $(".site-title").removeClass("is-hidden");
  }
}


// disqus to japanese
// var disqus_config = function () {
//   this.language = "ja";
// };
// imagegridgallery fullscreen enable
$(document).ready(function(){
  $('#gallery-container').sGallery({
    fullScreenEnabled: true //default is false
  });
});

$(document).ready(function () {
  hsize = $(window).height();
  $(".topimage.for-pc").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $(".topimage.for-pc").css("height", hsize + "px");
});
