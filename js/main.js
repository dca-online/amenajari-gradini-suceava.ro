function getStarRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
 
db.ref('test').set({
    test: 'test'
})
.then(() => {
    console.log('Database write permission confirmed');
})
.catch(error => {
    console.error('Database permission error:', error);
});

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
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
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
            });
        };

        splashVideo.onerror = (e) => {
            console.error('Video error:', e);
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
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#estimareForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                city: document.getElementById('city').value,
                message: document.getElementById('message').value
            };
            
            fetch("https://proiectbeutesting.web.app", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors',
                credentials: "include",
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                alert('Mesaj trimis cu succes! Vă vom contacta în curând.');
                form.reset();
            })
            .catch(error => {
                console.error('Eroare:', error);
                alert('A apărut o eroare. Vă rugăm să încercați din nou.');
            });
        });
    }
});

let currentRating = 0;
let isSubmitting = false;
let previousReviewCount = 0;
let checkInterval;


document.addEventListener('DOMContentLoaded', function() {

    const showReviewsBtn = document.getElementById('showReviews');
    const addReviewBtn = document.getElementById('addReview');
    const reviewsSection = document.getElementById('reviews-section');
    const addReviewSection = document.getElementById('add-review-section');
    const stars = document.querySelectorAll('.star');

    loadReviews();


    addReviewBtn.addEventListener('focusout', () => {
        addReviewBtn.classList.add('#addReview:focus-within');
    });

    addReviewBtn.addEventListener('focus', () => {
        addReviewBtn.classList.remove('#addReview:focus-within');
    });

    function toggleSections(showReviews) {
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
            } else {
                showReviewsBtn.classList.remove('active');
                addReviewBtn.classList.add('active');
            }
        }, 300);
    }

    function animateButtonText(button) {
        const newText = button.textContent === 'Adaugă Review' ? 'Înapoi' : 'Adaugă Review';
        button.classList.add('text-switching');
        
        setTimeout(() => {
            button.textContent = newText;
            button.classList.remove('text-switching');
        }, 150);
    }

    showReviewsBtn.addEventListener('click', () => {
        toggleSections(true);
        const addReviewButton = document.getElementById('addReview');
        if (addReviewButton.textContent === 'Înapoi') {
            animateButtonText(addReviewButton);
        }
    });
    
    addReviewBtn.addEventListener('click', function() {
        const button = this;
        const newText = button.textContent === 'Adaugă Review' ? 'Înapoi' : 'Adaugă Review';
        animateButtonText(this);
        toggleSections(!reviewsSection.classList.contains('active'));

        button.style.transform = 'translateZ(0)';
        button.classList.add('text-switching');

        requestAnimationFrame(() => {
            button.style.opacity = '0';
            button.style.transform = 'translateY(-5px) translateZ(0)';
            
            requestAnimationFrame(() => {
                setTimeout(() => {
                    button.textContent = newText;
                    
                    requestAnimationFrame(() => {
                        button.style.opacity = '1';
                        button.style.transform = 'translateY(0) translateZ(0)';
                        button.classList.remove('text-switching');
                    });
                }, 100);
            });
        });
     document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();
           if (isSubmitting) return;
           if (!currentRating || currentRating === 0) {
                alert('Vă rugăm să selectați un rating');
                return;
            }
            
            isSubmitting = true;
        
            const formData = {
                name: document.getElementById('reviewName').value,
                service: document.getElementById('reviewService').value,
                title: document.getElementById('reviewTitle').value,
                rating: parseInt(currentRating),
                city: document.getElementById('reviewCity').value,
                message: document.getElementById('reviewMessage').value,
                date: new Date().toISOString()
            };

            if (reviewsSection.classList.contains('active')) {
                requestAnimationFrame(() => {
                    reviewsSection.style.transform = 'translateY(-20px)';
                    reviewsSection.style.opacity = '0';
                
                setTimeout(() => {
                    reviewsSection.classList.remove('active');
                    addReviewSection.classList.add('active');
                    
                    requestAnimationFrame(() => {
                        addReviewSection.style.transform = 'translateY(0)';
                        addReviewSection.style.opacity = '1';
                        button.classList.add('active');
                    });
                }, 300);
            });
             } else {
            requestAnimationFrame(() => {
                addReviewSection.style.transform = 'translateY(-20px)';
                addReviewSection.style.opacity = '0';
                
                setTimeout(() => {
                    addReviewSection.classList.remove('active');
                    reviewsSection.classList.add('active');
                    
                    requestAnimationFrame(() => {
                        reviewsSection.style.transform = 'translateY(0)';
                        reviewsSection.style.opacity = '1';
                        button.classList.remove('active');
                    });
                }, 300);
            });
        }
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.textContent = '★';
                star.classList.add('active');
            } else {
                star.textContent = '☆';
                star.classList.remove('active');
            }
        });
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            highlightStars(this.getAttribute('data-rating'));
        });

        star.addEventListener('mouseout', () => {
            highlightStars(currentRating);
        });

        star.addEventListener('click', function() {
            currentRating = this.getAttribute('data-rating');
            highlightStars(currentRating);
        });
    });
});

