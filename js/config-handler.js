function loadFirebaseConfig() {
    const script = document.createElement('script');
    script.src = window.location.hostname === 'localhost' 
        ? '/js/firebase-init.local.js' 
        : '/js/firebase-init.prod.js';
    document.head.appendChild(script);
}
loadFirebaseConfig();