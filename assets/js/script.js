//========= OWL CAROUSEL :- INDEX PAGE =========
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    responsiveClass: true,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="bi bi-chevron-left" aria-hidden="true"></i>',
      '<i class="bi bi-chevron-right" aria-hidden="true"></i>',
    ],
    navContainer: ".home-demo .custom-nav",
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 3,
      },

      1024: {
        items: 4,
      },

      1366: {
        items: 4,
      },
    },
  });
});
//========= OWL CAROUSEL :- INDEX PAGE =========

//========== HOROSCROPE PAGE:- LUCKY ITEMS FOR YOU ==============
$(document).ready(function () {
  // Initially hide all descriptions except the active one
  $(".lucky-description").hide();
  $(".love-description").show();

  // by default background and color set on love box
  $(".love").css({
    "background-color": "#f00",
    color: "#fff",
    border: "2px solid #f00",
  });

  // Click event for each lucky-items-box
  $(".lucky-items-box").click(function () {
    // Get the data-item attribute of the clicked element
    const item = $(this).attr("data-item");

    // Hide all descriptions
    $(".lucky-description").hide();

    // Show the corresponding description based on the data-item attribute
    $(`.lucky-description[data-item='${item}']`).show();

    // Reset CSS for all boxes before applying new styles
    $(".lucky-items-box").css({
      "background-color": "",
      color: "",
    });

    // rest border for all lucky-item-decription
    $(".lucky-item-decription").css({
      border: "",
    });

    // Apply different CSS based on the item
    if (item === "love") {
      $(this).css({
        "background-color": "#f00",
        color: "#fff",
      });
    } else if (item === "health") {
      $(this).css({
        "background-color": "#454545",
        color: "#fff",
      });
      $(".lucky-item-decription").css({
        border: "1px solid #454545",
      });
    } else if (item === "career") {
      $(this).css({
        "background-color": "#fd7e14",
        color: "#fff",
      });
      $(".lucky-item-decription").css({
        border: "1px solid #fd7e14",
      });
    } else if (item === "emotion") {
      $(this).css({
        "background-color": "#ffcc33",
        color: "#fff",
      });
      $(".lucky-item-decription").css({
        border: "1px solid #ffcc33",
      });
    } else if (item === "travel") {
      $(this).css({
        "background-color": "#258f01",
        color: "#fff",
      });
      $(".lucky-item-decription").css({
        border: "1px solid #258f01",
      });
    }
  });
});
//================= HOROSCROPE PAGE:- LUCKY ITEMS FOR YOU ===================

//========== FUNCTION FOR CATEGORIES SHOW ACRRODING TO THE NAV CATEGORY ITEMS:-BLOG PAGE=======
$(document).ready(function () {
  $(".category-description").hide().eq(0).show();

  $(".category").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow"); //onclick at category nav links scroll on the top

    let category = $(this).attr("data-item");
    console.log(category);

    $(".category").removeClass("ms-3");
    $(this).addClass("ms-3");

    $(".category-description").hide();

    $(`.category-description[data-item=${category}]`).fadeIn();
  });
  console.log("ready");
  $(".category").eq(0).addClass("ms-3");
});
//=========== FUNCTION FOR CATEGORIES SHOW ACRRODING TO THE NAV CATEGORY ITEMS:-BLOG PAGE =========

// CHNAGE IMAGES BY CLICKING IN PRODUCT PAGE
$(document).ready(function () {
  $(".product-imgs").click(function () {
    const imgSrc = $(this).attr("src");
    $(".main-showing-img").attr("src", imgSrc);

    // ADDING SHOW CLASS WHERE I CLICKED REST REMOVE
    $(".product-imgs").removeClass("show");
    $(this).addClass("show");
  });
});
// CHNAGE IMAGES BY CLICKING IN PRODUCT PAGE

//FUNCTION FOR READ LESS AND READ MORE IN PRODUCT DETAILS PAGE
$(document).ready(function () {
  $(".more-text").hide();
  $(".readMore-btn").click(function () {
    $(".more-text").toggle();
    const text = $(this).html();
    const down = '<i class="bi bi-chevron-down"></i>';
    const up = '<i class="bi bi-chevron-up"></i>';
    $(".readMore-btn").html(
      text === `Read More ${down}` ? `Read Less ${up}` : `Read More ${down}`
    );
  });
});
//FUNCTION FOR READ LESS AND READ MORE IN PRODUCT DETAILS PAGE
