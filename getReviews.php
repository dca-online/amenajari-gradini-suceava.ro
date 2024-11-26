<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$jsonFile = 'reviews.json';

try {
    if (file_exists($jsonFile)) {
        $jsonContent = file_get_contents($jsonFile);
        $reviewsData = json_decode($jsonContent, true);
        
        // Get only the latest 10 reviews
        $latestReviews = array_slice($reviewsData['reviews'], 0, 10);
        
        echo json_encode(['status' => 'success', 'data' => $latestReviews]);
    } else {
        echo json_encode(['status' => 'success', 'data' => []]);
    }
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch reviews']);
}