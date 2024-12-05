(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
  
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm scrolled').css('top', '5px');
        } else {
            $('.sticky-top').removeClass('shadow-sm scrolled').css('top', '0');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    $(document).ready(function() {
        const contactButton = $('#contact-button');
        const contactPopup = $('#contact-popup');
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        if (isMobile) {
            // Mobile-specific handlers
            contactButton.on('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (contactPopup.hasClass('show')) {
                    contactPopup.removeClass('show');
                    setButtonToDark();
                } else {
                    contactPopup.addClass('show');
                    setButtonToLight();
                }
            });

            $(document).on('touchstart', function(e) {
                if (!$(e.target).closest('#contact-button, #contact-popup').length) {
                    if (contactPopup.hasClass('show')) {
                        contactPopup.removeClass('show');
                        setButtonToDark();
                    }
                }
            });

            $(window).on('scroll', function() {
                if (contactPopup.hasClass('show')) {
                    contactPopup.removeClass('show');
                    setButtonToDark();
                }
            });
        } else {
            // Desktop handlers (unchanged)
            contactButton.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (contactPopup.hasClass('show')) {
                    contactPopup.removeClass('show');
                    setButtonToDark();
                } else {
                    contactPopup.addClass('show');
                    setButtonToLight();
                }
            });

            $(document).on('click', function(e) {
                if (!$(e.target).closest('#contact-button, #contact-popup').length) {
                    if (contactPopup.hasClass('show')) {
                        contactPopup.removeClass('show');
                        setButtonToDark();
                    }
                }
            });

            $(window).on('scroll', function() {
                if (contactPopup.hasClass('show')) {
                    contactPopup.removeClass('show');
                    setButtonToDark();
                }
            });
        }

        function setButtonToLight() {
            contactButton.css('background-color', '#4CAF50'); // Vibrant green color
            contactButton.css('color', '#ffffff'); // White icon
        }

        function setButtonToDark() {
            contactButton.css('background-color', '#4CAF50'); // Vibrant green color
            contactButton.css('color', '#ffffff'); // White icon
        }
    });

    $(document).ready(function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        entry.target.classList.add('in-view');
                        entry.target.classList.remove('out-view');
                    } else {
                        entry.target.classList.remove('in-view');
                        entry.target.classList.add('out-view');
                    }
                });
            }, {
                threshold: 0.5,
                rootMargin: '-10% 0px'
            });

            document.querySelectorAll('.portfolio-inner').forEach(item => {
                observer.observe(item);
            });
        }
    });

})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
    const splashContainer = document.getElementById('splash-container');
    const splashVideo = document.getElementById('splash-video');
    const body = document.body;

    const videoSources = {
        mobile: 'img/imaginiGradini/GazonAZVideoPhone3.mp4',
        mobileWide: 'img/imaginiGradini/1080x2560fast.mp4',
        tablet: 'img/imaginiGardini/1080x2560fast.mp4',
        largeDevices: 'img/imaginiGradini/1920x1080fast.mp4',
        desktop: 'img/imaginiGardini/1920x1080fast.mp4'
    };

    function getVideoSource() {
        const screenWidth = window.innerWidth;
        console.log('Screen width:', screenWidth);
        
        if (screenWidth <= 600) {
            console.log('Selecting mobile');
            return videoSources.mobile;
        }
        if (screenWidth <= 1024) {
            console.log('Selecting mobile wide');
            return videoSources.mobileWide;
        }
        if (screenWidth <= 1366) {
            console.log('Selecting tablet');
            return videoSources.tablet;
        }
        if (screenWidth <= 1920) {
            console.log('Selecting large devices');
            return videoSources.largeDevices;
        }
        console.log('Selecting desktop');
        return videoSources.desktop;
    }

    function setVideoSource() {
        const source = getVideoSource();
        console.log('Full source path:', source);
        
        splashVideo.src = source;
        splashVideo.load();
        
        splashVideo.onloadedmetadata = () => {
            console.log('Metadata loaded, attempting to play');
            splashVideo.play().catch(error => {
                console.error('Autoplay error:', error);

                hideSplashScreen();
            });
        };

        splashVideo.onerror = (e) => {
            console.error('Video error:', e);

            hideSplashScreen();
        };
    }

    function hideSplashScreen() {
        splashContainer.classList.add('hidden');
        body.classList.add('loaded');
        setTimeout(() => {
            splashContainer.style.display = 'none';
        }, 500);
    }

    setVideoSource();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setVideoSource, 250);
    });

    splashVideo.addEventListener('ended', hideSplashScreen);
    setTimeout(hideSplashScreen, 2000);


    if (typeof db !== 'undefined') {
        db.ref('test').set({
            test: 'test'
        })
        .then(() => {
            console.log('Database write permission confirmed');
        })
        .catch(error => {
            console.error('Database permission error:', error);
        });
    } else {
        console.error('Firebase database not initialized');
    }

    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star) => {
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            updateStars(rating, true);
        });

        star.addEventListener('mouseout', function() {
            updateStars(currentRating, false);
        });

        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            updateStars(rating, false);
        });
    });

    function updateStars(rating, isHover) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.textContent = '★';
                if (!isHover) {
                    star.classList.add('active');
                }
            } else {
                star.textContent = '☆';
                if (!isHover) {
                    star.classList.remove('active');
                }
            }
        });
    }

    document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!currentRating || currentRating === 0) {
            alert('Vă rugăm să selectați un rating');
            return;
        }
        
        const formData = {
            name: document.getElementById('reviewName').value,
            service: document.getElementById('reviewService').value,
            title: document.getElementById('reviewTitle').value,
            rating: currentRating,
            city: document.getElementById('reviewCity').value,
            message: document.getElementById('reviewMessage').value,
            timestamp: Date.now()
        };
        
        db.ref('reviews').push(formData)
            .then(() => {
                // Reset form and rating stars
                document.getElementById('review-form').reset();
                stars.forEach(star => {
                    star.textContent = '☆';
                    star.classList.remove('active');
                });
                currentRating = 0;

                // Switch back to reviews section
                toggleSections(true);
                
                // Reset the "Add Review" button text if needed
                const addReviewBtn = document.getElementById('addReview');
                if (addReviewBtn.textContent === 'Înapoi') {
                    animateButtonText(addReviewBtn);
                }

                // Force carousel to show the last item (latest review)
                setTimeout(() => {
                    const carousel = $('.testimonial-carousel');
                    if (carousel.length) {
                        const totalItems = carousel.find('.owl-item').length;
                        carousel.trigger('to.owl.carousel', [totalItems - 1, 300]);
                    }
                }, 500);
            })
            .catch(error => {
                console.error('Eroare:', error);
                alert('Eroare: ' + (error.message || 'A apărut o eroare neașteptată'));
            });
    });
});

