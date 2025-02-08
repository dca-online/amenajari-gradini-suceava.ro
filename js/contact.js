document.addEventListener("DOMContentLoaded",function(){const contactForm=document.querySelector(".contact-form-card form");if(contactForm){contactForm.addEventListener("submit",async function(e){e.preventDefault();const name=document.getElementById("name")?.value?.trim()||"";const email=document.getElementById("email")?.value?.trim()||"";const phone=document.getElementById("phone")?.value?.trim()||"";const subject=document.getElementById("subject")?.value?.trim()||"";const messageContent=document.getElementById("message")?.value?.trim()||"";let errorMessage="";if(!name){errorMessage+="• Vă rugăm să completați numele\n"}else if(name.length<3){errorMessage+="• Numele trebuie să aibă cel puțin 3 caractere\n"}
if(!phone){errorMessage+="• Vă rugăm să completați numărul de telefon\n"}else if(!isValidPhone(phone)){errorMessage+="• Numărul de telefon trebuie să fie în format valid:\n  - 10 cifre începând cu 0\n  - sau +40 urmat de 9 cifre\n"}
if(email&&!isValidEmail(email)){errorMessage+="• Vă rugăm să introduceți o adresă de email validă\n"}
if(!subject){errorMessage+="• Vă rugăm să completați subiectul\n"}else if(subject.length<5){errorMessage+="• Subiectul trebuie să aibă cel puțin 5 caractere\n"}
if(!messageContent){errorMessage+="• Vă rugăm să introduceți un mesaj\n"}else if(messageContent.length<10){errorMessage+="• Mesajul trebuie să conțină cel puțin 10 caractere\n"}
if(errorMessage){alert("Vă rugăm să corectați următoarele:\n\n"+errorMessage);return}
const message=`
📨 *Cerere de contact nouă* 📨

👤 *Nume:* ${name}

📞 *Telefon:* ${phone}

📧 *Email:* ${email}

📝 *Subiect:* ${subject}

💬 *Mesaj:*
${messageContent}
            `;try{console.log("Sending message to Telegram...");const response=await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:telegramChatId,text:message,parse_mode:"Markdown"}),});console.log("Telegram API response:",response);if(response.ok){const data=await response.json();console.log("Telegram API success:",data);alert("Mesajul a fost trimis cu succes!");contactForm.reset()}else{const errorData=await response.json();console.error("Telegram API error response:",errorData);throw new Error(`Telegram API error: ${errorData.description || "Unknown error"}`)}}catch(error){console.error("Error:",error);alert("A apărut o eroare la trimiterea mesajului. Vă rugăm să verificați conexiunea la internet și să încercați din nou.")}});document.querySelectorAll('.contact-form-card input, .contact-form-card textarea').forEach(input=>{input.addEventListener('keypress',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();document.querySelector('.contact-form-card form').dispatchEvent(new Event('submit'))}})})}});function isValidEmail(email){const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;return emailRegex.test(email)}
function isValidPhone(phone){const cleanPhone=phone.replace(/[^\d+]/g,"");if(cleanPhone.startsWith("+40")){return cleanPhone.length===12}
if(cleanPhone.startsWith("0")){return cleanPhone.length===10}
return!1}