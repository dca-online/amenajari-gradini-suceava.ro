function initializeCookieConsent(){try{if(typeof window.firebase==="undefined"||!window.firebase.apps.length){setTimeout(initializeCookieConsent,100);return}
const app=window.firebase.app();const analytics=app.analytics();if(analytics){analytics.setAnalyticsCollectionEnabled(!1)}
if(!getCookie("cookieConsent")){showCookieTrigger()}else{const analyticsConsent=getCookie("cookieAnalytics")==="true";const marketingConsent=getCookie("cookieMarketing")==="true";initializeCookieBasedFeatures(analyticsConsent,marketingConsent)}}catch(error){console.log("Firebase analytics not available:",error);setTimeout(initializeCookieConsent,100)}}
setTimeout(initializeCookieConsent,100);function showCookieTrigger(){const container=document.createElement("div");const trigger=document.createElement("div");trigger.className="cookie-trigger";trigger.innerHTML=`
      <svg class="cookie-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,3C7.03,3,3,7.03,3,12c0,4.97,4.03,9,9,9s9-4.03,9-9h-2c0,0.75-0.14,1.47-0.37,2.14 c-0.23-0.19-0.51-0.31-0.83-0.31c-0.73,0-1.33,0.6-1.33,1.33c0,0.73,0.6,1.33,1.33,1.33c0.32,0,0.6-0.12,0.83-0.31 C17.14,17.47,14.97,19,12,19c-3.86,0-7-3.14-7-7c0-2.97,1.53-5.14,3.84-6.63C9.08,5.6,9.33,6,9.83,6c0.73,0,1.33-0.6,1.33-1.33 c0-0.73-0.6-1.33-1.33-1.33C9.33,3.33,9,3.47,8.77,3.68C9.77,3.25,10.85,3,12,3c1.15,0,2.23,0.25,3.23,0.68 C15,3.47,14.67,3.33,14.17,3.33c-0.73,0-1.33,0.6-1.33,1.33c0,0.73,0.6,1.33,1.33,1.33c0.5,0,0.75-0.4,0.99-0.63 C17.47,6.86,19,9.03,19,12h2C21,7.03,16.97,3,12,3z"/>
      </svg>`;if(window.innerWidth<=768){trigger.onclick=()=>{const modal=document.querySelector(".cookie-consent-modal");if(modal){modal.classList.toggle("show")}}}
const modal=document.createElement("div");modal.className="cookie-consent-modal";modal.innerHTML=`
      <div class="cookie-content">
          <div class="cookie-text">
              Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră. 
              <a href="politica-cookie.html">Politica Cookie</a>
          </div>
          <div class="cookie-buttons">
              <button class="cookie-btn accept-btn" onclick="acceptAllCookies()">Accept toate</button>
              <button class="cookie-btn settings-btn" onclick="toggleSettings()">Personalizează</button>
              <button class="cookie-btn decline-btn" onclick="declineCookies()">Refuz</button>
          </div>
          <div class="cookie-settings">
              <div class="cookie-settings-header">Setări Cookie-uri</div>
              <div class="cookie-option">
                  <input type="checkbox" id="essential" checked disabled>
                  <label for="essential">Esențiale - Necesare pentru funcționarea site-ului</label>
              </div>
              <div class="cookie-option">
                  <input type="checkbox" id="analytics" checked>
                  <label for="analytics">Analitice - Ne ajută să înțelegem cum este folosit site-ul pentru a vă îmbunătăți experiența</label>
              </div>
              <div class="cookie-option">
                  <input type="checkbox" id="marketing">
                  <label for="marketing">Marketing - Pentru a vă oferi reclame relevante</label>
              </div>
              <button class="cookie-btn save-settings-btn" onclick="saveSettings()">Salvează preferințele</button>
          </div>
      </div>
    `;container.appendChild(trigger);container.appendChild(modal);document.body.appendChild(container)
setTimeout(()=>{modal.classList.add("show")},100);if(window.innerWidth<=768){trigger.onclick=()=>{if(modal){modal.classList.toggle("show")}}}}
function acceptAllCookies(){setCookie("cookieConsent","accepted",365);setCookie("cookieAnalytics","true",365);setCookie("cookieMarketing","true",365);hideCookieConsent();initializeCookieBasedFeatures(!0,!0)}
function saveSettings(){const analytics=document.getElementById("analytics").checked;const marketing=document.getElementById("marketing").checked;setCookie("cookieConsent","customized",365);setCookie("cookieAnalytics",analytics.toString(),365);setCookie("cookieMarketing",marketing.toString(),365);hideCookieConsent();initializeCookieBasedFeatures(analytics,marketing)}
function declineCookies(){setCookie("cookieConsent","declined",365);setCookie("cookieAnalytics","false",365);setCookie("cookieMarketing","false",365);hideCookieConsent();initializeCookieBasedFeatures(!1,!1)}
function initializeCookieBasedFeatures(analytics,marketing){try{if(typeof window.firebase==="undefined"||!window.firebase.apps.length){console.log("Firebase not initialized yet");return}
const app=window.firebase.app();const analyticsInstance=app.analytics();if(!analyticsInstance){console.log("Analytics instance not available");return}
analyticsInstance.setAnalyticsCollectionEnabled(analytics);if(analytics){analyticsInstance.logEvent("cookie_consent_granted",{timestamp:Date.now(),marketing_consent:marketing})}}catch(error){console.log("Error initializing cookie-based features:",error)}}
function hideCookieConsent(){const modal=document.querySelector(".cookie-consent-modal");const trigger=document.querySelector(".cookie-trigger");const container=modal?.parentElement;if(modal){modal.classList.add("hiding");modal.addEventListener("transitionend",()=>{container?.remove()},{once:!0})}}
function setCookie(name,value,days){let expires="";if(days){const date=new Date();date.setTime(date.getTime()+days*24*60*60*1000);expires="; expires="+date.toUTCString()}
document.cookie=name+"="+(value||"")+expires+"; path=/"}
function getCookie(name){const nameEQ=name+"=";const ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)===" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}
return null}
function toggleSettings(){const settings=document.querySelector(".cookie-settings");const content=document.querySelector(".cookie-content");const settingsBtn=document.querySelector(".settings-btn");if(settings&&content){const isOpen=settings.style.display==="block";settings.style.display=isOpen?"none":"block";content.classList.toggle("settings-open",!isOpen);settingsBtn?.classList.toggle("active",!isOpen);if(window.innerWidth<=768){const modal=document.querySelector(".cookie-consent-modal");if(modal){modal.classList.toggle("settings-open",!isOpen)}}}}
function updateSettingsButtonState(){const settingsBtn=document.querySelector(".settings-btn");const settings=document.querySelector(".cookie-settings");if(settingsBtn&&settings){settingsBtn.classList.toggle("active",settings.style.display==="block")}}