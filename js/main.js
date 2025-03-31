window.addEventListener("DOMContentLoaded", async function() {
    await new Promise((i) => setTimeout(i, 300));
    try {
        if (void 0 === window.firebase) throw new Error("Firebase SDK not loaded. Please check your internet connection.");
        const i = {
            apiKey: "AIzaSyBVC1ap66bUbaytOqsSSO0KalgUtKN_DR4",
            authDomain: "amenajarigradinisuceava.firebaseapp.com",
            projectId: "amenajarigradinisuceava",
            storageBucket: "amenajarigradinisuceava.firebasestorage.app",
            messagingSenderId: "236913919959",
            appId: "1:236913919959:web:5325e29b0941a63c1bed92",
            measurementId: "G-V3GY5FJ9YV",
        };
        let e, a;
        try {
            e = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(i)
        } catch (i) {
            return void console.error("Firebase initialization error:", i)
        }
        try {
            if (((a = e.analytics()), !a)) throw new Error("Analytics initialization returned null");
        } catch (i) {
            return void console.error("Analytics initialization error:", i)
        }
        a.setAnalyticsCollectionEnabled(!1), (window.firebaseAnalytics = a), window.dispatchEvent(new Event("firebaseReady"));
        const t = new URLSearchParams(window.location.search),
            n = t.get("utm_source") || "direct",
            r = t.get("utm_medium") || "direct";
        let o = Date.now(),
            s = n,
            c = r;
        document.referrer.includes("facebook.com") ? ((s = "facebook"), (c = "social")) : document.referrer.includes("instagram.com") ? ((s = "instagram"), (c = "social")) : document.referrer.includes("google.com") ? ((s = "google"), (c = "search")) : document.referrer.includes("maps.google.com") && ((s = "google_maps"), (c = "referral"));
        let d = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
        window.addEventListener("beforeunload", function() {
            if (!a) return;
            let i = Math.floor((Date.now() - o) / 1e3);
            a.logEvent("page_view", {
                device_type: d,
                timestamp: Date.now(),
                source: s,
                medium: c,
                referrer: document.referrer,
                page: window.location.pathname,
                title: document.title,
                language: navigator.language,
                user_agent: navigator.userAgent,
                duration: i,
            }), a.logEvent("session_end", {
                duration: i
            })
        })
    } catch (i) {
        console.error("Firebase initialization error:", i)
    }
}), $(document).ready(function() {
    lightbox.init(), $(document).on("lightbox:open", function() {
        $(".lb-cancel").remove(), $(".lb-close").remove()
    }), $(document).on("lightbox:close", function() {
        $(".lb-cancel").remove(), $(".lb-close").remove()
    }), $("#whatsapp-button").on("click", function() {
        window.open("https://wa.me/40754895951", "_blank")
    });
    let i = $("#hero-text"),
        e = ["Gazonul înverzește cu noi!", "Creează-ți grădina visurilor."],
        a = 0;
    setInterval(() => {
        i.fadeOut(500, function() {
            (a = (a + 1) % e.length), $(this).text(e[a]).fadeIn(500)
        })
    }, 5e3)
}), window.addEventListener("error", (i) => {
    i.message.includes("WebSocket connection") && i.preventDefault()
}), (function(i) {
    "use strict";
    var e;
    let a;

    function t() {
        let i = Array.from(document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]:checked')).map((i) => i.value);
        document.getElementById("reviewService").value = i.join(", ")
    }

    function n(e) {
        let a = i("#fullscreen-image");
        "left" === e ? (a.addClass("slide-right"), i("#prev-image").click()) : "right" === e && (a.addClass("slide-left"), i("#next-image").click()), a.on("animationend", function() {
            i(this).removeClass("slide-left slide-right")
        })
    }
    setTimeout(function() {
        i("#spinner").length > 0 && (i("#spinner").removeClass("show"), e && e.isotope("layout"))
    }, 1), new WOW().init(), i(window).on("scroll", function() {
        window.innerWidth <= 991 && closeNavbar(), updateNavbarVisibility(), i(this).scrollTop() > 50 ? i(".sticky-top").addClass("shadow-sm scrolled").css("top", "5px") : i(".sticky-top").removeClass("shadow-sm scrolled").css("top", "0"), i(this).scrollTop() > 300 ? i(".back-to-top").fadeIn("slow") : i(".back-to-top").fadeOut("slow")
    }), i(".back-to-top").click(function() {
        return i("html, body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo"), !1
    }), i('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2e3
    }), i("#portfolio-flters .btn").on("click", function() {
        let a = i(this).data("filter");
        i("#portfolio-flters .btn").removeClass("active"), i(this).addClass("active");
        let t = getCategoryImages(a);
        if ((i("#modal-images").empty(), t.forEach((e, a) => {
                i("#modal-images").append(`\n<img src="${e}" \n  class="img-fluid modal-image" \n  alt="Category Image ${a + 1}" \n   data-index="${a}">`)
            }), window.innerWidth <= 991)) {
            let i = document.querySelector(".portfolio-filters"),
                e = this;
            i && e && setTimeout(() => {
                let a = e.offsetLeft - i.clientWidth / 2 + e.offsetWidth / 2;
                i.scrollTo({
                    left: a,
                    behavior: "smooth"
                })
            }, 50)
        }
        e && e.isotope("layout")
    }), $(document).ready(function() {
        $(".service-item .link-btn").each(function() {
            $(this).removeAttr('data-bs-toggle data-bs-target');
            const serviceType = $(this).closest('.service-item').data('service-type');
            $(this).attr('href', `servicii.html#${serviceType}`)
        })
    });
    i("#common-modal").on("show.bs.modal", function() {
        document.body.style.paddingRight = "0px"
    }).on("hidden.bs.modal", function() {
        e && setTimeout(() => {
            e.isotope("layout")
        }, 300), (document.body.style.paddingRight = "0px")
    }), i("#common-modal").on("show.bs.modal", function() {
        a = window.pageYOffset
    }).on("hidden.bs.modal", function() {
        window.scrollTo(0, a)
    }), i(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        items: 1,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']
    }), i(document).ready(function() {
        let e = i("#contact-button"),
            a = i("#contact-popup"),
            t = !1,
            n = 0;

        function r() {
            a.removeClass("show"), e.removeClass("active"), i(".portfolio-item .blur-text, .portfolio-item .buttons").css("opacity", 1)
        }
        e.off(), i(document).off("click.contactPopup touchstart.contactPopup"), i(window).off("scroll.contactPopup"), e.on("click touchstart", function(n) {
            n.preventDefault(), n.stopPropagation(), t || ((t = !0), setTimeout(() => (t = !1), 300), a.hasClass("show") ? r() : (a.addClass("show"), e.addClass("active"), i(".portfolio-item .blur-text, .portfolio-item .buttons").css("opacity", 1)), updateMobileButtonColor())
        }), i(document).on("click touchstart", function(e) {
            !i(e.target).closest("#contact-button, #contact-popup").length && a.hasClass("show") && r()
        }), i(window).on("scroll", function() {
            let e = i(this).scrollTop();
            a.hasClass("show") && Math.abs(e - n) > 5 && r(), (n = e)
        })
    }), i(document).ready(function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            let i = new IntersectionObserver((i) => {
                i.forEach((i) => {
                    i.isIntersecting ? (i.target.classList.add("in-view"), i.target.classList.remove("out-view")) : (i.target.classList.remove("in-view"), i.target.classList.add("out-view"))
                })
            }, {
                threshold: 0.5,
                rootMargin: "-10% 0px"
            });
            document.querySelectorAll(".portfolio-inner").forEach((e) => {
                i.observe(e)
            })
        }
    }), i(document).ready(function() {
        i("#featureCarousel").carousel({
            interval: 3e3,
            ride: "carousel",
            pause: "hover"
        })
    }), i(document).ready(function() {
        function e() {
            let i = document.querySelector("#featureCarousel");
            i && ((function(i) {
                let e = i.getBoundingClientRect();
                return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
            })(i) ? i.classList.add("in-viewport") : i.classList.remove("in-viewport"))
        }
        i(window).on("scroll resize", e), e()
    }), i(document).ready(function() {
        i(".portfolio-container").imagesLoaded(function() {
            i(".portfolio-container").length && ((e = i(".portfolio-container").isotope({
                itemSelector: ".portfolio-item",
                layoutMode: "fitRows",
                initLayout: !0
            })), setTimeout(function() {
                e.isotope("layout")
            }, 100))
        }), i(window).on("resize", function() {
            e && e.isotope("layout")
        }), i('a[data-bs-toggle="tab"]').on("shown.bs.tab", function() {
            e && e.isotope("layout")
        })
    }), i(window).on("scroll", function() {
        i(".portfolio-item").each(function() {
            let e = i(this).offset().top,
                a = e + i(this).outerHeight(),
                t = i(window).scrollTop(),
                n = t + i(window).height();
            a > t && e < n ? i(this).find(".blur-text, .buttons").css("opacity", 1) : i(this).find(".blur-text, .buttons").css("opacity", 0)
        })
    }), i(document).ready(function() {
        let e = 0,
            a = i(".portfolio-item");

        function t() {
            let t = a.eq(e),
                n = t.find(".portfolio-text h4").text(),
                r = t.find(".portfolio-text p").html();
            i("#modalLabel").text(n), i("#modal-content").html(r), (function(e) {
                i("#modal-images").empty();
                let a = {
                    0: ["img/imaginiGradini/Peisagistica/IMG-20250110-WA0015.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0017.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0021.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0004.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0056.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0060.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0001.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0007.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0006.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0067.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0063-1.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0012.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0009.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0007.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0015.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0001.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0018.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0053.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0048.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0046.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0043.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0049.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0035.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0036.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0031.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0008.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0037.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0013.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0011.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0012.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0014.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0016.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0017.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0018.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0019.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0020.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0021.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0022.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0023.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0024.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0025.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0026.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0027.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0028.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0029.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0030.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0032.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0033.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0034.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0035.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0036.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0037.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0038.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0039.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0040.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0041.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0042.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0043.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0044.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0045.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0046.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0047.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0048.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0049.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0050.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0051.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0052.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0053.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0054.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0056.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0057.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0058.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0059.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0060.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0061.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0062.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0066.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0068.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0079.webp", ],
                    1: ["img/imaginiGradini/Mentenanta plante/IMG-20250127-WA0008.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0034.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0039.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0075.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0077.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0027.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0032.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0028.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0029.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0069.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0038.webp", ],
                    2: ["img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0013.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0081.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0024.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0015.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0022.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0007.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0063.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0014.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0008.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0076.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0086.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp", ],
                    3: ["img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0057.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0058.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0003.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0059.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0080.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0082.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0025.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0083.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0074-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0070-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0073-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0016.webp", ],
                    4: ["img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0040.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0042.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0044.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0045.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0041.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0047.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0051.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0052.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0054.webp", ],
                    5: ["img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0005.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0018.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0019.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0020.webp", ],
                } [e] || [];
                a.forEach((e, a) => {
                    i("#modal-images").append(`<img src="${e}" class="img-fluid mb-2 modal-image" alt="Category Image" data-index="${a}">`)
                }), i(".modal-image").off("click").on("click", function() {
                    !(function(e, a) {
                        let t = e,
                            n = a.length,
                            r = bootstrap.Modal.getInstance(document.getElementById("common-modal")),
                            o = new bootstrap.Modal(document.getElementById("fullscreen-modal"), {
                                backdrop: "static",
                                keyboard: !0
                            });
                        r && (r.hide(), i("#common-modal").off("hidden.bs.modal")), i("#fullscreen-image").attr("src", a[t]), o.show(), i("#prev-image").off("click").on("click", function() {
                            (t = (t - 1 + n) % n), i("#fullscreen-image").attr("src", a[t])
                        }), i("#next-image").off("click").on("click", function() {
                            (t = (t + 1) % n), i("#fullscreen-image").attr("src", a[t])
                        }), i("#fullscreen-modal").off("hidden.bs.modal").on("hidden.bs.modal", function() {
                            i(".btn-close, #prev-image, #next-image").blur(), setTimeout(() => {
                                r && r.show()
                            }, 100)
                        })
                    })(i(this).data("index"), a)
                })
            })(e)
        }
        i(".portfolio-item .btn.btn-lg-square.rounded-circle").on("click", function(a) {
            a.preventDefault(), a.stopPropagation(), (e = i(this).closest(".portfolio-item").index()), t(), i("#common-modal").modal("show")
        }), i("#next-category").on("click", function() {
            (e = (e + 1) % a.length), t()
        }), i("#prev-category").on("click", function() {
            (e = (e - 1 + a.length) % a.length), t()
        })
    }), i(window).on("scroll", function() {
        i(".portfolio-item").each(function() {
            let e = i(this).offset().top,
                a = e + i(this).outerHeight(),
                t = i(window).scrollTop(),
                n = t + i(window).height();
            a > t && e < n ? i(this).find(".blur-text, .buttons").css("opacity", 1) : i(this).find(".blur-text, .buttons").css("opacity", 0)
        })
    }), i(document).ready(function() {
        let e = [{
            input: document.getElementById("cityDisplay"),
            menu: document.getElementById("cityMenu")
        }, {
            input: document.getElementById("serviceDisplay"),
            menu: document.getElementById("serviceMenu")
        }, {
            input: document.getElementById("intervalDisplay"),
            menu: document.getElementById("intervalMenu")
        }, ];
        e.forEach((a) => {
            i(a.input).on("show.bs.dropdown", function() {
                e.forEach((e) => {
                    e.input !== this && i(e.input).dropdown("hide")
                })
            })
        });
        let a = document.getElementById("serviceDisplay"),
            t = document.getElementById("serviceMenu").querySelectorAll('input[type="checkbox"]');

        function n() {
            let i = Array.from(t).filter((i) => i.checked).map((i) => i.value);
            (a.value = i.length ? i.join(", ") : ""), i.length || (a.placeholder = "Selectează serviciile dorite")
        }
        t.forEach((i) => {
            i.addEventListener("change", n)
        });
        let r = document.getElementById("cityDisplay"),
            o = document.querySelectorAll('input[name="city"]');

        function s() {
            let e = Array.from(o).find((i) => i.checked);
            (r.value = e ? e.value : ""), e || (r.placeholder = "Selectează un oraș"), i(r).dropdown("hide")
        }
        o.forEach((i) => {
            i.addEventListener("change", s)
        });
        let c = document.getElementById("intervalDisplay"),
            d = document.querySelectorAll('input[name="interval"]');

        function l() {
            let e = Array.from(d).find((i) => i.checked);
            (c.value = e ? e.value : ""), e || (c.placeholder = "Selectează intervalul"), i(c).dropdown("hide")
        }
        d.forEach((i) => {
            i.addEventListener("change", l)
        }), e.forEach((i) => {
            i.menu.addEventListener("click", function(i) {
                ("checkbox" === i.target.type || "radio" === i.target.type || i.target.classList.contains("form-check-label")) && i.stopPropagation()
            })
        }), document.getElementById("closeServiceMenu")?.addEventListener("click", function(e) {
            e.stopPropagation(), i(a).dropdown("hide")
        })
    }), document.querySelectorAll('input[name="city"]').forEach((e) => {
        e.addEventListener("change", () => {
            !(function() {
                let e = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((i) => i.value)[0];
                (document.getElementById("cityDisplay").value = e || ""), e && i(cityDisplay).dropdown("hide")
            })()
        })
    }), document.getElementById("cityMenu")?.addEventListener("click", function(i) {
        ("radio" === i.target.type || i.target.classList.contains("form-check-label")) && i.stopPropagation()
    }), document.getElementById("closeCityMenu")?.addEventListener("click", function(e) {
        e.stopPropagation();
        let a = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((i) => i.value)[0];
        (document.getElementById("cityDisplay").value = a || ""), i(cityDisplay).dropdown("hide")
    }), document.getElementById("closeReviewCityMenu")?.addEventListener("click", function(e) {
        e.stopPropagation();
        let a = Array.from(document.querySelectorAll('input[name="reviewCity"]:checked')).map((i) => i.value)[0];
        (document.getElementById("reviewCity").value = a || ""), i(reviewCity).dropdown("hide")
    }), document.querySelectorAll('input[name="reviewCity"]').forEach((e) => {
        e.addEventListener("change", () => {
            let a = e.value;
            (document.getElementById("reviewCity").value = a), i(reviewCity).dropdown("hide")
        })
    }), document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]').forEach((i) => {
        i.addEventListener("change", t)
    }), document.getElementById("closeReviewServiceMenu")?.addEventListener("click", function(e) {
        e.stopPropagation(), t(), i(reviewService).dropdown("hide")
    }), i(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        margin: 30,
        dots: !1,
        loop: !0,
        nav: !0,
        center: !1,
        items: 1,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        onInitialized: function() {
            this.refresh()
        },
    }), i(document).on("keydown", function(e) {
        i("#fullscreen-modal").hasClass("show") && ("ArrowLeft" === e.key ? n("left") : "ArrowRight" === e.key && n("right"))
    });
    let r = 0,
        o = 0;
    i("#fullscreen-modal").on("touchstart", (i) => {
        r = i.changedTouches[0].screenX
    }), i("#fullscreen-modal").on("touchend", (i) => {
        (o = i.changedTouches[0].screenX), o < r && n("left"), o > r && n("right")
    });
    let s = [{
        src: "img/imaginiGradini/Peisagistica/IMG-20241119-WA0047.webp",
        alt: "Garden Image 1"
    }, {
        src: "img/imaginiGradini/Peisagistica/IMG-20241119-WA0048.webp",
        alt: "Garden Image 2"
    }, ];
    document.addEventListener("DOMContentLoaded", function() {
        let i = document.getElementById("modal-images");
        (i.innerHTML = ""), s.forEach((e) => {
            let a = document.createElement("img");
            (a.src = e.src), (a.alt = e.alt), (a.className = "img-fluid mb-2"), i.appendChild(a)
        })
    })
})(jQuery);
const stars = document.querySelectorAll(".star");

