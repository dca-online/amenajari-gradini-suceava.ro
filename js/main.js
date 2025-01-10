(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
                if (portfolioIsotope) {
                    portfolioIsotope.isotope('layout');
                }
            }
        }, 1);
    };
    spinner();
  
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
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

    var portfolioIsotope;

    function initPortfolioIsotope() {
        if ($('.portfolio-container').length) {
            portfolioIsotope = $('.portfolio-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                initLayout: true
            });
            
            setTimeout(function() {
                portfolioIsotope.isotope('layout');
            }, 100);
        }
    }

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
        let isAnimating = false;
        let lastScrollTop = 0;
        const scrollThreshold = 5;

        contactButton.off();
        $(document).off('click.contactPopup touchstart.contactPopup');
        $(window).off('scroll.contactPopup');

        contactButton.on('click touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (isAnimating) return;
            
            isAnimating = true;
            setTimeout(() => isAnimating = false, 300);
            
            if (contactPopup.hasClass('show')) {
                closePopup();
            } else {
                openPopup();
            }
        });

        $(document).on('click.contactPopup touchstart.contactPopup', function(e) {
            if (!$(e.target).closest('#contact-button, #contact-popup').length) {
                if (contactPopup.hasClass('show')) {
                    closePopup();
                }
            }
        });

        $(window).on('scroll.contactPopup', function() {
            let currentScroll = $(this).scrollTop();
            
            if (contactPopup.hasClass('show')) {
                if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                    closePopup();
                }
            }
            
            lastScrollTop = currentScroll;
        });

        function openPopup() {
            contactPopup.addClass('show');
            contactButton.addClass('active');
        }

        function closePopup() {
            contactPopup.removeClass('show');
            contactButton.removeClass('active');
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

    $(document).ready(function() {
        $('#featureCarousel').carousel({
            interval: 3000,
            ride: 'carousel',
            pause: 'hover'
        });
    });

    $(document).ready(function() {
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleCarouselVisibility() {
            const carousel = document.querySelector('#featureCarousel');
            if (carousel) {
                if (isElementInViewport(carousel)) {
                    carousel.classList.add('in-viewport');
                } else {
                    carousel.classList.remove('in-viewport');
                }
            }
        }

        $(window).on('scroll resize', handleCarouselVisibility);
        
        handleCarouselVisibility();
    });

    $(document).ready(function() {
        $('.portfolio-container').imagesLoaded(function() {
            initPortfolioIsotope();
        });

        $(window).on('resize', function() {
            if (portfolioIsotope) {
                portfolioIsotope.isotope('layout');
            }
        });

        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
            if (portfolioIsotope) {
                portfolioIsotope.isotope('layout');
            }
        });
    });

})(jQuery);


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

                document.getElementById('review-form').reset();
                stars.forEach(star => {
                    star.textContent = '☆';
                    star.classList.remove('active');
                });
                currentRating = 0;

                toggleSections(true);

                const addReviewBtn = document.getElementById('addReview');
                if (addReviewBtn.textContent === 'Înapoi') {
                    animateButtonText(addReviewBtn);
                }

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
 Cerere nouă de contact client: 

👤 <b>Nume:</b> ${nume}

️ <b>Email:</b> ${email}

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
    const newText = button.textContent === 'Adaugă' ? 'Înapoi' : 'Adaugă';
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

        showReviewsBtn.classList.remove('active');
        showReviewsBtn.blur(); 
        
        toggleSections(true);
        if (addReviewBtn.textContent === 'Înapoi') {
            animateButtonText(addReviewBtn);
        }
        
        setTimeout(() => {
            showReviewsBtn.classList.add('active');
        }, 300);
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
        
        if ($.fn.owlCarousel) {
            $('.testimonial-carousel').owlCarousel('destroy');
        }

        if (!reviews) {
            reviewsContainer.innerHTML = '';
            initializeCarousel();
            return;
        }

        const reviewsArray = Object.entries(reviews)
            .map(([key, value]) => ({
                ...value,
                key
            }));

        const newerReviews = [...reviewsArray]
            .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            
        const olderReviews = [...reviewsArray]
            .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

        const reviewsHTML = [...olderReviews.slice(1).reverse(), newerReviews[0], ...newerReviews.slice(1)]
            .map(review => `
                <div class="testimonial-item bg-white rounded p-4 p-sm-5">
                    <div class="stars mb-2">
                        ${'★'.repeat(review.rating || 5)}${'☆'.repeat(5 - (review.rating || 5))}
                    </div>
                    <h4>${review.name}</h4>
                    <p class="fs-5">"${review.message}"</p>
                    <span>${review.city || ''}</span>
                    ${review.service ? `<span>·</span>
                    <small class="text-muted">${review.service}</small>` : ''}
                </div>
            `).join('');

        reviewsContainer.innerHTML = reviewsHTML;

        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: reviewsArray.length > 1,
            nav: reviewsArray.length > 1,
            items: 1,
            startPosition: olderReviews.length - 1,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            onInitialized: function(event) {
                const owl = $('.testimonial-carousel').data('owl.carousel');

                $('.owl-prev').on('click', function(e) {
                    e.preventDefault();
                    const current = owl.relative(owl.current());
                    
                    if (current <= olderReviews.length) {
                        owl.to(current - 1);
                    } else {
                        owl.prev();
                    }
                });
            }
        });
    });
}

