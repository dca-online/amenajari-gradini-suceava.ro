<?php
// Place this code from line 1 to the end of getReviews.php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$jsonFile = 'data/reviews.json';

if (file_exists($jsonFile)) {
    $reviews = json_decode(file_get_contents($jsonFile), true);
    echo json_encode($reviews);
} else {
    echo json_encode([]);
}
?>