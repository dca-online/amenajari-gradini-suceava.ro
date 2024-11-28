const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios"); // Use Axios for HTTP requests

admin.initializeApp();

exports.sendTelegram = functions.
    region("europe-west1")
    .https.onRequest(async (req, res) => {
      res.set("Access-Control-Allow-Origin", "https://proiectbeutesting.web.app/");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") {
        // Handle preflight request
        return res.status(204).send("");
      }
      try {
        const telegramBotToken =
    functions.config().telegram.bot_token;
        const telegramChatId = functions.config().telegram.chat_id;

        if (!telegramBotToken || !telegramChatId) {
          return res.status(500).
              send("Telegram Bot token or chat ID not configured.");
        }

        const messageText = req.body.message ||
    "Hello from your Firebase Function!"; // Get message from request body

        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        const response = await axios.post(telegramApiUrl, {
          chat_id: telegramChatId,
          text: messageText,
          parse_mode: "HTML",
        });

        if (response.status === 200) {
          return res.status(200).send("Message sent successfully to Telegram");
        } else {
          console.error("Telegram API Error:", response.status, response.data);
          return res.status(response.status)
              .send(response.data);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).send("Error sending message to Telegram.");
      }
    });