const telegramBotToken = "8005755711:AAHSNRERi5O0jAosJc1FYkJd6OFxlcwS97U";
const telegramChatId = "5269217303";

document.getElementById("estimareForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const service = document.getElementById("service").value;
    const mesaj = document.getElementById("mesaj").value;
    const interval = document.getElementById("interval").value;

    const message = `
🌿 Cerere nouă de contact client: 

👤 <b>Nume:</b> ${nume}

✉️ <b>Email:</b> ${email}

📞 <b>Telefon:</b> ${phone}

🏘️ <b>Oraș:</b> ${city}

🌱 <b>Serviciu:</b> ${service}

🗓️ <b>Perioada aproximativă:</b> ${interval}

📝 <b>Mesaj:</b> ${mesaj}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}&parse_mode=HTML`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.ok) {
            alert = ("Mesaj trimis cu succes!");
            document.getElementById("estimareForm").reset();
        } else {
            alert = "A apărut o eroare la trimiterea mesajului.";
            console.log("Error:"+ response.status);
            document.getElementById("estimareForm").reset();
        }
    } catch (error) {
        console.log = ("Error:"+ error.messsage);
    }
});

let currentRating = 0;
let isSubmitting = false;
let previousReviewCount = 0;
let checkInterval;

function toggleSections(showReviews) {
    const reviewsSection = document.getElementById('reviews-section');
    const addReviewSection = document.getElementById('add-review-section');
    const showReviewsBtn = document.getElementById('showReviews');
    const addReviewBtn = document.getElementById('addReview');

    const fadeOutSection = showReviews ? addReviewSection : reviewsSection;
    const fadeInSection = showReviews ? reviewsSection : addReviewSection;
    
    fadeOutSection.style.transform = 'translateY(-20px)';
    fadeOutSection.style.opacity = '0';
    
    setTimeout(() => {
        fadeOutSection.classList.remove('active');
        fadeInSection.classList.add('active');
        fadeInSection.style.transform = 'translateY(0)';
        fadeInSection.style.opacity = '1';
        
        if (showReviews) {
            showReviewsBtn.classList.add('active');
            addReviewBtn.classList.remove('active');
            loadReviews();
        } else {
            showReviewsBtn.classList.remove('active');
            addReviewBtn.classList.add('active');
        }
    }, 300);
}

