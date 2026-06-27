/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Set the theme on page load
  var setTheme = function (theme) {
    const localTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let use_theme = theme || localTheme;
    if (!use_theme) {
      // If no local preference set, default to system preference, then default config attribute
      use_theme = systemPrefersDark ? "dark" : ($("html").attr("data-theme") || "light");
    }

    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else {
      $("html").attr("data-theme", "light");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  }
  setTheme();

  // Listen for system theme changes if user has no manual override
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) {
        setTheme();
      }
    });
  }

  // Toggle the theme
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  }
  $('#theme-toggle').on('click', function () {
    toggleTheme();
  });

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

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

  // Initialize Topographic Grid Background
  initTopoGrid();

});

/* ==========================================================================
   Interactive Topographic Grid (⚡ OVERDRIVE)
   ========================================================================== */
function initTopoGrid() {
  const canvas = document.getElementById('topo-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Grid points spacing & warping parameters
  const spacing = 50;
  const warpRadius = 180;
  const maxDisplacement = 25; // max pixels a point can warp

  // Spring physics variables for mouse lag
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Smooth mouse position with easing
    if (mouse.active) {
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
    } else {
      mouse.x += (-1000 - mouse.x) * 0.1;
      mouse.y += (-1000 - mouse.y) * 0.1;
    }

    const cols = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;

    const points = [];
    for (let r = 0; r < rows; r++) {
      points[r] = [];
      const posY = (r - 1) * spacing;
      for (let c = 0; c < cols; c++) {
        const posX = (c - 1) * spacing;

        let x = posX;
        let y = posY;

        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < warpRadius) {
          const force = (1 - dist / warpRadius);
          const angle = Math.atan2(dy, dx);
          x += Math.cos(angle) * force * maxDisplacement;
          y += Math.sin(angle) * force * maxDisplacement;
        }

        points[r][c] = { x, y };
      }
    }

    // Draw grid lines
    ctx.beginPath();
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.strokeStyle = isDark ? 'rgba(61, 72, 77, 0.22)' : 'rgba(189, 193, 196, 0.22)';
    ctx.lineWidth = 0.5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const p = points[r][c];

        if (c < cols - 1) {
          const pRight = points[r][c + 1];
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pRight.x, pRight.y);
        }

        if (r < rows - 1) {
          const pBottom = points[r + 1][c];
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pBottom.x, pBottom.y);
        }
      }
    }
    ctx.stroke();

    // Draw crosshair markers (+) at intersections
    ctx.beginPath();
    ctx.strokeStyle = isDark ? 'rgba(133, 146, 137, 0.12)' : 'rgba(122, 130, 136, 0.12)';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const p = points[r][c];
        ctx.moveTo(p.x - 3, p.y); ctx.lineTo(p.x + 3, p.y);
        ctx.moveTo(p.x, p.y - 3); ctx.lineTo(p.x, p.y + 3);
      }
    }
    ctx.stroke();

    // Draw contour rings and GPS readings
    if (mouse.active && mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
      ctx.strokeStyle = isDark ? 'rgba(167, 192, 128, 0.08)' : 'rgba(82, 173, 200, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, i * 45, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = isDark ? 'rgba(167, 192, 128, 0.65)' : 'rgba(47, 127, 147, 0.65)';
      ctx.font = '9px monospace';
      
      const mockLat = (51.5221 - (mouse.y / height) * 0.01).toFixed(5);
      const mockLon = (-0.1299 + (mouse.x / width) * 0.02).toFixed(5);
      
      ctx.fillText(`LAT: ${mockLat}° N`, mouse.x + 15, mouse.y - 15);
      ctx.fillText(`LON: ${mockLon}° W`, mouse.x + 15, mouse.y - 5);
      
      ctx.strokeStyle = isDark ? 'rgba(167, 192, 128, 0.22)' : 'rgba(82, 173, 200, 0.22)';
      ctx.beginPath();
      ctx.moveTo(mouse.x - 10, mouse.y); ctx.lineTo(mouse.x + 10, mouse.y);
      ctx.moveTo(mouse.x, mouse.y - 10); ctx.lineTo(mouse.x, mouse.y + 10);
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  // Handle prefers-reduced-motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionQuery.matches) {
    requestAnimationFrame(draw);
  } else {
    drawStaticGrid();
  }

  function drawStaticGrid() {
    ctx.clearRect(0, 0, width, height);
    const cols = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;
    ctx.beginPath();
    ctx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? 'rgba(61, 72, 77, 0.15)' : 'rgba(189, 193, 196, 0.15)';
    ctx.lineWidth = 0.5;
    for (let r = 0; r < rows; r++) {
      const y = (r - 1) * spacing;
      for (let c = 0; c < cols; c++) {
        const x = (c - 1) * spacing;
        if (c < cols - 1) {
          ctx.moveTo(x, y); ctx.lineTo(x + spacing, y);
        }
        if (r < rows - 1) {
          ctx.moveTo(x, y); ctx.lineTo(x, y + spacing);
        }
      }
    }
    ctx.stroke();
  }
}
