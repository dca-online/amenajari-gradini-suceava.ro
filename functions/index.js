const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const fetch = require("node-fetch");
const functions = require("firebase-functions");

exports.sendTelegram = onRequest({
  cors: ["https://proiectbeutesting.web.app"],
  region: "europe-west1",
  memory: "256MiB",
}, async (request, response) => {
  if (request.method === "OPTIONS") {
    response.set("Access-Control-Allow-Origin", "https://proiectbeutesting.web.app");
    response.set("Access-Control-Allow-Methods", "POST");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    response.set("Access-Control-Max-Age", "3600");
    response.status(204).send("");
    return;
  }
  const botToken = functions.config().telegram.bot_token;
  const chatId = functions.config().telegram.chat_id;

  const data = request.body;

  const telegramMessage = `🌿 Cerere nouă de la un client: 🌿
👤  Nume: ${data.name}
✉️  Email: ${data.email}
📞  Telefon: ${data.phone}
🌱  Serviciu: ${data.service}
🏙️  Oraș: ${data.city}
📝  Mesaj: ${data.message}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
      }),
    });

    const result = await telegramResponse.json();
    logger.info("Telegram response:", result);

    if (result.ok) {
      response.json({
        status: "success",
        message: "Mesaj trimis cu success!",
      });
    } else {
      response.status(500).json({
        status: "error",
        message: result.description,
      });
    }
  } catch (error) {
    logger.error("Telegram error:", error);
    response.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
