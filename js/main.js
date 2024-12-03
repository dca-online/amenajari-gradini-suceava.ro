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

    const message = `
🌿 Cerere nouă de contact client: 


👤 <b>Nume:</b> ${nume}

✉️ <b>Email:</b> ${email}

📞 <b>Telefon:</b> ${phone}

🏘️ <b>Oraș:</b> ${city}

🌱 <b>Serviciu:</b> ${service}

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


document.addEventListener('DOMContentLoaded', function() {
    const showReviewsBtn = document.getElementById('showReviews');
    const addReviewBtn = document.getElementById('addReview');
    const reviewsSection = document.getElementById('reviews-section');
    const addReviewSection = document.getElementById('add-review-section');
    const stars = document.querySelectorAll('.star');

    // Initialize sections
    reviewsSection.classList.add('active');
    addReviewSection.classList.remove('active');
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
                loadReviews(); // Reload reviews when showing reviews section
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

    // Show reviews button click handler
    showReviewsBtn.addEventListener('click', () => {
        toggleSections(true);
        if (addReviewBtn.textContent === 'Înapoi') {
            animateButtonText(addReviewBtn);
        }
    });
    
    // Add review button click handler
    addReviewBtn.addEventListener('click', function() {
        const isShowingReviews = this.textContent === 'Înapoi';
        if (isShowingReviews) {
            toggleSections(true);
        } else {
            toggleSections(false);
        }
        animateButtonText(this);
    });

    // Remove the duplicate event listeners at the bottom of the file
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
        message: document.getElementById('reviewMessage').value,
        timestamp: Date.now() // Add timestamp for ordering
    };
    
    db.ref('reviews').push(formData)
        .then(() => {
            alert('Review-ul a fost trimis cu succes!');
            document.getElementById('review-form').reset();
            document.querySelectorAll('.star').forEach(star => {
                star.textContent = '☆';
            });
            currentRating = 0;
            isSubmitting = false;
            
            // Switch to reviews section
            toggleSections(true);
            animateButtonText(document.getElementById('addReview'));
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
        const reviewsContainer = document.querySelector('.testimonial-carousel');
        
        // Handle empty reviews case
        if (!reviews) {
            reviewsContainer.innerHTML = '';
            initializeCarousel();
            return;
        }

        const reviewsArray = Object.values(reviews);
        
        // Destroy existing carousel
        if ($.fn.owlCarousel) {
            $('.testimonial-carousel').owlCarousel('destroy');
        }
        
        // Update HTML content
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

        // Initialize new carousel
        initializeCarousel(reviewsArray.length - 1);

        // Update mock reviews visibility
        const mockReviews = document.querySelector('.mock-reviews');
        if (mockReviews) {
            mockReviews.style.display = reviewsArray.length > 0 ? 'none' : 'block';
        }
    });
}

function initializeCarousel(startPosition = 0) {
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        startPosition: startPosition, // Start at the latest review
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        onInitialized: function() {
            // Ensure carousel is visible
            $('.testimonial-carousel').css('opacity', '1');
        }
    });
}
