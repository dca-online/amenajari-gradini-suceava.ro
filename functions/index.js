const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const axios = require("axios");

admin.initializeApp();

exports.sendTelegram = functions
    .region("europe-west1")
    .https.onRequest((req, res) => {
      return cors(req, res, async () => {
        try {
          const {name, email, phone, service, city, message} = req.body;

          // Get credentials from environment variables
          const botToken = functions.config().telegram.token;
          const chatId = functions.config().telegram.chatid;

          // Format the message
          const telegramMessage = `🌿 Cerere nouă de la un client: 🌿
    👤  Nume: ${name}
    ✉️  Email: ${email}
    📞  Telefon: ${phone}
    🌱  Serviciu: ${service}
    🏙️  Oraș: ${city}
    📝  Mesaj: ${message}`;

          // Send to Telegram
          const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: telegramMessage,
          });

          if (response.status === 200) {
            res.status(200).send("Message sent successfully to Telegram");
          } else {
            throw new Error("Failed to send message to Telegram");
          }
        } catch (error) {
          console.error("Error:", error);
          res.status(500).send("Error sending message to Telegram");
        }
      });
    });