document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    if (!currentRating || currentRating === 0) {
        alert('Vă rugăm să selectați un rating');
        return;
    }
    
    isSubmitting = true;

    const formData = {
        name: document.getElementById('reviewName').value,
        service: document.getElementById('reviewService').value,
        title: document.getElementById('reviewTitle').value,
        rating: currentRating,
        city: document.getElementById('reviewCity').value,
        message: document.getElementById('reviewMessage').value
    };

    const reviewHTML = `
    <div class="testimonial-item bg-white rounded p-4 p-sm-5">
        <div class="stars mb-2">
            ${getStarRating(formData.rating)}
        </div>
        <h3 class="mb-3">${formData.title}</h3>
        <p class="fs-5">"${formData.message}"</p>
        <h4>${formData.name}</h4>
        <span>${formData.city}</span>
        <span>·</span>
        <small class="text-muted">${formData.service}</small>
    </div>
`;

$('.testimonial-carousel').trigger('add.owl.carousel', [reviewHTML]);
$('.testimonial-carousel').trigger('refresh.owl.carousel');
    
db.ref('reviews').push(formData)
    .then(() => {
        alert('Review-ul a fost trimis cu succes!');
        document.getElementById('review-form').reset();
        document.querySelectorAll('.star').forEach(star => {
            star.textContent = '☆';
        });
        currentRating = 0;
        isSubmitting = false;
        
        const mockReviews = document.querySelector('.mock-reviews');
        if (mockReviews) {
            mockReviews.style.display = 'none';
        }
        
        toggleSections(true);
        animateButtonText(document.getElementById('addReview'));
        loadReviews();
    })
    .catch(error => {
        console.error('Eroare:', error);
        if (error.code === 'PERMISSION_DENIED') {
            alert('Nu aveți permisiunea de a adăuga review-uri. Vă rugăm să vă autentificați.');
        } else {
            alert('Eroare: ' + (error.message || 'A apărut o eroare neașteptată'));
        }
        isSubmitting = false;
    });
});

function loadReviews() {
    db.ref('reviews').on('value', (snapshot) => {
        const reviews = snapshot.val();
        if (!reviews) return;

        const reviewsArray = Object.values(reviews);
        const reviewsContainer = document.querySelector('.testimonial-carousel');
        
        $('.testimonial-carousel').owlCarousel('destroy');
        $('.owl-nav').remove();

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

        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });

        const mockReviews = document.querySelector('.mock-reviews');
        if (mockReviews) {
            mockReviews.style.display = reviewsArray.length > 0 ? 'none' : 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadReviews);
document.getElementById('showReviews').addEventListener('click', function() {
    document.getElementById('reviews-section').style.display = 'block';
    document.getElementById('add-review-section').style.display = 'none';
    loadReviews(); // Reload reviews when switching to reviews section
    checkInterval = setInterval(loadReviews, 3000);
    window.addEventListener('beforeunload', () => {
        if (checkInterval) {
            clearInterval(checkInterval);
        }
    });
});

document.getElementById('addReview').addEventListener('click', function() {
    document.getElementById('add-review-section').style.display = 'block';
    document.getElementById('reviews-section').style.display = 'none';
});
});
