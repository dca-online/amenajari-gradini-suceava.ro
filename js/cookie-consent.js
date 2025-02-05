document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize Firebase Analytics with collection disabled by default
        if (typeof firebase !== 'undefined' && 
            firebase.apps && 
            firebase.apps.length > 0 && 
            firebase.analytics) {
            firebase.analytics().setAnalyticsCollectionEnabled(false);
        }
    } catch (error) {
        console.log('Firebase analytics not available on load:', error);
    }
    
    // Check for existing cookie consent
    if (!getCookie('cookieConsent')) {
        showCookieConsent();
    } else {
        // If user has already given consent, initialize features accordingly
        const analyticsConsent = getCookie('cookieAnalytics') === 'true';
        const marketingConsent = getCookie('cookieMarketing') === 'true';
        initializeCookieBasedFeatures(analyticsConsent, marketingConsent);
    }
});

function showCookieConsent() {
    const modal = document.createElement('div');
    modal.className = 'cookie-consent-modal';
    modal.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-text">
                Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră. 
                Prin continuarea navigării, sunteți de acord cu 
                <a href="termeni-conditii.html">Politica noastră de Cookie-uri</a>.
            </div>
            <div class="cookie-buttons">
                <button class="cookie-btn accept-btn" onclick="acceptAllCookies()">Accept toate</button>
                <button class="cookie-btn settings-btn" onclick="toggleSettings()">Personalizează</button>
                <button class="cookie-btn decline-btn" onclick="declineCookies()">Refuz toate</button>
            </div>
            <div class="cookie-settings">
                <div class="cookie-settings-header">Setări Cookie-uri</div>
                <div class="cookie-option">
                    <input type="checkbox" id="essential" checked disabled>
                    <label for="essential">Esențiale - Necesare pentru funcționarea site-ului</label>
                </div>
                <div class="cookie-option">
                    <input type="checkbox" id="analytics">
                    <label for="analytics">Analitice - Ne ajută să înțelegem cum este folosit site-ul</label>
                </div>
                <div class="cookie-option">
                    <input type="checkbox" id="marketing">
                    <label for="marketing">Marketing - Pentru a vă oferi reclame relevante</label>
                </div>
                <button class="cookie-btn save-settings-btn" onclick="saveSettings()">Salvează preferințele</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 100);
}

function toggleSettings() {
    const settings = document.querySelector('.cookie-settings');
    settings.classList.toggle('show');
}

function acceptAllCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    setCookie('cookieAnalytics', 'true', 365);
    setCookie('cookieMarketing', 'true', 365);
    hideCookieConsent();
    initializeCookieBasedFeatures(true, true);
}

function saveSettings() {
    const analytics = document.getElementById('analytics').checked;
    const marketing = document.getElementById('marketing').checked;
    
    setCookie('cookieConsent', 'customized', 365);
    setCookie('cookieAnalytics', analytics.toString(), 365);
    setCookie('cookieMarketing', marketing.toString(), 365);
    
    hideCookieConsent();
    initializeCookieBasedFeatures(analytics, marketing);
}

function declineCookies() {
    setCookie('cookieConsent', 'declined', 365);
    setCookie('cookieAnalytics', 'false', 365);
    setCookie('cookieMarketing', 'false', 365);
    hideCookieConsent();
    initializeCookieBasedFeatures(false, false);
}

function initializeCookieBasedFeatures(analytics, marketing) {
    if (analytics) {
        try {
            // Check if Firebase is properly initialized
            if (typeof firebase !== 'undefined' && 
                firebase.apps && 
                firebase.apps.length > 0 && 
                firebase.analytics) {
                    
                // Initialize Firebase Analytics
                const analyticsInstance = firebase.analytics();
                analyticsInstance.setAnalyticsCollectionEnabled(true);
                analyticsInstance.logEvent('cookie_consent_granted');
            } else {
                console.log('Firebase not initialized yet, analytics consent stored for later');
            }
        } catch (error) {
            console.log('Firebase analytics not available:', error);
        }
    } else {
        try {
            // Disable Firebase Analytics if user declined
            if (typeof firebase !== 'undefined' && 
                firebase.apps && 
                firebase.apps.length > 0 && 
                firebase.analytics) {
                firebase.analytics().setAnalyticsCollectionEnabled(false);
            }
        } catch (error) {
            console.log('Firebase analytics not available:', error);
        }
    }
    
    if (marketing) {
        // Initialize marketing features if you add them in the future
        // Example: Facebook Pixel, Google Ads, etc.
    }
}

function hideCookieConsent() {
    const modal = document.querySelector('.cookie-consent-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
} 