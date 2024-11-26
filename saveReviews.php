<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

chmod('data/reviews.json', 0666);

// Get the JSON file path
$file_path = 'data/reviews.json';

// Get and validate input data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['name']) || !isset($data['service']) || 
    !isset($data['title']) || !isset($data['rating']) || 
    !isset($data['city']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
    exit;
}

// Sanitize inputs
$review = [
    'name' => htmlspecialchars($data['name']),
    'service' => htmlspecialchars($data['service']),
    'title' => htmlspecialchars($data['title']),
    'rating' => intval($data['rating']),
    'city' => htmlspecialchars($data['city']),
    'message' => htmlspecialchars($data['message']),
    'date' => date('Y-m-d H:i:s')
];

// Validate rating
if ($review['rating'] < 1 || $review['rating'] > 5) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid rating']);
    exit;
}

try {
    // Read existing reviews
    if (file_exists($jsonFile)) {
        $jsonContent = file_get_contents($jsonFile);
        $reviewsData = json_decode($jsonContent, true);
    } else {
        $reviewsData = ['reviews' => []];
    }

    // Add new review
    array_unshift($reviewsData['reviews'], $review); // Add to beginning of array

    // Keep only the latest 100 reviews
    if (count($reviewsData['reviews']) > 100) {
        array_pop($reviewsData['reviews']);
    }

    // Save back to file
    if (file_put_contents($jsonFile, json_encode($reviewsData, JSON_PRETTY_PRINT))) {
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => 'Review added successfully']);
    } else {
        throw new Exception('Failed to save review');
    }
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to save review']);
}
