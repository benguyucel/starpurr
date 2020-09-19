$(document).ready(function() {
  var searchArea = $(".form-search-area").hide();

  var gosterge = 0;
  $(".search-button").click(function(elem) {
    var el = $(".search-text").val();
    gosterge++;
    if (!el) {
      if (gosterge % 2 == 0) {
        searchArea.hide(10010)
      } else {
        searchArea.show(2000)
      }
    } else {
      $(".search-button").removeAttr("type").attr("type", "submit");
    }
  })

  ///add opacity
  $(".overlay-con").hover(function() {
    $(this).siblings(".overlay").css({
      "opacity": ".5"
    });
  }, function() {
    $(this).siblings(".overlay").css({
      "opacity": "0"
    });
  })

  //Load More for Sample works

  $("#sample-works .col-lg-2").slice(0, 12).show();
  $(".view-link").click(function(e) {
    e.preventDefault();
    $("#sample-works .col-lg-2:hidden").slice(0, 12).show(1000);
    if ($("#sample-works .col-lg-2:hidden").length == 0) {
      $(".view-link").css({
        "display": "none"
      });
    }
  })
  //Owl Carousel
  var owl = $(".owl-carousel.team-member-slider").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    navigation: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      375: {
        items: 1,
        navs: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });
  //Team Memeber sLiders
  $('#team-members .button-next').click(function(e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('#team-members .button-prev').click(function(e) {
    e.preventDefault();
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
  $("#team-members .owl-nav").css({
    "display": "none"
  });
  //Team Memeber sLiders
  //Quotes sLiders

  const quotes = $(".owl-carousel.quotes-slider-area").owlCarousel({
    items: 1
  });
  $("#quotes .button-next").click(function(e) {
    quotes.trigger('next.owl.carousel', [500]);
  })
  $("#quotes .button-prev").click(function(e) {
    quotes.trigger('prev.owl.carousel', [500]);
  })
  //Quotes sLiders

  //Clients Sliders
  const clientsSlider = $(".owl-carousel.clients-slider").owlCarousel({
    items: 4,
    margin: 30,
    responsiveClass:true,
    navigation: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
          margin:0
      },
      300: {
        items: 1,
        navs: false,
        margin:0
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });
  $("#clients .button-next").click(function(e) {
    clientsSlider.trigger('next.owl.carousel', [500]);
  })
  $("#clients .button-prev").click(function(e) {
    clientsSlider.trigger('prev.owl.carousel', [500]);
  })

  //Clients Sliders

  //Real cheap Prices
  const priceSlider = $(".owl-carousel.real-prices-slider").owlCarousel({
    items: 4,
    margin:33,
    navs:false
  });
});


// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
});
