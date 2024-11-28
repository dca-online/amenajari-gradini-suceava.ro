const functions = require("firebase-functions");
const TelegramBot = require("node-telegram-bot-api");
const admin = require("firebase-admin");

admin.initializeApp();

const bot = new TelegramBot(
    process.env.TELEGRAM_BOT_TOKEN ||
    functions.config().telegram.bot_token,

    exports.sendTelegram = functions
        .region("europe-west1")
        .https.onRequest(
            async (req, res) => {
              res.set("Access-Control-Allow-Origin", "https://proiectbeutesting.web.app");
              res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
              res.set("Access-Control-Allow-Headers", "Content-Type");

              if (req.method === "OPTIONS") {
                res.status(204).send("");
                return;
              }

              const data = req.body;
              const telegramMessage = `🌿 Cerere nouă de la un client: 🌿
👤  Nume: ${data.name}
✉️  Email: ${data.email}
📞  Telefon: ${data.phone}
🌱  Serviciu: ${data.service}
🏙️  Oraș: ${data.city}
📝  Mesaj: ${data.message}`;

              try {
                await bot.sendMessage(
                    process.env.TELEGRAM_CHAT_ID ||
      functions.config().telegram.chat_id,
                    telegramMessage,
                );
                res.status(200).send("Message sent successfully.");
              } catch (error) {
                console.error("Error sending message:", error);
                res.status(500).send("Error sending message.");
              }
            }));
