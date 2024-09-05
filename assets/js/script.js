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

// HOROSCROPE PAGE:- LUCKY ITEMS FOR YOU
$(document).ready(function () {
  // Initially hide all descriptions except the active one
  $(".lucky-description").hide();
  $(".love-description").show(); // Show 'love' content by default

  // by default background and color set on love box
  $(".love").css({
    "background-color": "#f00", // Red background for love
    color: "#fff", // White text for love
    border: "2px solid #f00", // Optional: red border for love
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
        "background-color": "#f00", // Red background for love
        color: "#fff", // White text for love
      });
    } else if (item === "health") {
      $(this).css({
        "background-color": "#454545", // Green background for health
        color: "#fff", // White text for health
      });
      $(".lucky-item-decription").css({
        border: "1px solid #454545",
      });
    } else if (item === "career") {
      $(this).css({
        "background-color": "#fd7e14", // Yellow background for career
        color: "#fff", // Black text for career
      });
      $(".lucky-item-decription").css({
        border: "1px solid #fd7e14",
      });
    } else if (item === "emotion") {
      $(this).css({
        "background-color": "#ffcc33", // Blue background for emotion
        color: "#fff", // White text for emotion
      });
      $(".lucky-item-decription").css({
        border: "1px solid #ffcc33",
      });
    } else if (item === "travel") {
      $(this).css({
        "background-color": "#258f01", // Gray background for travel
        color: "#fff", // White text for travel
      });
      $(".lucky-item-decription").css({
        border: "1px solid #258f01",
      });
    }
  });
});