function updateStars(i, e) {
    stars.forEach((a) => {
        parseInt(a.getAttribute("data-rating")) <= i ? ((a.textContent = "★"), e || a.classList.add("active")) : ((a.textContent = "☆"), e || a.classList.remove("active"))
    })
}
stars.forEach((i) => {
    i.addEventListener("mouseover", function() {
        updateStars(this.getAttribute("data-rating"), !0)
    }), i.addEventListener("mouseout", function() {
        updateStars(currentRating, !1)
    }), i.addEventListener("click", function() {
        let i = parseInt(this.getAttribute("data-rating"));
        (currentRating = i), updateStars(i, !1)
    })
});
const telegramBotToken = "8005755711:AAFOWp30qeXbDDmgNzDNVQsvHYLuHGcru8A",
    telegramChatId = "-1002561205962";

function isValidEmail(i) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(i)
}

function isValidPhone(i) {
    let e = i.replace(/[^\d+]/g, "");
    return e.startsWith("+40") ? 12 === e.length : !!e.startsWith("0") && 10 === e.length
}
document.getElementById("programareForm")?.addEventListener("submit", async (i) => {
    i.preventDefault();
    let e = document.getElementById("name")?.value?.trim() || "",
        a = document.getElementById("phone")?.value?.trim() || "",
        t = document.getElementById("email")?.value?.trim() || "",
        n = document.querySelector('input[name="city"]:checked'),
        r = n ? n.value : "",
        o = Array.from(document.querySelectorAll('#serviceMenu input[type="checkbox"]:checked')).map((i) => i.value).join(", "),
        s = document.querySelector('input[name="interval"]:checked'),
        c = s ? s.value : "",
        d = document.getElementById("surface")?.value?.trim() || "",
        l = document.getElementById("mesaj")?.value?.trim() || "",
        m = "";
    if ((e ? e.length < 3 && (m += "• Numele trebuie să aibă cel puțin 3 caractere\n") : (m += "• Vă rugăm să completați numele\n"), a ? isValidPhone(a) || (m += "• Numărul de telefon trebuie să fie în format valid:\n  - 10 cifre începând cu 0\n  - sau +40 urmat de 9 cifre\n") : (m += "• Vă rugăm să completați numărul de telefon\n"), t && !isValidEmail(t) && (m += "• Vă rugăm să introduceți o adresă de email validă\n"), r || (m += "• Vă rugăm să selectați orașul\n"), o || (m += "• Vă rugăm să selectați cel puțin un serviciu\n"), c || (m += "• Vă rugăm să selectați perioada aproximativă\n"), d ? (isNaN(d) || 0 >= parseFloat(d)) && (m += "• Vă rugăm să introduceți o suprafață validă (număr pozitiv)\n") : (m += "• Vă rugăm să completați suprafața aproximativă\n"), l.length < 10 && (m += "• Vă rugăm să introduceți un minim de 10 caractere în mesaj\n"), m))
        return void alert("Vă rugăm să corectați următoarele:\n\n" + m);
    let g = `\n🌿 Cerere nouă de vizionare de la un client: \n\n👤 <b>Nume:</b> ${e}\n\n<b>Telefon:</b> ${a}\n\n✉️ <b>Email:</b> ${t}\n\n🏘️ <b>Oraș:</b> ${r}\n\n🌱 <b>Servicii dorite:</b> ${o}\n\n🗓️ <b>Perioada aproximativă:</b> ${c}\n\n📏 <b>Suprafața aproximativă:</b> ${d} mp\n\n📝 <b>Mesaj:</b> ${l}`;
    try {
        let i = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: "-1002561205962",
                text: g,
                parse_mode: "HTML"
            })
        });
        if (i.ok)
            alert("Mesaj trimis cu succes!"), document.getElementById("programareForm").reset(), (document.getElementById("cityDisplay").value = ""), (document.getElementById("serviceDisplay").value = ""), (document.getElementById("intervalDisplay").value = ""), document.querySelectorAll('input[type="radio"]').forEach((i) => {
                i.checked = !1
            }), document.querySelectorAll('#serviceMenu input[type="checkbox"]').forEach((i) => {
                i.checked = !1
            }), (document.getElementById("cityDisplay").placeholder = "Selectează un oraș"), (document.getElementById("serviceDisplay").placeholder = "Selectează serviciile dorite"), (document.getElementById("intervalDisplay").placeholder = "Selectează intervalul");
        else {
            let e = await i.json();
            console.error("Error response:", e), alert("A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.")
        }
    } catch (i) {
        console.error("Error:", i), alert("A apărut o eroare la trimiterea mesajului. Vă rugăm să verificați conexiunea la internet și să încercați din nou.")
    }
}), document.querySelectorAll('#serviceMenu input[type="checkbox"]').forEach((i) => {
    i.addEventListener("change", () => {
        let i = Array.from(document.querySelectorAll('#serviceMenu input[type="checkbox"]:checked')).map((i) => i.value);
        document.getElementById("serviceDisplay").value = i.join(", ")
    })
});
let checkInterval, resizeTimer, currentRating = 0,
    isSubmitting = !1,
    previousReviewCount = 0;

