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
//
//
//
//
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
//
//
//
//
//========== FUNCTION FOR CATEGORIES SHOW ACRRODING TO THE NAV CATEGORY ITEMS:-BLOG PAGE=======
$(document).ready(function () {
  $(".category-description").hide().eq(0).show();

  $(".category").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow"); //onclick at category nav links scroll on the top
    if ($(window).width() <= 500) {
      $(".category-nav-items").fadeOut();
    }

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
//
//
//
//
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
//
//
//
//
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
//
//
//
//
//====== FUNCITON FOR MULIT LEVEL FORM IN CONSULTANT PAGE=====
/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
  /**
   * Hide all form steps.
   */
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });
  /**
   * Mark all form steps as unfinished.
   */
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove(
      "form-stepper-active",
      "form-stepper-completed"
    );
  });
  /**
   * Show the current form step (as passed to the function).
   */
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  /**
   * Select the form step circle (progress bar).
   */
  const formStepCircle = document.querySelector(
    'li[step="' + stepNumber + '"]'
  );
  /**
   * Mark the current form step as active.
   */
  formStepCircle.classList.remove(
    "form-stepper-unfinished",
    "form-stepper-completed"
  );
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + index + '"]');
    /**
     * Check if the element exist. If yes, then proceed.
     */
    if (formStepCircle) {
      /**
       * Mark the form step as completed.
       */
      formStepCircle.classList.remove(
        "form-stepper-unfinished",
        "form-stepper-active"
      );
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document
  .querySelectorAll(".btn-navigate-form-step")
  .forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
      /**
       * Get the value of the step.
       */
      const stepNumber = parseInt(
        formNavigationBtn.getAttribute("step_number")
      );
      /**
       * Call the function to navigate to the target form step.
       */
      navigateToFormStep(stepNumber);
    });
  });
//====== FUNCITON FOR MULIT LEVEL FORM IN CONSULTANT PAGE ============
//
//
//
//
// IN BLOG PAGE 'category-nav-items' WILL BE HIDE IN MOBILE ONLY (PAGE BLOG)
$(document).ready(function () {
  $(".bi-list").click(function () {
    $(".category-nav-items").fadeToggle();
  });
});
//
//
//
//
//
//
//
// ===========Log in sign up form
let flag = 0;

$("#name").hide();
$("#confirmPass").hide();
$(".signin").on("click", function () {
  if (flag == 0) {
    $(".move").addClass("moving");
    $(".move").removeClass("start");

    $(".form").addClass("movingForm");
    $(".form").removeClass("startForm");

    $(".hello").show();
    $(".welcome").hide();

    $(".move").css("background-position", "right");

    setTimeout(function () {
      $(".title").text("Register Here");
      $(".light").text("Or use your email account");
      $(".name").hide();
      $(".p-button").text("LOG IN");
      $(".b-button").text("SIGN UP");
      $(".forgot").show();
      $(".form").css("border-radius", "10px 0px 0px 10px");
      $(".move").css("border-radius", "0px 10px 10px 0px");
      $("#name").show();
      $("#confirmPass").show();
      $(".icons ").css("marginBottom", "10px");
      $(".form-logo ").css("left", "0");
    }, 200);

    flag = 1;
  } else {
    $(".move").removeClass("moving");
    $(".move").addClass("start");

    $(".form").removeClass("movingForm");
    $(".form").addClass("startForm");

    $(".hello").hide();
    $(".welcome").show();

    $(".move").css("background-position", "left");

    setTimeout(function () {
      $(".title").text("Login Form");
      $(".light").text("Or use your email for registration");
      $(".name").show();
      $(".p-button").text("SIGN UP");
      $(".b-button").text("LOG IN");
      $(".forgot").hide();
      $(".form").css("border-radius", "0px 10px 10px 0px");
      $(".move").css("border-radius", "10px 0px 0px 10px");
      $(".icons ").css("marginBottom", "3rem");
      $("#name").hide();
      $("#confirmPass").hide();
      $(".form-logo ").css("left", "");
    }, 200);

    flag = 0;
  }
});
// ===========Log in sign up form

$(".kundali-result-page .category").on("click", function () {
  $(".category").removeClass("active-orange");
  $(this).addClass("active-orange");
});

// =========JS FOR MULTI LEVEL DROPDOWN NAVBAR==========
document.querySelectorAll(".dropdown-submenu > a").forEach(function (element) {
  element.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let submenu = this.nextElementSibling;
    if (submenu) {
      submenu.classList.toggle("show");
    }
  });
});
