<<<<<<< HEAD
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$jsonFile = 'data/reviews.json';

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
=======
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$jsonFile = 'data/reviews.json';

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
>>>>>>> 417ebae2d9c4da98d86070d1c23f2141949c6034