function initializeCarousel(i = 0) {
    $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        center: !0,
        margin: 24,
        dots: !0,
        loop: i > 1,
        nav: i > 1,
        items: 1,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']
    })
}

function showReviewForm() {
    document.querySelector(".review-container").classList.add("review-section-transitioning"), setTimeout(() => {
        document.getElementById("review-form").classList.add("active")
    }, 300)
}

function initializePortfolio() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.querySelectorAll(".portfolio-inner").forEach((i) => {
            i.addEventListener("mouseenter", () => {
                i.classList.add("active")
            }), i.addEventListener("mouseleave", () => {
                i.classList.remove("active")
            })
        })
    } else {
        let i = new IntersectionObserver((i) => {
            i.forEach((i) => {
                let e = i.target.getBoundingClientRect(),
                    a = window.innerHeight,
                    t = e.top + e.height / 2;
                Math.abs(t - a / 2) < 0.2 * a ? i.target.classList.add("active") : i.target.classList.remove("active")
            })
        }, {
            threshold: [0, 0.5, 1]
        });
        document.querySelectorAll(".portfolio-inner").forEach((e) => {
            i.observe(e)
        })
    }
}

function initializePortfolioCards() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
        let i = new IntersectionObserver((i) => {
            i.forEach((i) => {
                let e = i.target.getBoundingClientRect(),
                    a = window.innerHeight,
                    t = e.top + e.height / 2;
                Math.abs(t - a / 2) < 0.2 * a ? i.target.classList.add("active") : i.target.classList.remove("active")
            })
        }, {
            threshold: [0, 0.5, 1],
            rootMargin: "-20% 0px"
        });
        document.querySelectorAll(".portfolio-inner").forEach((e) => {
            i.observe(e)
        })
    } else {
        document.querySelectorAll(".portfolio-inner").forEach((i) => {
            i.addEventListener("mouseenter", () => {
                i.classList.add("active")
            }), i.addEventListener("mouseleave", () => {
                i.classList.remove("active")
            })
        })
    }
}

