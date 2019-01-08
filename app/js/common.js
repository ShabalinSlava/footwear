$(function() {
  // $("#shopping-cart-button").click(function(event) {
  //   $("#shopping-cart").addClass("visible");
  // });
  //
  // $(".like-btn").on("click", function() {
  //   $(this).toggleClass("is-active");
  // });
  //
  // $('.minus-btn').on('click', function(e) {
  //     e.preventDefault();
  //     var $this = $(this);
  //     var $input = $this.closest('div').find('input');
  //     var value = parseInt($input.val());
  //
  //     if (value &amp;gt; 1) {
  //         value = value - 1;
  //     } else {
  //         value = 0;
  //     }
  //
  //   $input.val(value);
  //
  // });
  //
  // $('.plus-btn').on('click', function(e) {
  //     e.preventDefault();
  //     var $this = $(this);
  //     var $input = $this.closest('div').find('input');
  //     var value = parseInt($input.val());
  //
  //     if (value &amp;lt; 100) {
  //         value = value + 1;
  //     } else {
  //         value =100;
  //     }
  //
  //     $input.val(value);
  // });
  //
  // $('#product-size-selection').ready(function() {
  //   $('select').niceSelect();
  // });

  $("#product-size-selection").niceSelect();

  $("#product-description-size-selection").niceSelect();

  $("#menu-button").click(function(event) {
    $("#navigation-menu-container").addClass("visible");
  });

  $("#navigation-close").click(function(event) {
    $("#navigation-menu-container").removeClass("visible");
  });

  $("#search").click(function(event) {
    $("#search-on").addClass("visible");
  });

  $("#search-close-button").click(function(event) {
    $("#search-on").removeClass("visible");
  });

  $("#shopping-cart-button").click(function(event) {
    $("#information").addClass("visible");
  });

  $("#information-close").click(function(event) {
    $("#information").removeClass("visible");
  });

  $("#sing").click(function(event) {
    $("#sing-in").addClass("visible");
  });

  $("#sing-in-close").click(function(event) {
    $("#sing-in").removeClass("visible");
  });
});
