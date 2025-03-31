// Force HTTPS for all Firebase connections
(function() {
    // Override URL constructor to ensure HTTPS is used
    const originalURL = window.URL;
    window.URL = function(url, base) {
        if (typeof url === 'string' && url.startsWith('http:') && 
            (url.includes('firebaseio.com') || url.includes('firebasedatabase.app'))) {
            url = url.replace('http:', 'https:');
            console.warn('HTTP URL detected and converted to HTTPS:', url);
        }
        return new originalURL(url, base);
    };
    window.URL.prototype = originalURL.prototype;
    window.URL.createObjectURL = originalURL.createObjectURL;
    window.URL.revokeObjectURL = originalURL.revokeObjectURL;
    
    // Also patch XMLHttpRequest open method to enforce HTTPS
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        if (typeof url === 'string' && url.startsWith('http:') && 
            (url.includes('firebaseio.com') || url.includes('firebasedatabase.app'))) {
            url = url.replace('http:', 'https:');
            console.warn('HTTP URL detected in XHR and converted to HTTPS:', url);
        }
        return originalOpen.call(this, method, url, async, user, password);
    };
    
    // Patch fetch to enforce HTTPS
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
        if (typeof input === 'string' && input.startsWith('http:') && 
            (input.includes('firebaseio.com') || input.includes('firebasedatabase.app'))) {
            input = input.replace('http:', 'https:');
            console.warn('HTTP URL detected in fetch and converted to HTTPS:', input);
        }
        return originalFetch.call(this, input, init);
    };
    
    console.log('HTTPS enforcement for Firebase connections is active');
})(); 