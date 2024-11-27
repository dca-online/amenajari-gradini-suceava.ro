<?php
$botToken = getenv('BOT_TOKEN');
$chatId = getenv('CHAT_ID');

$data = json_decode(file_get_contents('php://input'), true);

$telegramMessage = "Mesaj nou:\n"
    . "Nume: " . $data['name'] . "\n"
    . "Email: " . $data['email'] . "\n"
    . "Telefon: " . $data['phone'] . "\n"
    . "Serviciu: " . $data['service'] . "\n"
    . "Oras: " . $data['city'] . "\n"
    . "Mesaj: " . $data['message'];

$website = "https://api.telegram.org/bot{$botToken}/sendMessage";
$payload = [
    'chat_id' => $chatId,
    'text' => $telegramMessage
];

$ch = curl_init($website);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$result = curl_exec($ch);

if ($result === false) {
    $error = curl_error($ch);
    curl_close($ch);
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Curl error: ' . $error]);
    exit;
}

curl_close($ch);

$response = json_decode($result, true);

if ($response['ok']) {
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Mesaj trimis cu success!']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $response['description']]);
}