function animateButtonText(button) {
    const newText = button.textContent === 'Adaugă' ? 'Înapoi' : 'Adaug';
    button.classList.add('text-switching');
    
    setTimeout(() => {
        button.textContent = newText;
        button.classList.remove('text-switching');
    }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
    const showReviewsBtn = document.getElementById('showReviews');
    const addReviewBtn = document.getElementById('addReview');
    const reviewsSection = document.getElementById('reviews-section');
    const addReviewSection = document.getElementById('add-review-section');
    const stars = document.querySelectorAll('.star');

    reviewsSection.classList.add('active');
    addReviewSection.classList.remove('active');
    loadReviews();

    addReviewBtn.addEventListener('focusout', () => {
        addReviewBtn.classList.add('#addReview:focus-within');
    });

    addReviewBtn.addEventListener('focus', () => {
        addReviewBtn.classList.remove('#addReview:focus-within');
    });

  
    showReviewsBtn.addEventListener('click', () => {
        toggleSections(true);
        if (addReviewBtn.textContent === 'Înapoi') {
            animateButtonText(addReviewBtn);
        }
    });
    

    addReviewBtn.addEventListener('click', function() {
        const isShowingReviews = this.textContent === 'Înapoi';
        if (isShowingReviews) {
            toggleSections(true);
        } else {
            toggleSections(false);
        }
        animateButtonText(this);
    });

});

function loadReviews() {
    db.ref('reviews').on('value', (snapshot) => {
        const reviews = snapshot.val();
        const reviewsContainer = document.querySelector('.testimonial-carousel');
        
        if (!reviews) {
            reviewsContainer.innerHTML = '';
            initializeCarousel();
            return;
        }

        // Convert to array maintaining database order
        const reviewsArray = Object.entries(reviews)
            .map(([key, value]) => ({
                ...value,
                key
            }));
        
        if ($.fn.owlCarousel) {
            $('.testimonial-carousel').owlCarousel('destroy');
        }
        
        reviewsContainer.innerHTML = reviewsArray.map(review => `
            <div class="testimonial-item bg-white rounded p-4 p-sm-5">
                <div class="stars mb-2">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
                <h4>${review.name}</h4>
                <h3 class="mb-3">${review.title}</h3>
                <p class="fs-5">"${review.message}"</p>
                <span>${review.city}</span>
                <span>·</span>
                <small class="text-muted">${review.service}</small>
            </div>
        `).join('');

        // Initialize carousel with the last item as default position
        $('.testimonial-carousel').owlCarousel({
            autoplay: false,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: true,
            startPosition: reviewsArray.length - 1, // Start from last item
            items: 1,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });

        const mockReviews = document.querySelector('.mock-reviews');
        if (mockReviews) {
            mockReviews.style.display = reviewsArray.length > 0 ? 'none' : 'block';
        }
    });
}

function initializeCarousel(totalItems = 0) {
    $('.testimonial-carousel').owlCarousel({
        autoplay: false, // Disabled autoplay to maintain position
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: totalItems > 1,
        nav: totalItems > 1,
        startPosition: 0, // Always start with newest review
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 1 }
        }
    });
}

$(document).ready(function() {
    let lastScrollTop = 0;
    let scrollThreshold = 50;
    
    // Use jQuery consistently for events
    contactButton.on('click touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        popup.toggleClass('show');
    });

    // Handle document clicks
    $(document).on('click touchstart', function(e) {
        if (popup.hasClass('show') && 
            !popup.is(e.target) && 
            !popup.has(e.target).length && 
            !contactButton.is(e.target) && 
            !contactButton.has(e.target).length) {
            popup.removeClass('show');
        }
    });

    // Handle scroll
    $(window).on('scroll', function() {
        let currentScroll = $(this).scrollTop();
        if (popup.hasClass('show')) {
            if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                popup.removeClass('show');
            }
        }
        lastScrollTop = currentScroll;
    });
});

$(document).ready(function() {
    let lastScrollTop = 0;
    let scrollThreshold = 50;
    let popup = document.getElementById('contact-popup');
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        
        if (popup.classList.contains('show')) {
            if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                popup.classList.remove('show');
            }
        }
        
        lastScrollTop = currentScroll;
    });
});

$(document).ready(function() {
    const contactButton = $('#contact-button');
    const contactPopup = $('#contact-popup');
    let lastScrollTop = 0;
    const scrollThreshold = 50;

    $(window).on('scroll', function() {
        let currentScroll = $(this).scrollTop();
        
        if (contactPopup.hasClass('show')) {
            if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                contactPopup.removeClass('show');
                contactButton.removeClass('scrolled reverting');
            } else {
                contactButton.addClass('scrolled');
            }
        } else {
            contactButton.removeClass('scrolled');
        }

        lastScrollTop = currentScroll;
    });

    contactButton.on('click', function() {
        if (contactPopup.hasClass('show')) {
            contactButton.addClass('reverting');
        } else {
            contactButton.removeClass('reverting');
        }
    });
});