function initializePortofoliuScroll() {
    if (document.body.classList.contains("portofoliu") && window.matchMedia("(max-width: 991.98px)").matches) {
        let i = new IntersectionObserver((i) => {
                i.forEach((i) => {
                    let e = i.target.getBoundingClientRect(),
                        a = window.innerHeight,
                        t = e.top + e.height / 2;
                    Math.abs(t - a / 2) < 0.2 * a ? i.target.classList.add("active") : i.target.classList.remove("active")
                })
            }, {
                threshold: [0, 0.5, 1],
                rootMargin: "-20% 0px"
            }),
            e = document.querySelectorAll(".portfolio-inner-custom");
        e.length > 0 && e.forEach((e) => {
            i.observe(e)
        })
    }
}

function updateCityDisplay() {
    let i = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((i) => i.value)[0];
    (document.getElementById("cityDisplay").value = i || ""), i && $(cityDisplay).dropdown("hide")
}

function updateReviewServiceDisplay() {
    let i = Array.from(document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]:checked')).map((i) => i.value);
    document.getElementById("reviewService").value = i.join(", ")
}

function alignWithActiveCard() {
    if (window.innerWidth >= 992) {
        let i = $(".review-section-bg .col-lg-5"),
            e = $(".testimonial-carousel .owl-item.active .testimonial-item");
        if (i.length && e.length) {
            let a = e.offset().top,
                t = e.outerHeight(),
                n = $(window).scrollTop();
            i.css("top", a + t / 2 - n + "px")
        }
    }
}

function renderBlurHash(i, e) {
    let a = blurhash.decode(i, 32, 32),
        t = e.getContext("2d"),
        n = t.createImageData(32, 32);
    n.data.set(a), t.putImageData(n, 0, 0)
}

