const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const axios = require("axios");

admin.initializeApp();

const corsHandler = cors({
  origin: ["https://proiectbeutesting.web.app", "http://localhost:5000"],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Origin", "X-Requested-With", "Accept"],
  credentials: true,
});

exports.sendTelegram = functions
    .region("europe-west1")
    .https.onRequest((req, res) => {
      corsHandler(req, res, async () => {
        try {
          if (req.method === "OPTIONS") {
            res.set("Access-Control-Allow-Origin", "req.headers.origin");
            res.set("Access-Control-Allow-Methods", "POST");
            res.set("Access-Control-Allow-Headers", "Content-Type");
            res.set("Access-Control-Allow-Credentials", "true");
            return res.status(204).send("");
          }

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
