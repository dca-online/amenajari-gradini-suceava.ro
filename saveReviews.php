<?php
// Place this code from line 1 to the end of saveReviews.php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$directory = 'data';
if (!file_exists($directory)) {
    mkdir($directory, 0777, true);
}

$jsonFile = 'data/reviews.json';

// Get the review data
$reviewData = json_decode(file_get_contents('php://input'), true);

// Read existing reviews
$reviews = [];
if (file_exists($jsonFile)) {
    $reviews = json_decode(file_get_contents($jsonFile), true);
}

// Add new review
$reviews[] = $reviewData;

// Save back to file
file_put_contents($jsonFile, json_encode($reviews, JSON_PRETTY_PRINT));
chmod($jsonFile, 0777);

echo json_encode(['success' => true]);
?>