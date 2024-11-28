const functions = require("firebase-functions");
const TelegramBot = require("node-telegram-bot-api");

// Initialize the bot with your token
const botToken = functions.config().telegram.bot_token;
const bot = new TelegramBot(botToken);

exports.sendTelegram = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "https://proiectbeutesting.web.app");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  const chatId = functions.config().telegram.chat_id;
  const data = req.body;

  const telegramMessage = `🌿 Cerere nouă de la un client: 🌿
👤  Nume: ${data.name}
✉️  Email: ${data.email}
📞  Telefon: ${data.phone}
🌱  Serviciu: ${data.service}
🏙️  Oraș: ${data.city}
📝  Mesaj: ${data.message}`;

  bot.sendMessage(chatId, telegramMessage)
      .then(() => res.status(200).send("Message sent successfully."))
      .catch((error) => {
        console.error("Error sending message:", error);
        res.status(500).send("Error sending message.");
      });
});
