/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Set the theme on page load
  var setTheme = function (theme) {
    const localTheme = localStorage.getItem("theme");
    
    let use_theme = theme || localTheme;
    if (!use_theme) {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        use_theme = "dark";
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        use_theme = "light";
      } else {
        use_theme = document.documentElement.getAttribute("data-theme") || "light";
      }
    }

    console.log("[Theme System] Setting theme to:", use_theme);
    document.documentElement.setAttribute("data-theme", use_theme);

    const icon = document.getElementById("theme-icon");
    if (icon) {
      if (use_theme === "dark") {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }

    const themeBtn = document.querySelector("#theme-toggle a");
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(use_theme === "dark"));
    }
  }
  setTheme();

  // Listen for system theme changes if user has no manual override (cross-browser safe)
  if (window.matchMedia) {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = function () {
        if (!localStorage.getItem("theme")) {
          console.log("[Theme System] System color preference changed");
          setTheme();
        }
      };
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handler);
      }
    } catch (e) {
      console.warn("[Theme System] Failed to bind preference listener:", e);
    }
  }

  // Toggle the theme
  var toggleTheme = function () {
    const current_theme = document.documentElement.getAttribute("data-theme") || "light";
    const new_theme = current_theme === "dark" ? "light" : "dark";
    console.log("[Theme System] User toggling theme from", current_theme, "to", new_theme);
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  }
  $('#theme-toggle').on('click', function (e) {
    e.preventDefault();
    toggleTheme();
  });

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  };

  bumpIt();

  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(bumpIt, 150);
  });

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({ offset: -65 });

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