function getCategoryImages(i) {
    let e = categories.findIndex((e) => e.toLowerCase() === i.toLowerCase());
    return categoryImages[e] || []
}
$(document).ready(function() {
    let i = $(".navbar-toggler");
    $(".navbar-collapse"), i.on("click touchstart", function(i) {
        i.stopPropagation(), $(this).focus()
    }), $(document).on("click touchstart", function(e) {
        $(e.target).closest(".navbar-toggler").length || (i.blur(), i.removeClass("focus"))
    })
}), document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".portfolio-inner") && initializePortfolio()
}), window.addEventListener("load", () => {
    document.querySelector(".portfolio-inner") && initializePortfolio()
}), $(document).ready(function() {
    $(".btn-estimate").on("click", function(i) {
        window.innerWidth < 992 && (i.preventDefault(), $(".navbar-collapse").collapse("hide"), setTimeout(function() {
            let i = document.getElementById("Programare");
            i && i.scrollIntoView({
                behavior: "smooth"
            })
        }, 300))
    })
}), document.addEventListener("DOMContentLoaded", () => {
    initializePortfolioCards()
}), window.addEventListener("load", () => {
    initializePortfolioCards()
}), window.addEventListener("resize", () => {
    clearTimeout(resizeTimer), (resizeTimer = setTimeout(() => {
        (navbarHeight = navbar.offsetHeight), op, window.innerWidth > 991 && ((navbar.style.transform = "translateY(0)"), (isNavbarVisible = !0), (isNavbarCollapsed = !0), navbarCollapse.classList.remove("show"), navbarToggler.classList.add("collapsed"), navbarToggler.setAttribute("aria-expanded", "false")), initializePortfolioCards()
    }, 250))
}), document.addEventListener("DOMContentLoaded", () => {
    initializePortofoliuScroll()
}), window.addEventListener("load", () => {
    initializePortofoliuScroll()
}), document.addEventListener("DOMContentLoaded", function() {
    let i = [{
        input: document.getElementById("cityDisplay"),
        menu: document.getElementById("cityMenu")
    }, {
        input: document.getElementById("serviceDisplay"),
        menu: document.getElementById("serviceMenu")
    }, {
        input: document.getElementById("intervalDisplay"),
        menu: document.getElementById("intervalMenu")
    }, ];
    i.forEach((e) => {
        $(e.input).on("show.bs.dropdown", function() {
            i.forEach((i) => {
                i.input !== this && $(i.input).dropdown("hide")
            })
        })
    });
    let e = document.getElementById("serviceDisplay"),
        a = document.getElementById("serviceMenu").querySelectorAll('input[type="checkbox"]');

    function t() {
        let i = Array.from(a).filter((i) => i.checked).map((i) => i.value);
        (e.value = i.length ? i.join(", ") : ""), i.length || (e.placeholder = "Selectează serviciile dorite")
    }
    a.forEach((i) => {
        i.addEventListener("change", t)
    });
    let n = document.getElementById("cityDisplay"),
        r = document.querySelectorAll('input[name="city"]');

    function o() {
        let i = Array.from(r).find((i) => i.checked);
        (n.value = i ? i.value : ""), i || (n.placeholder = "Selectează un oraș"), $(n).dropdown("hide")
    }
    r.forEach((i) => {
        i.addEventListener("change", o)
    });
    let s = document.getElementById("intervalDisplay"),
        c = document.querySelectorAll('input[name="interval"]');

    function d() {
        let i = Array.from(c).find((i) => i.checked);
        (s.value = i ? i.value : ""), i || (s.placeholder = "Selectează intervalul"), $(s).dropdown("hide")
    }
    c.forEach((i) => {
        i.addEventListener("change", d)
    }), i.forEach((i) => {
        i.menu.addEventListener("click", function(i) {
            ("checkbox" === i.target.type || "radio" === i.target.type || i.target.classList.contains("form-check-label")) && i.stopPropagation()
        })
    }), document.getElementById("closeServiceMenu")?.addEventListener("click", function(i) {
        i.stopPropagation(), $(e).dropdown("hide")
    })
}), document.querySelectorAll('input[name="city"]').forEach((i) => {
    i.addEventListener("change", () => {
        updateCityDisplay()
    })
}), document.getElementById("cityMenu")?.addEventListener("click", function(i) {
    ("radio" === i.target.type || i.target.classList.contains("form-check-label")) && i.stopPropagation()
}), document.getElementById("closeCityMenu")?.addEventListener("click", function(i) {
    i.stopPropagation();
    let e = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((i) => i.value)[0];
    (document.getElementById("cityDisplay").value = e || ""), $(cityDisplay).dropdown("hide")
}), document.getElementById("closeReviewCityMenu")?.addEventListener("click", function(i) {
    i.stopPropagation();
    let e = Array.from(document.querySelectorAll('input[name="reviewCity"]:checked')).map((i) => i.value)[0];
    (document.getElementById("reviewCity").value = e || ""), $(reviewCity).dropdown("hide")
}), document.querySelectorAll('input[name="reviewCity"]').forEach((i) => {
    i.addEventListener("change", () => {
        let e = i.value;
        (document.getElementById("reviewCity").value = e), $(reviewCity).dropdown("hide")
    })
}), document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]').forEach((i) => {
    i.addEventListener("change", updateReviewServiceDisplay)
}), document.getElementById("closeReviewServiceMenu")?.addEventListener("click", function(i) {
    i.stopPropagation(), updateReviewServiceDisplay(), $(reviewService).dropdown("hide")
}), $(".testimonial-carousel").owlCarousel({
    autoplay: !0,
    smartSpeed: 1e3,
    margin: 30,
    dots: !1,
    loop: !0,
    nav: !0,
    center: !1,
    items: 1,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    onInitialized: function() {
        this.refresh()
    },
}), $(document).ready(function() {
    $("#common-modal").off("hidden.bs.modal").on("hidden.bs.modal", function() {
        $(".btn-close, #prev-category, #next-category").blur(), setTimeout(() => {
            $(this).removeAttr("aria-hidden"), document.body.focus(), $(this).find(".modal-dialog").removeAttr("aria-hidden"), $(".modal-backdrop").remove()
        }, 100)
    }), $("#fullscreen-modal").off("hidden.bs.modal").on("hidden.bs.modal", function() {
        $(".btn-close, #prev-image, #next-image").blur(), $(this).removeAttr("aria-hidden"), $("body").attr("tabindex", "-1").focus().removeAttr("tabindex")
    })
}), document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".blurhash-canvas").forEach((i) => {
        renderBlurHash(i.getAttribute("data-blurhash"), i), i.nextElementSibling.addEventListener("load", () => {
            i.style.display = "none"
        })
    })
}), document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        new bootstrap.Carousel(document.querySelector("#header-carousel")).cycle()
    }, 3e3)
}), document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        let i = new IntersectionObserver((i) => {
            i.forEach((i) => {
                let e = i.target.querySelector(".service-page-icon");
                e && (i.isIntersecting ? e.classList.add("animate-service-icon") : e.classList.remove("animate-service-icon"))
            })
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -10% 0px"
        });
        document.querySelectorAll(".service-page-item").forEach((e) => {
            i.observe(e)
        })
    }
});
const categories = ["peisagistica", "mentenanta-plante", "mentenanta-gradina", "irigare-drenaj", "tehnologii", "gradinarit"],
    categoryImages = {
        0: ["img/imaginiGradini/Peisagistica/IMG-20250110-WA0015.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0017.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0021.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0004.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0056.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0060.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0001.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0007.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0006.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0067.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0063-1.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0012.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0009.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0007.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0015.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0001.webp", "img/imaginiGradini/Peisagistica/IMG-20250127-WA0018.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0053.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0048.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0046.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0043.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0049.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0035.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0036.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0031.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0008.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0037.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0013.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0011.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0012.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0014.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0016.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0017.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0018.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0019.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0020.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0021.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0022.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0023.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0024.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0025.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0026.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0027.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0028.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0029.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0030.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0032.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0033.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0034.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0035.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0036.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0037.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0038.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0039.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0040.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0041.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0042.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0043.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0044.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0045.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0046.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0047.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0048.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0049.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0050.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0051.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0052.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0053.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0054.webp", "img/imaginiGradini/Peisagistica/IMG-20250110-WA0055.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0056.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0057.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0058.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0059.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0060.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0061.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0062.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0066.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0068.webp", "img/imaginiGradini/Peisagistica/IMG-20241119-WA0079.webp", ],
        1: ["img/imaginiGradini/Mentenanta plante/IMG-20250127-WA0008.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0034.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0039.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0075.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0077.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0027.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0032.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0028.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0029.webp", "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0069.webp", "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0038.webp", ],
        2: ["img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0013.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0081.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0024.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0015.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0022.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0007.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0063.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0014.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0008.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0076.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0086.webp", "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp", ],
        3: ["img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0057.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0058.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0003.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0059.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0080.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0082.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0025.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0083.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0074-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0070-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0073-1.webp", "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0016.webp", ],
        4: ["img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0040.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0042.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0044.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0045.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0041.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0047.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0051.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0052.webp", "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0054.webp", ],
        5: ["img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0005.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0018.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0019.webp", "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0020.webp", ],
    };
