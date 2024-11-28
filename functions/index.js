const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const axios = require("axios");

admin.initializeApp();

// Initialize cors middleware with specific options
const corsHandler = cors({
  origin: true,
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
});

exports.sendTelegram = functions
    .region("europe-west1")
    .https.onRequest((req, res) => {
      corsHandler(req, res, async () => {
        try {
          const {name, email, phone, service, city, message} = req.body;
          const botToken = functions.config().telegram.token;
          const chatId = functions.config().telegram.chatid;
          const telegramMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
City: ${city}
Message: ${message}`;
          const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: telegramMessage,
          });

          if (response.status === 200) {
            return res.status(200)
                .send("Message sent successfully to Telegram");
          } else {
            throw new Error("Failed to send message to Telegram");
          }
        } catch (error) {
          console.error("Error:", error);
          return res.status(500).send("Error sending message to Telegram");
        }
      });
    });