function initializeCarousel(totalItems = 0) {
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: totalItems > 1,
        nav: totalItems > 1,
        items: 1,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
}

$(document).ready(function() {
    const navbarToggler = $('.navbar-toggler');
    const navbar = $('.navbar-collapse');
    
    navbarToggler.on('click touchstart', function(e) {
        e.stopPropagation();
        $(this).focus();
    });
    
    $(document).on('click touchstart', function(e) {
        if (!$(e.target).closest('.navbar-toggler').length) {
            navbarToggler.blur();
            navbarToggler.removeClass('focus');
        }
    });
});

function showReviewForm() {
    const reviewSection = document.querySelector('.review-container');
    reviewSection.classList.add('review-section-transitioning');
    
    setTimeout(() => {
        document.getElementById('review-form').classList.add('active');
    }, 300);
}

function initializePortfolio() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const portfolioItems = document.querySelectorAll('.portfolio-inner');
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            });
        });
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const rect = entry.target.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementMiddle = rect.top + (rect.height / 2);
                const viewportMiddle = windowHeight / 2;
                
                const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                const threshold = windowHeight * 0.2;
                
                if (distanceFromCenter < threshold) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: [0, 0.5, 1.0],
        });

        document.querySelectorAll('.portfolio-inner').forEach(item => {
            observer.observe(item);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.portfolio-inner')) {
        initializePortfolio();
    }
});

window.addEventListener('load', () => {
    if (document.querySelector('.portfolio-inner')) {
        initializePortfolio();
    }
});

$(document).ready(function() {
    $('.btn-estimate').on('click', function(e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            
            $('.navbar-collapse').collapse('hide');
            
            setTimeout(function() {

                const estimareSection = document.getElementById('Estimare');
                if (estimareSection) {
                    estimareSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    });
});

function initializePortfolioPortofoliu() {
    const isPortfolioPage = document.body.classList.contains('portofoliu');
    
    if (isPortfolioPage && window.matchMedia("(max-width: 991.98px)").matches) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const rect = entry.target.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementMiddle = rect.top + (rect.height / 2);
                const viewportMiddle = windowHeight / 2;

                const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                const threshold = windowHeight * 0.2;

                if (distanceFromCenter < threshold) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: [0, 0.5, 1.0],
            rootMargin: '-20% 0px'
        });
        
        document.querySelectorAll('.portfolio-inner-custom').forEach(item => {
            observer.observe(item);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolioPortofoliu();
});

window.addEventListener('load', () => {
    initializePortfolioPortofoliu();
});

function initializePortofoliuScroll() {
    const isPortofoliuPage = document.body.classList.contains('portofoliu');
    
    if (isPortofoliuPage && window.matchMedia("(max-width: 991.98px)").matches) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const rect = entry.target.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementMiddle = rect.top + (rect.height / 2);
                const viewportMiddle = windowHeight / 2;
                
                const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);
                const threshold = windowHeight * 0.2;
                
                if (distanceFromCenter < threshold) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: [0, 0.5, 1.0],
            rootMargin: '-20% 0px'
        });
        
        const portfolioItems = document.querySelectorAll('.portfolio-inner-custom');
        if (portfolioItems.length > 0) {
            portfolioItems.forEach(item => {
                observer.observe(item);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializePortofoliuScroll();
});

window.addEventListener('load', () => {
    initializePortofoliuScroll();
});