$("#common-modal .category-btn").on("click", function() {
    let i = $(this).data("category");
    $("#common-modal .category-btn").removeClass("active"), $(this).addClass("active");
    let e = categories.findIndex((e) => e === i),
        a = categoryImages[e] || [];
    $("#modal-images").empty(), a.forEach((i, e) => {
        $("#modal-images").append(`\n<div class="img-wrapper">\n<img src="${i}" \n  class="img-fluid" \n  alt="Category Image ${e + 1}" \n  data-index="${e}">\n</div>`)
    })
}), $("#common-modal-index .category-btn-index").on("click", function() {
    let i = $(this).data("category");
    $("#common-modal-index .category-btn-index").removeClass("active"), $(this).addClass("active");
    let e = categories.findIndex((e) => e === i),
        a = categoryImages[e] || [];
    $("#modal-images-index").empty(), a.forEach((i, e) => {
        $("#modal-images-index").append(`\n<img src="${i}" \nclass="img-fluid" \nalt="Category Image ${e + 1}" \ndata-index="${e}">`)
    })
});
let lastScrollTop = 0;
const scrollDelta = 5,
    navbar = document.querySelector(".navbar");
let navbarHeight = navbar.offsetHeight,
    isNavbarVisible = !0,
    isNavbarCollapsed = !0;
const navbarToggler = document.querySelector(".navbar-toggler"),
    navbarCollapse = document.querySelector(".navbar-collapse");

function updateNavbarVisibility() {
    let i = window.pageYOffset || document.documentElement.scrollTop;
    if (i <= navbarHeight) return (navbar.style.transform = "translateY(0)"), void(isNavbarVisible = !0);
    !(5 >= Math.abs(lastScrollTop - i)) && (i > lastScrollTop && isNavbarVisible ? isNavbarCollapsed ? ((navbar.style.transform = "translateY(-100%)"), (isNavbarVisible = !1)) : closeNavbar() : i < lastScrollTop && !isNavbarVisible && ((navbar.style.transform = "translateY(0)"), (isNavbarVisible = !0)), (lastScrollTop = i))
}

function closeNavbar() {
    if (!isNavbarCollapsed) {
        let i = navbarCollapse.scrollHeight;
        (navbarCollapse.style.height = i + "px"), navbarCollapse.offsetHeight, new bootstrap.Collapse(navbarCollapse, {
            toggle: !1
        }).hide(), (isNavbarCollapsed = !0)
    }
}

function showNewsletterFeedback(i, e) {
    const a = document.getElementById("newsletterFeedback");
    (a.textContent = i), (a.className = "newsletter-feedback " + (e ? "success" : "error")), setTimeout(() => {
        (a.textContent = ""), (a.className = "newsletter-feedback")
    }, 5e3)
}

function submitNewsletter() {
    let i = document.getElementById("newsletterEmail"),
        e = i.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return void showNewsletterFeedback("Vă rugăm introduceți o adresă de email validă.", !1);
    let a = `❗ Un nou client s-a inscris la newsletter! ❗\n\n✉️ Email: ${e}`;
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "-1002561205962",
            text: a
        })
    }).then((i) => i.json()).then((e) => {
        if (!e.ok) throw Error("Failed to send message");
        showNewsletterFeedback("Vă mulțumim pentru înscriere!", !0), (i.value = "")
    }).catch((i) => {
        showNewsletterFeedback("A apărut o eroare. Vă rugăm încercați din nou.", !1), console.error("Error:", i)
    })
}

function initCustomParallax() {
    let i = document.querySelector(".facts");
    if (!i) return;
    let e = document.createElement("div");
    e.className = "parallax-background";
    let a = document.createElement("img");

    function t() {
        let e = i.getBoundingClientRect(),
            t = window.innerHeight,
            n = window.innerWidth <= 991;
        if (e.top < t && e.bottom > 0) {
            let i = (t - e.top) / (t + e.height);
            if (n) {
                let t = 1 * e.height * (i - 0.5);
                a.style.transform = `translate3d(0, ${t * Math.pow(Math.abs(Math.sin(i * Math.PI)), 0.8)}px, 0)`
            } else {
                let t = 3.5 * e.height * (i - 0.5);
                a.style.transform = `translate3d(0, ${t * Math.pow(Math.abs(Math.sin(i * Math.PI)), 0.7)}px, 0)`
            }
        }
    }(a.src = i.dataset.imageSrc || "img/imaginiGradini/IMG-20241119-WA0085.webp"), (a.alt = "Fundal decorativ secțiune statistici - Grădină amenajată cu gazon și plante ornamentale"), e.appendChild(a), i.insertBefore(e, i.firstChild), window.addEventListener("scroll", () => {
        window.requestAnimationFrame(t)
    }), window.addEventListener("resize", () => {
        window.requestAnimationFrame(t)
    }), t()
}

