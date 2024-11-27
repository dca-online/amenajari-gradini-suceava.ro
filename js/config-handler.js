// function loadFirebaseConfig() {
//     return new Promise((resolve) => {
//         const script = document.createElement('script');
//         script.src = window.location.hostname === 'localhost' 
//             ? 'js/firebase-init.local.js' 
//             : 'js/firebase-init.prod.js';
//         script.onload = () => {
//             // Initialize WOW and other UI components
//             new WOW().init();
            
//             // Initialize carousel
//             $(".header-carousel").owlCarousel({
//                 autoplay: true,
//                 smartSpeed: 1500,
//                 items: 1,
//                 dots: true,
//                 loop: true,
//                 nav: true,
//                 navText: [
//                     '<i class="bi bi-chevron-left"></i>',
//                     '<i class="bi bi-chevron-right"></i>'
//                 ]
//             });
            
//             // Remove spinner
//             const spinner = document.getElementById('spinner');
//             if (spinner) {
//                 spinner.classList.remove('show');
//             }
//             resolve();
//         };
//         document.head.appendChild(script);
//     });
// }

// loadFirebaseConfig().then(() => {
//     const mainScript = document.createElement('script');
//     mainScript.src = 'js/main.js';
//     document.head.appendChild(mainScript);
// });