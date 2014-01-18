$(document).ready(function(){
  $('.parallax').scrolly({bgParallax: true});
  var topMenu = $(".main-menu"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     // Set/remove active class
     menuItems
       .parent().removeClass("active")
       .end().filter("[href=#"+id+"]").parent().addClass("active");
  });
  $('.flexslider').flexslider({
    animationLoop: true,
    animation: "fade", 
    easing: "swing", 
    direction: "horizontal",
    slideshow: true,
    startAt: 0,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    initDelay: 0,
    prevText: "",
    nextText: ""
  });

  $(".contact-form-button button").click(function(){
    var email = $.trim($(".contact-form-input input").val());
    var message = $.trim($(".contact-form-textarea textarea").val());
    if(email != "" && message != ""){
      $.ajax({
        type: "POST",
        url: "http://localhost/dzokica/contact.php",
        data: {
          email: email,
          message: message
        },
        success: function(data){
          $(".contact-form-info").html(data);
          $(".contact-form-input input").val("")
          $(".contact-form-textarea textarea").val("")
        }
      });
    }
  });

});
