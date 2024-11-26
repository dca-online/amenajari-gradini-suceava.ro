<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
error_reporting(E_ALL);
ini_set('display_errors', 0);

error_log("Received request: " . file_get_contents('php://input'));

try {
    $jsonFile = 'reviews.json';
    $input = file_get_contents('php://input');
    
    if (!$input) {
        throw new Exception('No input data received');
    }
    
    $data = json_decode($input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data received');
    }

    // Validate required fields
    $requiredFields = ['name', 'service', 'title', 'rating', 'city', 'message'];
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            throw new Exception("Missing required field: {$field}");
        }
    }

    // Add rating validation here
    if (!isset($data['rating']) || !is_numeric($data['rating']) || $data['rating'] < 1 || $data['rating'] > 5) {
        throw new Exception('Invalid rating value');
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

    // Read existing reviews
    if (file_exists($jsonFile)) {
        $jsonContent = file_get_contents($jsonFile);
        $reviewsData = json_decode($jsonContent, true);
    } else {
        $reviewsData = ['reviews' => []];
    }

    // Add new review at the beginning
    array_unshift($reviewsData['reviews'], $review);

    // Keep only the latest 100 reviews
    if (count($reviewsData['reviews']) > 100) {
        array_pop($reviewsData['reviews']);
    }

    // Save to file
    if (file_put_contents($jsonFile, json_encode($reviewsData, JSON_PRETTY_PRINT))) {
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => 'Review added successfully']);
    } else {
        throw new Exception('Failed to save review');
    }

    // Add debug logging
    error_log('Received data: ' . print_r($data, true));
    error_log('File path: ' . $jsonFile);
    error_log('File exists: ' . (file_exists($jsonFile) ? 'yes' : 'no'));
    error_log('File writable: ' . (is_writable($jsonFile) ? 'yes' : 'no'));

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}