function initQuoteParallax() {
    let i = document.querySelector(".quote");
    if (!i) return;
    let e = document.createElement("div");
    e.className = "quote-parallax-background";
    let a = document.createElement("img");

    function t() {
        let e = i.getBoundingClientRect(),
            t = window.innerHeight,
            n = window.innerWidth <= 991;
        if (e.top < t && e.bottom > 0) {
            let i = (t - e.top) / (t + e.height);
            if (n) {
                let t = 0.6 * e.height * (i - 0.5);
                a.style.transform = `translate3d(0, ${t * Math.pow(Math.abs(Math.sin(i * Math.PI)), 0.9)}px, 0)`
            } else {
                let t = 1.2 * e.height * (i - 0.5);
                a.style.transform = `translate3d(0, ${t * Math.pow(Math.abs(Math.sin(i * Math.PI)), 0.8)}px, 0)`
            }
        }
    }(a.src = "img/imaginiGradini/IMG-20241119-WA0086.webp"), (a.alt = "Fundal decorativ secțiune contact - Grădină cu aranjamente peisagistice și sistem de irigații"), e.appendChild(a), i.insertBefore(e, i.firstChild), window.addEventListener("scroll", () => {
        window.requestAnimationFrame(t)
    }), window.addEventListener("resize", () => {
        window.requestAnimationFrame(t)
    }), t()
}
document.addEventListener("click", (i) => {
    !(window.innerWidth <= 991) || navbar.contains(i.target) || i.target.classList.contains("navbar-toggler") || closeNavbar("click")
}), navbarCollapse.addEventListener("show.bs.collapse", () => {
    let i = navbarCollapse.scrollHeight;
    (navbarCollapse.style.height = "0"), navbarCollapse.classList.add("collapsing"), navbarCollapse.classList.remove("show", "collapse"), navbarCollapse.offsetHeight, (navbarCollapse.style.height = i + "px"), setTimeout(() => {
        navbarCollapse.classList.remove("collapsing"), navbarCollapse.classList.add("collapse", "show"), (navbarCollapse.style.height = ""), (isNavbarCollapsed = !1)
    }, 300)
}), navbarCollapse.addEventListener("hide.bs.collapse", () => {
    let i = navbarCollapse.scrollHeight;
    (navbarCollapse.style.height = i + "px"), navbarCollapse.classList.add("collapsing"), navbarCollapse.classList.remove("collapse", "show"), navbarCollapse.offsetHeight, (navbarCollapse.style.height = "0"), setTimeout(() => {
        navbarCollapse.classList.remove("collapsing"), navbarCollapse.classList.add("collapse"), (navbarCollapse.style.height = ""), (isNavbarCollapsed = !0)
    }, 300)
}), document.addEventListener("touchstart", (i) => {
    !(window.innerWidth <= 991) || navbar.contains(i.target) || i.target.classList.contains("navbar-toggler") || closeNavbar("touch")
}, {
    passive: !0
}), $(document).ready(function() {
    $('[data-parallax="scroll"]').parallax({
        speed: 0.2,
        zIndex: -100,
        naturalWidth: "100%",
        positionY: "center",
        responsive: !0,
        mirrorContainer: ".parallax-mirror",
        overScrollFix: !0,
        androidFix: !0,
        iosFix: !0
    }), $(window).off("scroll.parallax");
    let i, e = !1;
    $(window).on("scroll.parallax", function() {
        e || (window.requestAnimationFrame(function() {
            $('[data-parallax="scroll"]').each(function() {
                let i = $(this),
                    e = i.prev(".parallax-mirror");
                if (e.length) {
                    let a = $(window).scrollTop(),
                        t = i.offset().top;
                    e.find("img").css({
                        transform: `translate3d(0, ${Math.round(0.2 * (a - t))}px, 0)`,
                        transition: "none",
                        "will-change": "transform"
                    })
                }
            }), (e = !1)
        }), (e = !0))
    }), $(window).on("resize", function() {
        clearTimeout(i), (i = setTimeout(function() {
            $('[data-parallax="scroll"]').parallax("refresh")
        }, 100))
    })
}), $(document).ready(function() {
    let i = {
        "eye-peisagistica": "peisagistica",
        "eye-mentenanta-plante": "mentenanta-plante",
        "eye-mentenanta-gradina": "mentenanta-gradina",
        "eye-irigare-drenaj": "irigare-drenaj",
        "eye-tehnologii": "tehnologii",
        "eye-gradinarit": "gradinarit",
    };
    Object.keys(i).forEach((e) => {
        $(`#${e}`).on("click", function(a) {
            a.preventDefault(), a.stopPropagation();
            let t = i[e];
            $("#portfolio-flters .btn").removeClass("active");
            let n = $(`#portfolio-flters .btn[data-filter="${t}"]`);
            n.addClass("active"), $("#common-modal").modal("show"), $("#common-modal").on("shown.bs.modal", function i() {
                if (window.innerWidth <= 991) {
                    let i = document.querySelector(".portfolio-filters"),
                        e = n[0];
                    if (i && e) {
                        let a = e.offsetLeft - i.clientWidth / 2 + e.offsetWidth / 2;
                        i.scrollTo({
                            left: a,
                            behavior: "smooth"
                        })
                    }
                }
                $("#common-modal").off("shown.bs.modal", i)
            });
            let r = categories.findIndex((i) => i === t); - 1 !== r && ((currentCategoryIndex = r), updateModalContent())
        })
    })
}), $(document).ready(function() {
    let i = {
        "link-peisagistica": "#peisagistica",
        "link-mentenanta-plante": "#plante",
        "link-mentenanta-gradina": "#mentenanta",
        "link-irigare-drenaj": "#irigare",
        "link-tehnologii": "#tehnologii",
        "link-gradinarit": "#urban"
    };
    Object.keys(i).forEach((e) => {
        $(`#${e}`).on("click", function(a) {
            a.preventDefault();
            const t = `servicii.html${i[e]}`;
            window.history.pushState({
                fromServices: !0
            }, "", window.location.href), (window.location.href = t)
        })
    }), window.addEventListener("popstate", function(i) {
        const e = document.getElementById("common-modal");
        if (e && e.classList.contains("show")) {
            const i = bootstrap.Modal.getInstance(e);
            i && i.hide()
        }
        i.state && i.state.fromServices && (i.preventDefault(), window.history.replaceState(null, "", window.location.href))
    })
}), $(document).ready(function() {
    let i = new IntersectionObserver((i) => {
        i.forEach((i) => {
            let e = $(i.target);
            i.isIntersecting ? e.carousel("cycle") : e.carousel("pause")
        })
    }, {
        threshold: 0.1
    });
    $(".carousel").each(function() {
        i.observe(this)
    }), $(document).ready(function() {
        let i = new IntersectionObserver((i) => {
            i.forEach((i) => {
                if (i.isIntersecting) {
                    let e = i.target,
                        a = e.dataset.script;
                    if (a && !e.classList.contains("script-loaded")) {
                        let i = document.createElement("script");
                        (i.src = a), (i.defer = !0), document.body.appendChild(i), e.classList.add("script-loaded")
                    }
                }
            })
        }, {
            threshold: 0.1
        });
        $("[data-script]").each(function() {
            i.observe(this)
        });
        let e = new IntersectionObserver((i) => {
            i.forEach((i) => {
                if (i.isIntersecting) {
                    let e = i.target,
                        a = e.dataset.src;
                    a && ((e.src = a), e.removeAttribute("data-src"))
                }
            })
        }, {
            rootMargin: "50px 0px",
            threshold: 0.1
        });
        $("img[data-src]").each(function() {
            e.observe(this)
        })
    })
}), $(document).ready(function() {
    $(".facts").removeAttr("data-parallax"), initCustomParallax()
}), $(document).ready(function() {
    initCustomParallax(), initQuoteParallax()
}), $(document).ready(function() {
    $(".counter").each(function() {
        let i = $(this),
            e = parseInt(i.text());
        new Waypoint({
            element: this,
            handler: function() {
                i.counterUp({
                    delay: 10,
                    time: 2e3,
                    formatter: function(i, a) {
                        return Math.min(i, e).toString()
                    },
                }), this.destroy()
            },
            offset: "bottom-in-view",
        })
    })
}), $(document).ready(function() {
    "undefined" != typeof Waypoint && $(".counter").each(function() {
        let i = $(this),
            e = parseInt(i.text());
        new Waypoint({
            element: this,
            handler: function() {
                i.counterUp({
                    delay: 10,
                    time: 2e3,
                    beginAt: 0,
                    formatter: function(i) {
                        return Math.min(i, e).toString()
                    },
                }), this.destroy()
            },
            offset: "90%",
        })
    })
}), $(document).ready(function() {
    let i = $("#contact-button"),
        e = $("#contact-popup");

    function a() {
        window.innerWidth <= 767 ? e.hasClass("show") ? (i[0].style.setProperty("background-color", "#075e54", "important"), i[0].style.setProperty("color", "#ffffff", "important"), i[0].style.setProperty("transform", "scale(1.15)", "important")) : i.removeAttr("style") : e.hasClass("show") ? (i[0].style.setProperty("background-color", "#075e54", "important"), i[0].style.setProperty("color", "#ffffff", "important"), i[0].style.setProperty("transform", "scale(1.1)", "important")) : i.removeAttr("style")
    }
    i.on("click touchstart", function() {
        setTimeout(a, 0)
    });
    let t = new MutationObserver(function(i) {
        i.forEach(function(i) {
            "class" === i.attributeName && a()
        })
    });
    t.observe(e[0], {
        attributes: !0,
        attributeFilter: ["class"]
    }), $(window).on("resize", a), a()
}), $(document).ready(function() {
    let i = new IntersectionObserver((e) => {
            e.forEach((e) => {
                e.isIntersecting && e.intersectionRatio > 0.5 && (e.target.classList.add("visible"), i.unobserve(e.target))
            })
        }, {
            threshold: 0.5,
            rootMargin: "0px"
        }),
        e = document.querySelector(".content-card");
    e && i.observe(e)
}), $(document).ready(function() {
    let i = new IntersectionObserver((e) => {
            e.forEach((e) => {
                e.isIntersecting && (e.target.classList.add("visible"), i.unobserve(e.target))
            })
        }, {
            threshold: 0.1,
            rootMargin: "0px"
        }),
        e = document.querySelector(".animate-word");
    e && i.observe(e)
}), $(document).ready(function() {
    let i = new IntersectionObserver((e) => {
            e.forEach((e) => {
                let a = e.target.getBoundingClientRect(),
                    t = window.innerHeight;
                if (a.top + a.height / 2 <= t / 2) {
                    let a = e.target.querySelector(".animate-word");
                    a && !a.classList.contains("visible") && (a.classList.add("visible"), i.unobserve(e.target))
                }
            })
        }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: "0px"
        }),
        e = document.querySelector(".experienta-title");
    e && i.observe(e)
}), $(document).ready(function() {
    let i = $(".contact-button"),
        e = $(".whatsapp-button"),
        a = new IntersectionObserver((a) => {
            a.forEach((a) => {
                a.isIntersecting ? (i.css({
                    transition: "all 0.3s ease-out",
                    transform: "translateY(100px)",
                    opacity: "0"
                }), e.css({
                    transition: "all 0.3s ease-out",
                    transform: "translateY(100px)",
                    opacity: "0"
                }), setTimeout(() => {
                    i.css("display", "none"), e.css("display", "none")
                }, 300)) : (i.css({
                    display: "block",
                    transition: "all 0.3s ease-out",
                    transform: "translateY(100px)",
                    opacity: "0"
                }), e.css({
                    display: "block",
                    transition: "all 0.3s ease-out",
                    transform: "translateY(100px)",
                    opacity: "0"
                }), i[0].offsetHeight, e[0].offsetHeight, i.css({
                    transform: "translateY(0)",
                    opacity: "1"
                }), e.css({
                    transform: "translateY(0)",
                    opacity: "1"
                }))
            })
        }, {
            threshold: 0.1
        }),
        t = document.querySelector(".copyright");
    t && a.observe(t), document.querySelectorAll("#programareForm input, #programareForm textarea").forEach((i) => {
        i.addEventListener("keypress", function(i) {
            "Enter" !== i.key || i.shiftKey || (i.preventDefault(), document.getElementById("programareForm").dispatchEvent(new Event("submit")))
        })
    }), document.getElementById("newsletterEmail")?.addEventListener("keypress", function(i) {
        "Enter" === i.key && (i.preventDefault(), submitNewsletter())
    })
})
$(document).ready(function() {
    $('.carousel').each(function() {
        if ($(this).find('.carousel-item').length > 0) {
            $(this).carousel()
        }
    });
    var certificateModal = document.getElementById('certificate-modal');
    var certificateImg = document.querySelector('.certificate-container img');
    var modalImg = document.getElementById('certificate-modal-img');
    var closeBtn = document.querySelector('.certificate-close');
    if (certificateImg) {
        certificateImg.onclick = function() {
            certificateModal.style.display = 'flex';
            modalImg.src = this.src;
            setTimeout(function() {
                certificateModal.classList.add('show')
            }, 10)
        }
    }
    if (closeBtn) {
        closeBtn.onclick = function() {
            certificateModal.classList.remove('show');
            setTimeout(function() {
                certificateModal.style.display = 'none'
            }, 300)
        }
    }
    if (certificateModal) {
        certificateModal.onclick = function(event) {
            if (event.target == certificateModal) {
                certificateModal.classList.remove('show');
                setTimeout(function() {
                    certificateModal.style.display = 'none'
                }, 300)
            }
        }
    }
});
$(document).ready(function() {
    let i = document.createElement("div");
    (i.className = "whatsapp-popup"), (i.textContent = "Cel mai rapid ne găsești aici:"), document.body.appendChild(i);
    const e = new IntersectionObserver((e) => {
            e.forEach((e) => {
                e.isIntersecting ? i.classList.add("show") : i.classList.remove("show")
            })
        }, {
            threshold: 0.2
        }),
        a = document.querySelector("#programareForm");
    a && e.observe(a)
});
$(document).ready(function() {
    let i = new IntersectionObserver((i) => {
        i.forEach((i) => {
            i.isIntersecting ? i.target.classList.add("visible") : i.target.classList.remove("visible")
        })
    }, {
        threshold: 0.2
    });
    i.observe(document.querySelector("#programareForm"))
})