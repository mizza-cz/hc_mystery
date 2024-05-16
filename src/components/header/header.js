$(document).ready(function () {
  $(".nav-item.dropdown").hover(
    function () {
      $(this).addClass("open");
    },

    function () {
      $(this).removeClass("open");
    }
  );

  $("#show-menu").click(function () {
    $("body").removeClass("show-aside");
    $("body").toggleClass("show-menu");
  });

  $("#show-aside").click(function () {
    $("body").removeClass("show-menu");
    $("body").toggleClass("show-aside");
  });

  $(".dark-page").click(function () {
    $("body").removeClass("show-aside");
    $("body").removeClass("show-menu");
  });

  $("table.nice").addClass("table");

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  $("#show-roster").click(function (e) {
    e.preventDefault();
    $("#roster-text").toggleClass("hidden");
    $(this).hide();
  });

  $(".select-nav select")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".roster-list")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".roster-list").hide();
          }
        });
    })
    .change();

  $(".topstories").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".topstories-nav",
    prevArrow: '<div class="arrow-left"></div>',
    nextArrow: '<div class="arrow-right"></div>',
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".topstories-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".topstories",
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(function () {
    $(".hp-socials .masonry .item")
      .slice(0, 7)
      .show()
      .css("display", "inline-block");

    $("#loadMoreSocials").on("click", function (e) {
      e.preventDefault();
      $(".hp-socials .masonry .item:hidden")
        .slice(0, 4)
        .slideDown()
        .css("display", "inline-block");
      if ($(".hp-socials .masonry .item:hidden").length == 0) {
        $("#loadMoreSocials").fadeOut("slow");
      }
    });
  });

  // endregion

  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

// ------------------------------------------ funkce pro otevirani novych oken
function okno(soubor) {
  window.open(
    soubor,
    "",
    "toolbar=yes,scrollbars=yes,location=yes,status=yes,resizable=1,menubar=yes"
  );
}

// ------------------------------------------ funkce pro zaskrtnuti vsech polozek
function CheckAll(f, el) {
  for (var i = 0; i < f.elements.length; i++) {
    var e = f.elements[i];
    if (e.id == el) e.checked = f.check_all.checked;
  }
}

// ------------------------------------------ funkce pro presun z formularoveho prvku SELECT
function jdi_na() {
  location = document.skoc.go.options[document.skoc.go.selectedIndex].value;
}

// ------------------------------------------ funkce pro pridani mezi oblibene
function addBookmark(title, url) {
  if (window.sidebar) {
    window.sidebar.addPanel(title, url, "");
  } else if (document.all) {
    window.external.AddFavorite(url, title);
  } else if (window.opera && window.print) {
    return true;
  }
}

// ------------------------------------------ funkce pro pridani smajliku do fora
function insert_smile(type) {
  document.getElementById("cely_text").value =
    document.getElementById("cely_text").value + " " + type + " ";
}

// ------------------------------------------ zmeni tridu (class) objektu s danym ID
function ZmenTridu(trida, id) {
  document.getElementById(id).className = trida;
}

function online(id) {
  window.open(
    "http://www.onlajny.cz/match/index/id/" + id + "",
    "",
    "toolbar=no,scrollbars=yes,location=no,status=yes,width=790,height=530,resizable=1"
  );
}

function online_zap(id) {
  window.open(
    "http://www.onlajny.cz/match/index/id/" + id + "",
    "",
    "toolbar=no,scrollbars=yes,location=no,status=no,width=790,height=590,resizable=1"
  );
}
