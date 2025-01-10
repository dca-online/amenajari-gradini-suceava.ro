document.addEventListener('DOMContentLoaded', () => {
    initializePortfolioCards();
});

window.addEventListener('load', () => {
    initializePortfolioCards();
});

function initializePortfolioCards() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
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

        document.querySelectorAll('.portfolio-inner').forEach(item => {
            observer.observe(item);
        });
    } else {
        const portfolioItems = document.querySelectorAll('.portfolio-inner');
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            });
        });
    }
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initializePortfolioCards();
    }, 250);
}); 