function fullPage() {
    $("#js-fullpage").fullpage({
        easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        scrollingSpeed: 1e3,
        anchors: ["top", "projects", "about", "contact"],
        navigation: !0,
        navigationPosition: "left",
        animateAnchor: !1,
        onLeave: function(index, nextIndex, direction) {
          let indexPlus= index.index + 1;
          let nextIndexPlus = nextIndex.index + 1;
          if (1 == indexPlus)
          anime({
            targets: ".scrollDown",
            translateY: "180%",
            duration: 500,
            easing: "easeInOutCubic"
          });
          if( 1 == nextIndexPlus)
          anime({
            targets: ".scrollDown",
            translateY: ["180%", 0],
            duration: 500,
            easing: "easeInOutCubic"
          });
          if (0 == state) {
            var nextClass = ".fp-section-" + nextIndexPlus;
            anime.timeline().add({
              targets: nextClass + " .image",
              scale: [.85, 1],
              translateX: ["10%", 0],
              translateZ: 0,
              easing: "easeOutCubic",
              duration: 1500,
              delay: 500
            }).add({
              targets: nextClass + " .image_cover",
              translateX: [0, "110%"],
              translateZ: 0,
              easing: "easeInOutQuart",
              duration: function(el, i) {
                return 1200 - 200 * i
              },
              offset: "-=1700"
            }).add({
              targets: nextClass + " .page-num p",
              translateY: ["100%", 0],
              translateZ: 0,
              easing: "easeInOutCubic",
              duration: 1e3,
              offset: "-=1200"
            }).add({
              targets: nextClass + " .js-letter",
              translateX: ["-105%", 0],
              translateZ: 0,
              easing: "easeInOutCubic",
              duration: 800,
              delay: function(el, i) {
                        return 50 * i
                      },
              offset: "-=1500"
            });
            if (1 == indexPlus)
            anime({
              targets: ".js-ship",
              translateX: [0, "100%"],
              translateZ: 0,
              opacity: [1, 0],
              easing: "easeOutCubic",
              duration: 800,
              delay: function(el, i) {
                return 50 * i
              }
            })
            if(1 == nextIndexPlus)
            anime({
              targets: ".js-ship",
              translateX: ["100%", 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutCubic",
              duration: 800,
              delay: function(a, t) {
                return 500 + 50 * t
              }
            })
          }
        },
        afterLoad: function(anchor, index) {},
        afterRender: function() {
            $(".section").each(function(i) {
                var num = i + 1;
                $(this).addClass("fp-section-" + num)
            })
        }
    })
}

function headerColor() {
    const pageName = $(".barba-container").attr("data-namespace");
    $(window).on("scroll", function() {
        "top" !== pageName && $(window).scrollTop() > $(window).height() ? ($("header").addClass("js-color"), $(".back-arrow").addClass("js-color")) : ($("header").removeClass("js-color"), $(".back-arrow").removeClass("js-color"))
    })
}
$('<img src="../img/bay.jpg">'),
$('<img src="../img/brush.jpg">'),
$('<img src="../img/purp.jpg">'),
$(window).on("load", function() {
    anime.timeline().add({
        targets: ".loader",
        translateY: [0, "-100%"],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        complete: function() {
            $(".loader").addClass(".js-hidden")
        }
    }).add({
        targets: ".js-ship",
        translateX: ["100%", 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutCubic",
        duration: 800,
        delay: function(el, i) {
            return 500 + 50 * i
        },
        offset: "-=1000"
    }).add({
        targets: ".active .js-letter",
        translateX: ["-105%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        delay: function(el, i) {
            return 50 * i
        },
        offset: "-=1200"
    })
});
var $win = $(window),
    fpnav = {},
    image = {},
    imageBig = {},
    isSp = !1;
$(function() {
    $win.on("load resize", function() {
        isSp = !0, fpnav = {
            y: "100%)",
            x: 0
        }, image = {
            width: "80%",
            height: "55.633%",
            top: "9.859%",
            marginRight: "10%",
            marginLeft: "10%"
        }, imageBig = {
            width: "100%",
            height: "65.492%",
            top: 0,
            marginLeft: 0
        }, console.log("sp" + isSp), window.matchMedia("(min-width: 801px)").matches ? (isSp = !1, fpnav = {
            y: 0,
            x: "-100%"
        }, image = {
            width: "53.125%",
            height: "74.81%",
            top: "auto",
            marginRight: "8%",
            marginLeft: "auto"
        }, imageBig = {
            width: "60.677%",
            height: "100vh",
            marginLeft: "auto",
            top: "auto"
        }, console.log("pc" + isSp)) : window.matchMedia("(min-width: 421px)").matches && (isSp = !1, fpnav = {
            y: "100%",
            x: 0
        }, image = {
            width: "53.125%",
            height: "74.81%",
            marginRight: 40,
            marginLeft: "auto"
        }, imageBig = {
            width: "60.677%",
            height: "100vh",
            top: "auto",
            marginLeft: "auto"
        }, console.log("tb" + isSp))
    })
}), Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck, Barba.Pjax.preventCheck = function(a, t) {
    return !!($(t).attr("href") && -1 < $(t).attr("href").indexOf("#")) || Barba.Pjax.originalPreventCheck(a, t)
};
var state = 0;
Barba.Dispatcher.on("newPageReady", function() {
    $("#js-fullpage").length && new Parallax($(".js-parallax-mtn").get(0)); isSp && $(".page-top").height($(window).height())
}), $(function() {
    fullPage();
    const a = $(window).height();
    $(".js-menuBtn").on("click", function() {
        $(".menuIcon").toggleClass("js-menuOpen"), $(".navigation").toggleClass("js-open"), $(window).scrollTop() > a && $("header").toggleClass("js-color"), $(this).hasClass("js-menuOpen") ? (console.log("curation"), Barba.Pjax.getTransition = function() {
            return PageTransitionCurtain
        }) : $("#js-fullpage").length ? (console.log("top"), Barba.Pjax.getTransition = function() {
            return PageTransitionTop
        }) : (console.log("under"), Barba.Pjax.getTransition = function() {
            return PageTransitionUnder
        })
    })
});
const topTransition = Barba.BaseView.extend({
    namespace: "top",
    onEnter: function() {
        Barba.Pjax.getTransition = function() {
            return PageTransitionTop
        }, $(".js-contact").on("click", function() {
            $(".menuIcon").removeClass("js-menuOpen"), $(".navigation").removeClass("js-open"), $.fn.fullpage.moveTo("contact"), Barba.Pjax.getTransition = function() {
                return PageTransitionTop
            }
        })
    },
    onEnterCompleted: function() {},
    onLeave: function() {},
    onLeaveCompleted: function() {
        $.fn.fullpage.destroy("all")
    }
});
topTransition.init();
const underLayer = Barba.BaseView.extend({
    namespace: "underlayer",
    onEnter: function() {
        Barba.Pjax.getTransition = function() {
            return PageTransitionUnder
        }, $(window).scroll(function() {
            $(".js-scroll").each(function(a) {
                $(window).scrollTop() + $(window).height() > $(this).offset().top && $(this).addClass("in")
            })
        }), isSp && $(".page-top").height($(window).height()), console.log(isSp)
    },
    onEnterCompleted: function() {
        headerColor(), anime.timeline({
            duration: 500,
            easing: "easeInOutCubic"
        }).add({
            targets: ".btn-wrap",
            translateY: ["110%", 0]
        }).add({
            targets: ".back-arrow svg",
            translateX: ["100%", 0],
            offset: "-=500"
        })
    },
    OnLeave: function() {
        state = 1, anime.timeline({
            duration: 500,
            easing: "easeInOutCubic"
        }).add({
            targets: ".btn-wrap",
            translateY: [0, "110%"]
        }).add({
            targets: ".back-arrow svg",
            translateX: [0, "-100%"],
            offset: "-=500"
        })
    },
    onLeaveCompleted: function() {
        fullPage(), state = 0, anime.timeline({
            duration: 500,
            easing: "easeInOutCubic"
        }).add({
            targets: ".active .page-num p",
            translateY: ["100%", 0],
            translateZ: 0
        }).add({
            targets: "#fp-nav ul",
            translateY: [fpnav.y, 0],
            translateX: [fpnav.x, 0],
            translateZ: 0,
            offset: "-=500"
        }).add({
            targets: ".fullpage_slide",
            background: ["#020b16", "rgba(0,0,0,0)"],
            offset: "-=500"
        }).add({
            targets: ".active .btn-wrap",
            translateY: ["110%", 0],
            translateZ: 0,
            offset: "-=500"
        })
    }
});
underLayer.init();
const PageTransitionTop = Barba.BaseTransition.extend({
        start: function() {
            this.open().then(this.newContainerLoading).then(this.finish.bind(this))
        },
        open: function() {
            return new Promise(function(a) {
                anime.timeline({
                    duration: 500,
                    easing: "easeInOutCubic",
                    complete: function() {
                        a()
                    }
                }).add({
                    targets: ".active .image",
                    width: [image.width, imageBig.width],
                    height: [image.height, imageBig.height],
                    marginRight: [image.marginRight, 0],
                    marginLeft: [image.marginLeft, imageBig.marginLeft],
                    top: [image.top, imageBig.top]
                }).add({
                    targets: ".fullpage_slide",
                    background: ["rgba(0,0,0,0)", "#020b16"],
                    offset: "-=500"
                }).add({
                    targets: ".page-num p",
                    translateY: [0, "100%"],
                    translateZ: 0,
                    offset: "-=500"
                }).add({
                    targets: "#fp-nav ul",
                    translateY: [0, fpnav.y],
                    translateX: [0, fpnav.x],
                    translateZ: 0,
                    offset: "-=500"
                }).add({
                    targets: ".active .btn-wrap",
                    translateY: [0, "110%"],
                    translateZ: 0,
                    offset: "-=500"
                }).play()
            })
        },
        finish: function() {
            this.done()
        }
    }),
    PageTransitionCurtain = Barba.BaseTransition.extend({
        start: function() {
            this.open().then(this.newContainerLoading).then(this.finish.bind(this))
        },
        open: function() {
            return new Promise(function(a) {
                anime({
                    targets: ".curtain",
                    translateY: ["100%", 0],
                    translateZ: 0,
                    duration: 800,
                    easing: "easeInOutCubic",
                    complete: function() {
                        $(".menuIcon").removeClass("js-menuOpen"), $(".navigation").removeClass("js-open"), $("body, html").scrollTop(0), a()
                    }
                })
            })
        },
        finish: function() {
            anime({
                targets: ".curtain",
                translateY: [0, "-100%"],
                translateZ: 0,
                duration: 800,
                easing: "easeInOutCubic"
            }), this.done()
        }
    }),
    PageTransitionUnder = Barba.BaseTransition.extend({
        start: function() {
            this.close().then(this.newContainerLoading).then(this.finish.bind(this))
        },
        close: function() {
            return new Promise(function(a) {
                const t = anime.timeline({
                    duration: 500,
                    easing: "easeInOutCubic",
                    autoplay: !1,
                    complete: function() {
                        a()
                    }
                }).add({
                    targets: ".page-top .image",
                    width: [imageBig.width, image.width],
                    height: [imageBig.height, image.height],
                    marginRight: [0, image.marginRight],
                    marginLeft: [imageBig.marginLeft, image.marginLeft],
                    top: [imageBig.top, image.top]
                });
                0 !== $(window).scrollTop() ? $("body,html").animate({
                    scrollTop: 0
                }, 500, "swing", t.play) : t.play()
            })
        },
        finish: function() {
            this.done()
        }
    });
$(function() {
    Barba.Pjax.start(), Barba.Prefetch.init(), Barba.Utils.xhrTimeout = 1e4
});
