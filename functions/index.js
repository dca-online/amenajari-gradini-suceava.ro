const {onRequest} = require("firebase-functions/v2/https");
const fetch = require("node-fetch");
const functions = require("firebase-functions");


exports.corsTest = onRequest({
  region: "europe-west1",
  memory: "256MiB",
}, (request, response) => {
  response.set("Access-Control-Allow-Origin", "https://proiectbeutesting.web.app");
  response.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  response.status(204).send("");
});


exports.sendTelegram = onRequest({
  cors: ["https://proiectbeutesting.web.app"], // Let Firebase handle CORS
  region: "europe-west1",
  memory: "256MiB",
}, async (request, response) => {
  if (request.method === "OPTIONS") {
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
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
      }),
    });

    if (!res.ok) {
      throw new Error(`Telegram API error: ${res.status} ${res.statusText}`);
    }

    response.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("Error sending message:", error);
    response.status(500).send("Error sending message.");
  }
});
