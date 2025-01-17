$(document).ready(function () {
    lightbox.init();
    $(document).on("lightbox:open", function () {
        $(".lb-cancel").remove();
        $(".lb-close").remove();
    });
    $(document).on("lightbox:close", function () {
        $(".lb-cancel").remove();
        $(".lb-close").remove();
    });
    $("#whatsapp-button").on("click", function () {
        window.open("https://wa.me/40754895951", "_blank");
    });
});
window.addEventListener("error", (e) => {
    if (e.message.includes("WebSocket connection")) {
        e.preventDefault();
    }
});
(function ($) {
    "use strict";
    var spinner = function () {
        setTimeout(function () {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
                if (portfolioIsotope) {
                    portfolioIsotope.isotope("layout");
                }
            }
        }, 1);
    };
    spinner();
    new WOW().init();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".sticky-top").addClass("shadow-sm scrolled").css("top", "5px");
        } else {
            $(".sticky-top").removeClass("shadow-sm scrolled").css("top", "0");
        }
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return !1;
    });
    $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 });
    var portfolioIsotope;
    function initPortfolioIsotope() {
        if ($(".portfolio-container").length) {
            portfolioIsotope = $(".portfolio-container").isotope({ itemSelector: ".portfolio-item", layoutMode: "fitRows", initLayout: !0 });
            setTimeout(function () {
                portfolioIsotope.isotope("layout");
            }, 100);
        }
    }
    $("#portfolio-flters li").on("click", function () {
        $("#portfolio-flters li").removeClass("active");
        $(this).addClass("active");
        portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });
    $(".testimonial-carousel").owlCarousel({ autoplay: !0, smartSpeed: 1000, items: 1, dots: !1, loop: !0, nav: !0, navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'] });
    $(document).ready(function () {
        const contactButton = $("#contact-button");
        const contactPopup = $("#contact-popup");
        let isAnimating = !1;
        let lastScrollTop = 0;
        const scrollThreshold = 5;
        contactButton.off();
        $(document).off("click.contactPopup touchstart.contactPopup");
        $(window).off("scroll.contactPopup");
        contactButton.on("click touchstart", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (isAnimating) return;
            isAnimating = !0;
            setTimeout(() => (isAnimating = !1), 300);
            if (contactPopup.hasClass("show")) {
                closePopup();
            } else {
                openPopup();
            }
        });
        $(document).on("click touchstart", function (e) {
            if (!$(e.target).closest("#contact-button, #contact-popup").length) {
                if (contactPopup.hasClass("show")) {
                    closePopup();
                }
            }
        });
        $(window).on("scroll", function () {
            let currentScroll = $(this).scrollTop();
            if (contactPopup.hasClass("show")) {
                if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                    closePopup();
                }
            }
            lastScrollTop = currentScroll;
        });
        function openPopup() {
            contactPopup.addClass("show");
            contactButton.addClass("active");
            $(".portfolio-item .blur-text, .portfolio-item .buttons").css("opacity", 1);
        }
        function closePopup() {
            contactPopup.removeClass("show");
            contactButton.removeClass("active");
            $(".portfolio-item .blur-text, .portfolio-item .buttons").css("opacity", 1);
        }
    });
    $(document).ready(function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("in-view");
                            entry.target.classList.remove("out-view");
                        } else {
                            entry.target.classList.remove("in-view");
                            entry.target.classList.add("out-view");
                        }
                    });
                },
                { threshold: 0.5, rootMargin: "-10% 0px" }
            );
            document.querySelectorAll(".portfolio-inner").forEach((item) => {
                observer.observe(item);
            });
        }
    });
    $(document).ready(function () {
        $("#featureCarousel").carousel({ interval: 3000, ride: "carousel", pause: "hover" });
    });
    $(document).ready(function () {
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
        function handleCarouselVisibility() {
            const carousel = document.querySelector("#featureCarousel");
            if (carousel) {
                if (isElementInViewport(carousel)) {
                    carousel.classList.add("in-viewport");
                } else {
                    carousel.classList.remove("in-viewport");
                }
            }
        }
        $(window).on("scroll resize", handleCarouselVisibility);
        handleCarouselVisibility();
    });
    $(document).ready(function () {
        $(".portfolio-container").imagesLoaded(function () {
            initPortfolioIsotope();
        });
        $(window).on("resize", function () {
            if (portfolioIsotope) {
                portfolioIsotope.isotope("layout");
            }
        });
        $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function () {
            if (portfolioIsotope) {
                portfolioIsotope.isotope("layout");
            }
        });
    });
    $(window).on("scroll", function () {
        $(".portfolio-item").each(function () {
            const itemTop = $(this).offset().top;
            const itemBottom = itemTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            if (itemBottom > viewportTop && itemTop < viewportBottom) {
                $(this).find(".blur-text, .buttons").css("opacity", 1);
            } else {
                $(this).find(".blur-text, .buttons").css("opacity", 0);
            }
        });
    });
    $(document).ready(function () {
        let currentCategoryIndex = 0;
        const categories = $(".portfolio-item");
        function updateModalContent() {
            const currentCategory = categories.eq(currentCategoryIndex);
            const title = currentCategory.find(".portfolio-text h4").text();
            const description = currentCategory.find(".portfolio-text p").html();
            $("#modalLabel").text(title);
            $("#modal-content").html(description);
            populateCategoryImages(currentCategoryIndex);
        }
        function populateCategoryImages(index) {
            const categoryImages = {
                0: [
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0015.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0017.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0021.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0004.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0056.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0060.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0001.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0007.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0006.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0067.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0063-1.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0055.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0053.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0048.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0046.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0043.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0049.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0035.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0036.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0031.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0008.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0037.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0013.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0011.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0012.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0014.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0016.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0017.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0018.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0019.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0020.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0021.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0022.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0023.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0024.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0025.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0026.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0027.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0028.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0029.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0030.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0032.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0033.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0034.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0035.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0036.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0037.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0038.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0039.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0040.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0041.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0042.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0043.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0044.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0045.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0046.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0047.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0048.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0049.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0050.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0051.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0052.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0053.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0054.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20250110-WA0055.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0056.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0057.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0058.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0059.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0060.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0061.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0062.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0066.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0068.webp",
                    "img/imaginiGradini/Peisagistica/IMG-20241119-WA0079.webp",
                ],
                1: [
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0034.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0075.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0077.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0039.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0027.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0032.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0028.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0029.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20241119-WA0069.webp",
                    "img/imaginiGradini/Mentenanta plante/IMG-20250110-WA0038.webp",
                ],
                2: [
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0013.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0081.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0024.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0015.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0022.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0007.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0063.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0014.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0026.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0008.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0076.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20241119-WA0086.webp",
                    "img/imaginiGradini/Mentenanta gradina/IMG-20250110-WA0010.webp",

                ],
                3: [
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0057.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0058.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0003.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0059.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0080.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0082.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0025.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0083.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0074-1.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0070-1.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20241119-WA0073-1.webp",
                    "img/imaginiGradini/Irigare si drenaj/IMG-20250110-WA0016.webp",
                ],
                4: [
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0040.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0042.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0044.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0045.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0041.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0047.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0051.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0052.webp",
                    "img/imaginiGradini/Tehnologii de gradina/IMG-20250110-WA0054.webp",
                ],
                5: [
                    "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0005.webp",
                    "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0018.webp",
                    "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0019.webp",
                    "img/imaginiGradini/Gradinarit si Peisagistica urbana/IMG-20250110-WA0020.webp",
                ],
            };
            $("#modal-images").empty();
            const images = categoryImages[index] || [];
            images.forEach((image, i) => {
                $("#modal-images").append(`<img src="${image}" class="img-fluid mb-2 modal-image" alt="Category Image" data-index="${i}">`);
            });
            $(".modal-image")
                .off("click")
                .on("click", function () {
                    const index = $(this).data("index");
                    openFullscreenModal(index, images);
                });
        }
        function openFullscreenModal(index, images) {
            let currentIndex = index;
            let totalImages = images.length;
            const categoryModal = bootstrap.Modal.getInstance(document.getElementById("common-modal"));
            const fullscreenModal = new bootstrap.Modal(document.getElementById("fullscreen-modal"), { backdrop: "static", keyboard: !0 });
            if (categoryModal) {
                categoryModal.hide();
                $("#common-modal").off("hidden.bs.modal");
            }
            $("#fullscreen-image").attr("src", images[currentIndex]);
            fullscreenModal.show();
            $("#prev-image")
                .off("click")
                .on("click", function () {
                    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                    $("#fullscreen-image").attr("src", images[currentIndex]);
                });
            $("#next-image")
                .off("click")
                .on("click", function () {
                    currentIndex = (currentIndex + 1) % totalImages;
                    $("#fullscreen-image").attr("src", images[currentIndex]);
                });
            $("#fullscreen-modal")
                .off("hidden.bs.modal")
                .on("hidden.bs.modal", function () {
                    $(".btn-close, #prev-image, #next-image").blur();
                    setTimeout(() => {
                        if (categoryModal) {
                            categoryModal.show();
                        }
                    }, 100);
                });
        }
        $(".portfolio-item, .portfolio-item .btn.btn-lg-square.rounded-circle").on("click", function (e) {
            e.preventDefault();
            currentCategoryIndex = $(this).closest(".portfolio-item").index();
            updateModalContent();
            $("#common-modal").modal("show");
        });
        $("#next-category").on("click", function () {
            currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
            updateModalContent();
        });
        $("#prev-category").on("click", function () {
            currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
            updateModalContent();
        });
    });
    $(window).on("scroll", function () {
        $(".portfolio-item").each(function () {
            const itemTop = $(this).offset().top;
            const itemBottom = itemTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            if (itemBottom > viewportTop && itemTop < viewportBottom) {
                $(this).find(".blur-text, .buttons").css("opacity", 1);
            } else {
                $(this).find(".blur-text, .buttons").css("opacity", 0);
            }
        });
    });
    $(document).ready(function () {
        const dropdowns = [
            { input: document.getElementById("cityDisplay"), menu: document.getElementById("cityMenu") },
            { input: document.getElementById("serviceDisplay"), menu: document.getElementById("serviceMenu") },
            { input: document.getElementById("intervalDisplay"), menu: document.getElementById("intervalMenu") },
        ];
        dropdowns.forEach((dropdown) => {
            $(dropdown.input).on("show.bs.dropdown", function () {
                dropdowns.forEach((other) => {
                    if (other.input !== this) {
                        $(other.input).dropdown("hide");
                    }
                });
            });
        });
        const serviceDisplay = document.getElementById("serviceDisplay");
        const serviceMenu = document.getElementById("serviceMenu");
        const checkboxes = serviceMenu.querySelectorAll('input[type="checkbox"]');
        function updateServiceDisplay() {
            const selectedServices = Array.from(checkboxes)
                .filter((cb) => cb.checked)
                .map((cb) => cb.value);
            serviceDisplay.value = selectedServices.length ? selectedServices.join(", ") : "";
            if (!selectedServices.length) {
                serviceDisplay.placeholder = "Selectează serviciile dorite";
            }
        }
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", updateServiceDisplay);
        });
        const cityDisplay = document.getElementById("cityDisplay");
        const cityRadios = document.querySelectorAll('input[name="city"]');
        function updateCityDisplay() {
            const selectedCity = Array.from(cityRadios).find((radio) => radio.checked);
            cityDisplay.value = selectedCity ? selectedCity.value : "";
            if (!selectedCity) {
                cityDisplay.placeholder = "Selectează un oraș";
            }
            $(cityDisplay).dropdown("hide");
        }
        cityRadios.forEach((radio) => {
            radio.addEventListener("change", updateCityDisplay);
        });
        const intervalDisplay = document.getElementById("intervalDisplay");
        const intervalRadios = document.querySelectorAll('input[name="interval"]');
        function updateIntervalDisplay() {
            const selectedInterval = Array.from(intervalRadios).find((radio) => radio.checked);
            intervalDisplay.value = selectedInterval ? selectedInterval.value : "";
            if (!selectedInterval) {
                intervalDisplay.placeholder = "Selectează intervalul";
            }
            $(intervalDisplay).dropdown("hide");
        }
        intervalRadios.forEach((radio) => {
            radio.addEventListener("change", updateIntervalDisplay);
        });
        dropdowns.forEach((dropdown) => {
            dropdown.menu.addEventListener("click", function (e) {
                if (e.target.type === "checkbox" || e.target.type === "radio" || e.target.classList.contains("form-check-label")) {
                    e.stopPropagation();
                }
            });
        });
        document.getElementById("closeServiceMenu")?.addEventListener("click", function (e) {
            e.stopPropagation();
            $(serviceDisplay).dropdown("hide");
        });
    });
    function updateCityDisplay() {
        const selectedCity = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((radio) => radio.value)[0];
        document.getElementById("cityDisplay").value = selectedCity || "";
        if (selectedCity) {
            $(cityDisplay).dropdown("hide");
        }
    }
    document.querySelectorAll('input[name="city"]').forEach((radio) => {
        radio.addEventListener("change", () => {
            updateCityDisplay();
        });
    });
    document.getElementById("cityMenu")?.addEventListener("click", function (e) {
        if (e.target.type === "radio" || e.target.classList.contains("form-check-label")) {
            e.stopPropagation();
        }
    });
    document.getElementById("closeCityMenu")?.addEventListener("click", function (e) {
        e.stopPropagation();
        const selectedCity = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((radio) => radio.value)[0];
        document.getElementById("cityDisplay").value = selectedCity || "";
        $(cityDisplay).dropdown("hide");
    });
    document.getElementById("closeReviewCityMenu")?.addEventListener("click", function (e) {
        e.stopPropagation();
        const selectedCity = Array.from(document.querySelectorAll('input[name="reviewCity"]:checked')).map((radio) => radio.value)[0];
        document.getElementById("reviewCity").value = selectedCity || "";
        $(reviewCity).dropdown("hide");
    });
    document.querySelectorAll('input[name="reviewCity"]').forEach((radio) => {
        radio.addEventListener("change", () => {
            const selectedCity = radio.value;
            document.getElementById("reviewCity").value = selectedCity;
            $(reviewCity).dropdown("hide");
        });
    });
    function updateReviewServiceDisplay() {
        const selectedServices = Array.from(document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]:checked')).map((checkbox) => checkbox.value);
        document.getElementById("reviewService").value = selectedServices.join(", ");
    }
    document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener("change", updateReviewServiceDisplay);
    });
    document.getElementById("closeReviewServiceMenu")?.addEventListener("click", function (e) {
        e.stopPropagation();
        updateReviewServiceDisplay();
        $(reviewService).dropdown("hide");
    });
    function alignWithActiveCard() {
        if (window.innerWidth >= 992) {
            const leftContent = $(".review-section-bg .col-lg-5");
            const activeCard = $(".testimonial-carousel .owl-item.active .testimonial-item");
            if (leftContent.length && activeCard.length) {
                const cardTop = activeCard.offset().top;
                const cardHeight = activeCard.outerHeight();
                const cardCenter = cardTop + cardHeight / 2;
                const windowScrollTop = $(window).scrollTop();
                const relativePosition = cardCenter - windowScrollTop;
                leftContent.css("top", `${relativePosition}px`);
            }
        }
    }
    $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1000,
        margin: 30,
        dots: !1,
        loop: !0,
        nav: !0,
        center: !1,
        items: 1,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        onInitialized: function () {
            this.refresh();
        },
    });
    function navigateImages(direction) {
        const fullscreenImage = $("#fullscreen-image");
        if (direction === "left") {
            fullscreenImage.addClass("slide-right");
            $("#prev-image").click();
        } else if (direction === "right") {
            fullscreenImage.addClass("slide-left");
            $("#next-image").click();
        }
        fullscreenImage.on("animationend", function () {
            $(this).removeClass("slide-left slide-right");
        });
    }
    $(document).on("keydown", function (e) {
        if ($("#fullscreen-modal").hasClass("show")) {
            if (e.key === "ArrowLeft") {
                navigateImages("left");
            } else if (e.key === "ArrowRight") {
                navigateImages("right");
            }
        }
    });
    let touchStartX = 0;
    let touchEndX = 0;
    const handleSwipe = () => {
        if (touchEndX < touchStartX) {
            navigateImages("left");
        }
        if (touchEndX > touchStartX) {
            navigateImages("right");
        }
    };
    $("#fullscreen-modal").on("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    $("#fullscreen-modal").on("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    const modalImages = [
        { src: "img/imaginiGradini/Peisagistica/IMG-20241119-WA0047.webp", alt: "Garden Image 1" },
        { src: "img/imaginiGradini/Peisagistica/IMG-20241119-WA0048.webp", alt: "Garden Image 2" },
    ];
    function loadModalImages() {
        const modalImagesContainer = document.getElementById("modal-images");
        modalImagesContainer.innerHTML = "";
        modalImages.forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            img.className = "img-fluid mb-2";
            modalImagesContainer.appendChild(img);
        });
    }
    document.addEventListener("DOMContentLoaded", loadModalImages);
})(jQuery);
if (typeof db !== "undefined") {
    db.ref("test")
        .set({ test: "test" })
        .then(() => {
            console.log("Database write permission confirmed");
        })
        .catch((error) => {
            console.error("Database permission error:", error);
        });
} else {
    console.error("Firebase database not initialized");
}
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
        const rating = this.getAttribute("data-rating");
        updateStars(rating, !0);
    });
    star.addEventListener("mouseout", function () {
        updateStars(currentRating, !1);
    });
    star.addEventListener("click", function () {
        const rating = parseInt(this.getAttribute("data-rating"));
        currentRating = rating;
        updateStars(rating, !1);
    });
});
function updateStars(rating, isHover) {
    stars.forEach((star) => {
        const starRating = parseInt(star.getAttribute("data-rating"));
        if (starRating <= rating) {
            star.textContent = "★";
            if (!isHover) {
                star.classList.add("active");
            }
        } else {
            star.textContent = "☆";
            if (!isHover) {
                star.classList.remove("active");
            }
        }
    });
}
document.getElementById("review-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!currentRating || currentRating === 0) {
        alert("Vă rugăm să selectați un rating");
        return;
    }
    const formData = {
        name: document.getElementById("reviewName").value,
        service: document.getElementById("reviewService").value,
        title: document.getElementById("reviewTitle").value,
        rating: currentRating,
        city: document.getElementById("reviewCity").value,
        message: document.getElementById("reviewMessage").value,
        timestamp: Date.now(),
    };
    db.ref("reviews")
        .push(formData)
        .then(() => {
            document.getElementById("review-form").reset();
            stars.forEach((star) => {
                star.textContent = "☆";
                star.classList.remove("active");
            });
            currentRating = 0;
            toggleSections(!0);
            const addReviewBtn = document.getElementById("addReview");
            if (addReviewBtn.textContent === "Înapoi") {
                animateButtonText(addReviewBtn);
            }
            setTimeout(() => {
                const carousel = $(".testimonial-carousel");
                if (carousel.length) {
                    const totalItems = carousel.find(".owl-item").length;
                    carousel.trigger("to.owl.carousel", [totalItems - 1, 300]);
                }
            }, 500);
        })
        .catch((error) => {
            console.error("Eroare:", error);
            alert("Eroare: " + (error.message || "A apărut o eroare neașteptată"));
        });
});
const telegramBotToken = "8005755711:AAHSNRERi5O0jAosJc1FYkJd6OFxlcwS97U";
const telegramChatId = "5269217303";
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (cleanPhone.startsWith("+40")) {
        return cleanPhone.length === 12;
    }
    if (cleanPhone.startsWith("0")) {
        return cleanPhone.length === 10;
    }
    return !1;
}
document.getElementById("programareForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nume = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const selectedCityRadio = document.querySelector('input[name="city"]:checked');
    const city = selectedCityRadio ? selectedCityRadio.value : "";
    const selectedServices = Array.from(document.querySelectorAll('#serviceMenu input[type="checkbox"]:checked'))
        .map((checkbox) => checkbox.value)
        .join(", ");
    const selectedIntervalRadio = document.querySelector('input[name="interval"]:checked');
    const interval = selectedIntervalRadio ? selectedIntervalRadio.value : "";
    const surface = document.getElementById("surface")?.value?.trim() || "";
    const mesaj = document.getElementById("mesaj")?.value?.trim() || "";
    let errorMessage = "";
    if (!nume) {
        errorMessage += "• Vă rugăm să completați numele\n";
    } else if (nume.length < 3) {
        errorMessage += "• Numele trebuie să aibă cel puțin 3 caractere\n";
    }
    if (!phone) {
        errorMessage += "• Vă rugăm să completați numărul de telefon\n";
    } else if (!isValidPhone(phone)) {
        errorMessage += "• Numărul de telefon trebuie să fie în format valid:\n  - 10 cifre începând cu 0\n  - sau +40 urmat de 9 cifre\n";
    }
    if (!email) {
        errorMessage += "• Vă rugăm să completați adresa de email\n";
    } else if (!isValidEmail(email)) {
        errorMessage += "• Vă rugăm să introduceți o adresă de email validă\n";
    }
    if (!city) {
        errorMessage += "• Vă rugăm să selectați orașul\n";
    }
    if (!selectedServices) {
        errorMessage += "• Vă rugăm să selectați cel puțin un serviciu\n";
    }
    if (!interval) {
        errorMessage += "• Vă rugăm să selectați perioada aproximativă\n";
    }
    if (!surface) {
        errorMessage += "• Vă rugăm să completați suprafața aproximativă\n";
    } else if (isNaN(surface) || parseFloat(surface) <= 0) {
        errorMessage += "• Vă rugăm să introduceți o suprafață validă (număr pozitiv)\n";
    }
    if (errorMessage) {
        alert("Vă rugăm să corectați următoarele:\n\n" + errorMessage);
        return;
    }
    const message = `
🌿 Cerere nouă de contact client: 

👤 <b>Nume:</b> ${nume}

 <b>Telefon:</b> ${phone}

✉️ <b>Email:</b> ${email}

🏘️ <b>Oraș:</b> ${city}

🌱 <b>Servicii dorite:</b> ${selectedServices}

🗓️ <b>Perioada aproximativă:</b> ${interval}

📏 <b>Suprafața aproximativă:</b> ${surface} mp

📝 <b>Mesaj:</b> ${mesaj}`;
    try {
        const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: telegramChatId, text: message, parse_mode: "HTML" }),
        });
        if (response.ok) {
            alert("Mesaj trimis cu succes!");
            document.getElementById("programareForm").reset();
            document.getElementById("cityDisplay").value = "";
            document.getElementById("serviceDisplay").value = "";
            document.getElementById("intervalDisplay").value = "";
            document.querySelectorAll('input[type="radio"]').forEach((radio) => {
                radio.checked = !1;
            });
            document.querySelectorAll('#serviceMenu input[type="checkbox"]').forEach((checkbox) => {
                checkbox.checked = !1;
            });
            document.getElementById("cityDisplay").placeholder = "Selectează un oraș";
            document.getElementById("serviceDisplay").placeholder = "Selectează serviciile dorite";
            document.getElementById("intervalDisplay").placeholder = "Selectează intervalul";
        } else {
            const errorData = await response.json();
            console.error("Error response:", errorData);
            alert("A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("A apărut o eroare la trimiterea mesajului. Vă rugăm să verificați conexiunea la internet și să încercați din nou.");
    }
});
document.querySelectorAll('#serviceMenu input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const selectedServices = Array.from(document.querySelectorAll('#serviceMenu input[type="checkbox"]:checked')).map((checkbox) => checkbox.value);
        document.getElementById("serviceDisplay").value = selectedServices.join(", ");
    });
});
let currentRating = 0;
let isSubmitting = !1;
let previousReviewCount = 0;
let checkInterval;
function toggleSections(showReviews) {
    const reviewsSection = document.getElementById("reviews-section");
    const addReviewSection = document.getElementById("add-review-section");
    const showReviewsBtn = document.getElementById("showReviews");
    const addReviewBtn = document.getElementById("addReview");
    const fadeOutSection = showReviews ? addReviewSection : reviewsSection;
    const fadeInSection = showReviews ? reviewsSection : addReviewSection;
    fadeOutSection.style.transform = "translateY(-20px)";
    fadeOutSection.style.opacity = "0";
    setTimeout(() => {
        fadeOutSection.classList.remove("active");
        fadeInSection.classList.add("active");
        fadeInSection.style.transform = "translateY(0)";
        fadeInSection.style.opacity = "1";
        if (showReviews) {
            showReviewsBtn.classList.add("active");
            addReviewBtn.classList.remove("active");
            loadReviews();
        } else {
            showReviewsBtn.classList.remove("active");
            addReviewBtn.classList.add("active");
        }
    }, 300);
}
function animateButtonText(button) {
    const newText = button.textContent === "Adaugă" ? "Înapoi" : "Adaugă";
    button.classList.add("text-switching");
    setTimeout(() => {
        button.textContent = newText;
        button.classList.remove("text-switching");
    }, 150);
}
document.addEventListener("DOMContentLoaded", function () {
    const showReviewsBtn = document.getElementById("showReviews");
    const addReviewBtn = document.getElementById("addReview");
    const reviewsSection = document.getElementById("reviews-section");
    const addReviewSection = document.getElementById("add-review-section");
    const stars = document.querySelectorAll(".star");
    reviewsSection.classList.add("active");
    addReviewSection.classList.remove("active");
    loadReviews();
    addReviewBtn.addEventListener("focusout", () => {
        addReviewBtn.classList.add("#addReview:focus-within");
    });
    addReviewBtn.addEventListener("focus", () => {
        addReviewBtn.classList.remove("#addReview:focus-within");
    });
    showReviewsBtn.addEventListener("click", () => {
        showReviewsBtn.classList.remove("active");
        showReviewsBtn.blur();
        toggleSections(!0);
        if (addReviewBtn.textContent === "Înapoi") {
            animateButtonText(addReviewBtn);
        }
        setTimeout(() => {
            showReviewsBtn.classList.add("active");
        }, 300);
    });
    addReviewBtn.addEventListener("click", function () {
        const isShowingReviews = this.textContent === "Înapoi";
        if (isShowingReviews) {
            toggleSections(!0);
        } else {
            toggleSections(!1);
        }
        animateButtonText(this);
    });
});
function loadReviews() {
    db.ref("reviews").on("value", (snapshot) => {
        const reviewsData = snapshot.val();
        const reviewsContainer = document.querySelector(".testimonial-carousel");
        if ($.fn.owlCarousel) {
            $(".testimonial-carousel").owlCarousel("destroy");
        }
        if (!reviewsData) {
            reviewsContainer.innerHTML = "";
            initializeCarousel();
            return;
        }
        const reviewsArray = Object.entries(reviewsData).map(([key, value]) => ({ ...value, key }));
        const newerReviews = [...reviewsArray].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        const olderReviews = [...reviewsArray].sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        const reviewsHTML = [...olderReviews.slice(1).reverse(), newerReviews[0], ...newerReviews.slice(1)]
            .map(
                (review) => `
                <div class="testimonial-item bg-white rounded p-4 p-sm-5">
                    <div class="stars mb-2">
                        ${"★".repeat(review.rating || 5)}${"☆".repeat(5 - (review.rating || 5))}
                    </div>
                    <h1 class="mb-3">${review.title || ""}</h1>
                    <p class="fs-5 mb-4">"${review.message}"</p>
                    <div class="review-footer">
                        <h2 class="fw-bold mb-2">${review.name}</h2>
                        <div class="text-muted">
                            <span>${review.city || ""}</span>
                            ${review.service ? `<span>·</span><small>${review.service}</small>` : ""}
                        </div>
                    </div>
                </div>
            `
            )
            .join("");
        reviewsContainer.innerHTML = reviewsHTML;
        $(".testimonial-carousel").owlCarousel({
            autoplay: !0,
            smartSpeed: 1000,
            margin: 30,
            dots: !1,
            loop: !0,
            nav: !0,
            center: !1,
            items: 1,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            onInitialized: function () {
                this.refresh();
            },
        });
    });
}
function initializeCarousel(totalItems = 0) {
    $(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1000,
        center: !0,
        margin: 24,
        dots: !0,
        loop: totalItems > 1,
        nav: totalItems > 1,
        items: 1,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    });
}
$(document).ready(function () {
    const navbarToggler = $(".navbar-toggler");
    const navbar = $(".navbar-collapse");
    navbarToggler.on("click touchstart", function (e) {
        e.stopPropagation();
        $(this).focus();
    });
    $(document).on("click touchstart", function (e) {
        if (!$(e.target).closest(".navbar-toggler").length) {
            navbarToggler.blur();
            navbarToggler.removeClass("focus");
        }
    });
});
function showReviewForm() {
    const reviewSection = document.querySelector(".review-container");
    reviewSection.classList.add("review-section-transitioning");
    setTimeout(() => {
        document.getElementById("review-form").classList.add("active");
    }, 300);
}
function initializePortfolio() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const portfolioItems = document.querySelectorAll(".portfolio-inner");
        portfolioItems.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                item.classList.add("active");
            });
            item.addEventListener("mouseleave", () => {
                item.classList.remove("active");
            });
        });
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const rect = entry.target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementMiddle = rect.top + rect.height / 2;
                    const viewportMiddle = windowHeight / 2;
                    const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                    const threshold = windowHeight * 0.2;
                    if (distanceFromCenter < threshold) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: [0, 0.5, 1.0] }
        );
        document.querySelectorAll(".portfolio-inner").forEach((item) => {
            observer.observe(item);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".portfolio-inner")) {
        initializePortfolio();
    }
});
window.addEventListener("load", () => {
    if (document.querySelector(".portfolio-inner")) {
        initializePortfolio();
    }
});
$(document).ready(function () {
    $(".btn-estimate").on("click", function (e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            $(".navbar-collapse").collapse("hide");
            setTimeout(function () {
                const programareSection = document.getElementById("Programare");
                if (programareSection) {
                    programareSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
    });
});
function initializePortfolioPortofoliu() {
    const isPortfolioPage = document.body.classList.contains("portofoliu");
    if (isPortfolioPage && window.matchMedia("(max-width: 991.98px)").matches) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const rect = entry.target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementMiddle = rect.top + rect.height / 2;
                    const viewportMiddle = windowHeight / 2;
                    const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                    const threshold = windowHeight * 0.2;
                    if (distanceFromCenter < threshold) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: [0, 0.5, 1.0], rootMargin: "-20% 0px" }
        );
        document.querySelectorAll(".portfolio-inner-custom").forEach((item) => {
            observer.observe(item);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    initializePortfolioPortofoliu();
});
window.addEventListener("load", () => {
    initializePortfolioPortofoliu();
});
function initializePortofoliuScroll() {
    const isPortofoliuPage = document.body.classList.contains("portofoliu");
    if (isPortofoliuPage && window.matchMedia("(max-width: 991.98px)").matches) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const rect = entry.target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementMiddle = rect.top + rect.height / 2;
                    const viewportMiddle = windowHeight / 2;
                    const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                    const threshold = windowHeight * 0.2;
                    if (distanceFromCenter < threshold) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: [0, 0.5, 1.0], rootMargin: "-20% 0px" }
        );
        const portfolioItems = document.querySelectorAll(".portfolio-inner-custom");
        if (portfolioItems.length > 0) {
            portfolioItems.forEach((item) => {
                observer.observe(item);
            });
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    initializePortofoliuScroll();
});
window.addEventListener("load", () => {
    initializePortofoliuScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = [
        { input: document.getElementById("cityDisplay"), menu: document.getElementById("cityMenu") },
        { input: document.getElementById("serviceDisplay"), menu: document.getElementById("serviceMenu") },
        { input: document.getElementById("intervalDisplay"), menu: document.getElementById("intervalMenu") },
    ];
    dropdowns.forEach((dropdown) => {
        $(dropdown.input).on("show.bs.dropdown", function () {
            dropdowns.forEach((other) => {
                if (other.input !== this) {
                    $(other.input).dropdown("hide");
                }
            });
        });
    });
    const serviceDisplay = document.getElementById("serviceDisplay");
    const serviceMenu = document.getElementById("serviceMenu");
    const checkboxes = serviceMenu.querySelectorAll('input[type="checkbox"]');
    function updateServiceDisplay() {
        const selectedServices = Array.from(checkboxes)
            .filter((cb) => cb.checked)
            .map((cb) => cb.value);
        serviceDisplay.value = selectedServices.length ? selectedServices.join(", ") : "";
        if (!selectedServices.length) {
            serviceDisplay.placeholder = "Selectează serviciile dorite";
        }
    }
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateServiceDisplay);
    });
    const cityDisplay = document.getElementById("cityDisplay");
    const cityRadios = document.querySelectorAll('input[name="city"]');
    function updateCityDisplay() {
        const selectedCity = Array.from(cityRadios).find((radio) => radio.checked);
        cityDisplay.value = selectedCity ? selectedCity.value : "";
        if (!selectedCity) {
            cityDisplay.placeholder = "Selectează un oraș";
        }
        $(cityDisplay).dropdown("hide");
    }
    cityRadios.forEach((radio) => {
        radio.addEventListener("change", updateCityDisplay);
    });
    const intervalDisplay = document.getElementById("intervalDisplay");
    const intervalRadios = document.querySelectorAll('input[name="interval"]');
    function updateIntervalDisplay() {
        const selectedInterval = Array.from(intervalRadios).find((radio) => radio.checked);
        intervalDisplay.value = selectedInterval ? selectedInterval.value : "";
        if (!selectedInterval) {
            intervalDisplay.placeholder = "Selectează intervalul";
        }
        $(intervalDisplay).dropdown("hide");
    }
    intervalRadios.forEach((radio) => {
        radio.addEventListener("change", updateIntervalDisplay);
    });
    dropdowns.forEach((dropdown) => {
        dropdown.menu.addEventListener("click", function (e) {
            if (e.target.type === "checkbox" || e.target.type === "radio" || e.target.classList.contains("form-check-label")) {
                e.stopPropagation();
            }
        });
    });
    document.getElementById("closeServiceMenu")?.addEventListener("click", function (e) {
        e.stopPropagation();
        $(serviceDisplay).dropdown("hide");
    });
});
function updateCityDisplay() {
    const selectedCity = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((radio) => radio.value)[0];
    document.getElementById("cityDisplay").value = selectedCity || "";
    if (selectedCity) {
        $(cityDisplay).dropdown("hide");
    }
}
document.querySelectorAll('input[name="city"]').forEach((radio) => {
    radio.addEventListener("change", () => {
        updateCityDisplay();
    });
});
document.getElementById("cityMenu")?.addEventListener("click", function (e) {
    if (e.target.type === "radio" || e.target.classList.contains("form-check-label")) {
        e.stopPropagation();
    }
});
document.getElementById("closeCityMenu")?.addEventListener("click", function (e) {
    e.stopPropagation();
    const selectedCity = Array.from(document.querySelectorAll('input[name="city"]:checked')).map((radio) => radio.value)[0];
    document.getElementById("cityDisplay").value = selectedCity || "";
    $(cityDisplay).dropdown("hide");
});
document.getElementById("closeReviewCityMenu")?.addEventListener("click", function (e) {
    e.stopPropagation();
    const selectedCity = Array.from(document.querySelectorAll('input[name="reviewCity"]:checked')).map((radio) => radio.value)[0];
    document.getElementById("reviewCity").value = selectedCity || "";
    $(reviewCity).dropdown("hide");
});
document.querySelectorAll('input[name="reviewCity"]').forEach((radio) => {
    radio.addEventListener("change", () => {
        const selectedCity = radio.value;
        document.getElementById("reviewCity").value = selectedCity;
        $(reviewCity).dropdown("hide");
    });
});
function updateReviewServiceDisplay() {
    const selectedServices = Array.from(document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]:checked')).map((checkbox) => checkbox.value);
    document.getElementById("reviewService").value = selectedServices.join(", ");
}
document.querySelectorAll('#reviewServiceMenu input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", updateReviewServiceDisplay);
});
document.getElementById("closeReviewServiceMenu")?.addEventListener("click", function (e) {
    e.stopPropagation();
    updateReviewServiceDisplay();
    $(reviewService).dropdown("hide");
});
function alignWithActiveCard() {
    if (window.innerWidth >= 992) {
        const leftContent = $(".review-section-bg .col-lg-5");
        const activeCard = $(".testimonial-carousel .owl-item.active .testimonial-item");
        if (leftContent.length && activeCard.length) {
            const cardTop = activeCard.offset().top;
            const cardHeight = activeCard.outerHeight();
            const cardCenter = cardTop + cardHeight / 2;
            const windowScrollTop = $(window).scrollTop();
            const relativePosition = cardCenter - windowScrollTop;
            leftContent.css("top", `${relativePosition}px`);
        }
    }
}
$(".testimonial-carousel").owlCarousel({
    autoplay: !0,
    smartSpeed: 1000,
    margin: 30,
    dots: !1,
    loop: !0,
    nav: !0,
    center: !1,
    items: 1,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    onInitialized: function () {
        this.refresh();
    },
});
$(document).ready(function () {
    $("#common-modal")
        .off("hidden.bs.modal")
        .on("hidden.bs.modal", function () {
            $(".btn-close, #prev-category, #next-category").blur();
            setTimeout(() => {
                $(this).removeAttr("aria-hidden");
                document.body.focus();
                $(this).find(".modal-dialog").removeAttr("aria-hidden");
                $(".modal-backdrop").remove();
            }, 100);
        });
    $("#fullscreen-modal")
        .off("hidden.bs.modal")
        .on("hidden.bs.modal", function () {
            $(".btn-close, #prev-image, #next-image").blur();
            $(this).removeAttr("aria-hidden");
            $("body").attr("tabindex", "-1").focus().removeAttr("tabindex");
        });
});

    function renderBlurHash(blurHash, canvas) {
        const pixels = blurhash.decode(blurHash, 32, 32);
        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(32, 32);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const canvases = document.querySelectorAll(".blurhash-canvas");

        canvases.forEach((canvas) => {
            const blurHash = canvas.getAttribute("data-blurhash");
            renderBlurHash(blurHash, canvas);

            const img = canvas.nextElementSibling;
            img.addEventListener("load", () => {
                canvas.style.display = "none";
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
          const carousel = new bootstrap.Carousel(document.querySelector('#header-carousel'));
          carousel.cycle();
        }, 3000);
      });
