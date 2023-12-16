// 01. Image to background js
// 02. mobile menu active class js
// 03. Tap to Top js
// 04. Image To Background js
// 05. search box function Js
// 06. Loader Js
// 07. header Dropdown Js
// 08. active class Js
// 09. Scroll down header fix js
// 10. Category Box js
// 11. category box js
// 12. Sidebar Hide & Show Js
// 13. Filter button
// 14. Swiper Slider js
// 15. Search modal
// 16. read more js

(function ($) {
    "use strict";
    /*=====================
    01. Image to background js
    ==========================*/
    $(".bg-top").parent().addClass("b-top");
    $(".bg-bottom").parent().addClass("b-bottom");
    $(".bg-center").parent().addClass("b-center");
    $(".bg-left").parent().addClass("b-left");
    $(".bg-right").parent().addClass("b-right");
    $(".bg_size_content").parent().addClass("b_size_content");
    $(".bg-img").parent().addClass("bg-size");
    $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
    $(".bg-img").each(function () {
        var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
        });

        el.hide();
    });
})(jQuery);

/*=====================
  02. mobile menu active class js
   ==========================*/
$(document).ready(function () {
    $('.mobile-menu ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

/*=====================
  03. Tap to Top js
   ==========================*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

/*=====================
   04. Image To Background Js
   ==========================*/
$(".bg-top").parent().addClass("b-top");
$(".bg-bottom").parent().addClass("b-bottom");
$(".bg-center").parent().addClass("b-center");
$(".bg-left").parent().addClass("b-left");
$(".bg-right").parent().addClass("b-right");
$(".bg_size_content").parent().addClass("b_size_content");
$(".bg-img").parent().addClass("bg-size");
$(".bg-img.blur-up").parent().addClass("blur-up lazyload");
$(".bg-img").each(function () {
    var el = $(this),
        src = el.attr("src"),
        parent = el.parent();

    parent.css({
        "background-image": "url(" + src + ")",
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
        display: "block",
    });

    el.hide();
});

/*=====================
   05. search box function Js
   ==========================*/
$(".search-box").on("click", function () {
    $(this).closest(".rightside-box").find(".search-full").addClass("open");
});
$(window).on("load resize", function () {
    // open searchbox
    $(".search-type").on("click", function () {
        $(this).parents(".search-full").addClass("show");
    });

    // close seach
    $(".close-search").on("click", function () {
        $(this).closest(".rightside-box").find(".search-full").removeClass("open");
    });
});

/*=====================
   06. Loader Js
   ==========================*/
const loaderEl = document.getElementsByClassName("fullpage-loader")[0];
document.addEventListener("readystatechange", (event) => {
    const readyState = "complete";
    if (document.readyState == readyState) {
        loaderEl.classList.add("fullpage-loader--invisible");

        setTimeout(() => {
            loaderEl.parentNode.removeChild(loaderEl);
        }, 100);
    }
});

/*=====================
    07. header Dropdown Js
 ==========================*/
$(".dropdown-menu li a").on('click', function () {
    var a = $(this).closest("a");
    var getSampling = a.text();
    var getImage = a.find('img').attr('src');

    // console.log("src path", getImage);
    $(this).closest(".dropdown-menu").prev('.dropdown-toggle').find('span').text(getSampling);
    $(this).closest(".dropdown-menu").prev('.dropdown-toggle').find('img').attr("src", getImage);
});

/*=====================
   08. active class Js
   ==========================*/
$(".product-packege .select-packege li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
});

/*=====================
   09. Scroll down header fix js
   ==========================*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
});

/*=====================
   10. Category Box js
   ==========================*/
$(".mobile-category").click(function () {
    $(".bg-overlay, .category-dropdown").addClass("show");
});
$(".close-button, .bg-overlay").click(function () {
    $(".bg-overlay, .category-dropdown").removeClass("show");
});

/*=====================
    11. category box js
==========================*/
var contentwidth = $(window).width();
if (contentwidth < "767") {
    $(".onhover-category-list .category-name").append('<span class="according-menu">+</span>');
    $(".category-name").on("click", function () {
        $(".category-name")
            .removeClass("active")
            .find("span")
            .replaceWith('<span class="according-menu">+</span>');
        $(".onhover-category-list .onhover-category-box").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">-</span>');
            $(this).next().slideDown("normal");
        } else {
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
        }
    });
    $(".accordion-box").hide();
}

/*=====================
   12. Sidebar Hide & Show Js
   ==========================*/
$(".navbar-toggler-icon-2").click(function () {
    $(".bg-overlay, .sidebar-col").addClass("show");
});
$(".bg-overlay").click(function () {
    $(".bg-overlay, .sidebar-col").removeClass("show");
});

/*=====================
   13. Filter button
   ==========================*/
$(".sidebar-filter-menu").click(function () {
    if ($(window).width() <= 767){
        $(".mobile-categories").toggleClass("mobile-visible");
    }
});

$(".mobile-categories .back-button").click(function () {
  if ($(window).width() <= 767) {
    $(".mobile-categories").toggleClass("mobile-visible");
  }
});

/*=====================
   14. Swiper slide button
   ==========================*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
    waitForTransition: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=====================
   15. Search modal
   ==========================*/
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*=====================
   16. Read more button
   ==========================*/
function toggleReadMore() {
  var productContain = document.getElementById("productContain");
  productContain.classList.toggle("expanded");

  var readMoreBtn = document.querySelector(".read-more-btn");
  if (productContain.classList.contains("expanded")) {
    readMoreBtn.textContent = "qısalt";
  } else {
    readMoreBtn.textContent = "hamısını oxu";
  }
}

// Check if the content is longer than 200 characters
var content = $(".product-contain p").text();
var readMoreBtn = $(".read-more-btn");

if (content.length > 200) {
  readMoreBtn.css("display", "inline-block");
}
/*=====================
   17. Products category
   ==========================*/
$(document).ready(function () {
  // Hide the image when the dropdown is hovered
  $(".category-dropdown").mouseenter(function () {
    $(".swiper").fadeOut(500);
  });
  // Show the image when the dropdown is not hovered
  $(".category-dropdown").mouseleave(function () {
    $(".swiper").fadeIn(500);
  });
});

//
$(document).ready(function () {
  let timeout;

  $(".sub-dropdown-hover").on("mouseenter", function () {
    clearTimeout(timeout);
    $(this).find(".sub-menu-2").stop(true, true).slideDown();
  });

  $(".sub-dropdown-hover").on("mouseleave", function (e) {
    timeout = setTimeout(() => {
      $(this).find(".sub-menu-2").stop(true, true).slideUp();
    }, 300); // Adjust the delay time (in milliseconds) as needed
  });

  $(".sub-menu-2")
    .on("mouseenter", function () {
      clearTimeout(timeout);
    })
    .on("mouseleave", function () {
      $(this).stop(true, true).slideUp();
    });
});
//

$(document).ready(function () {
  $(".third-dropdown-item").hover(
    function () {
      // On hover in, find and display the immediate sub-menu
      $(this)
        .siblings(".sub-menu.sub-menu-2")
        .addClass("sub-menu-3")
        .removeClass("sub-menu-2");
    },
    function () {
      // On hover out, delay execution and hide the sub-menu
      var $submenu = $(this).siblings(".sub-menu.sub-menu-3");
      setTimeout(function () {
        $submenu.removeClass("sub-menu-3").addClass("sub-menu-2");
      }, 150); // 1 second (1000 milliseconds) delay
    }
  );
});


$(document).ready(function () {
  $(".sub-menu-last").hover(
    function () {
      // On hover in, find and display the immediate sub-menu
      $(this).removeClass("sub-menu-2").addClass("sub-menu-3");
    },
    function () {
      // On hover out, delay execution and hide the sub-menu
      var $submenu = $(this).removeClass("sub-menu-3").addClass("sub-menu-2");
      setTimeout(function () {
        $submenu.removeClass("sub-menu-3").addClass("sub-menu-2");
      }, 150); // 1 second (1000 milliseconds) delay
    }
  );
});