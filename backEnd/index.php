<?php
session_start();
ob_start();

// Allow cross-origin requests from your frontend (localhost:3000)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;  // If it's a preflight request, we just need to respond with the appropriate headers
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
</head>

<body>

    <?php
    // Check for POST request (when the form is submitted)
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the raw POST data (JSON format)
        $rawData = file_get_contents("php://input");

        // Print the raw POST data (stringified object)
        echo "<h3>Raw Data Received:</h3>";
        echo "<pre>";
        echo htmlspecialchars($rawData);  // Make sure to escape any special characters in the raw data
        echo "</pre>";

        // Decode the JSON data into an associative array
        $data = json_decode($rawData, true);

        // Check if decoding was successful
        if ($data === null) {
            echo json_encode(["error" => "Invalid JSON received."]);
            exit;
        }

        // Print the decoded array (for debugging)
        echo "<h3>Decoded Data:</h3>";
        echo "<pre>";
        var_dump($data);  // This will print the PHP array object
        echo "</pre>";

        // Extract form data
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $address = $data['address'] ?? '';
        $message = $data['message'] ?? '';

        // Set the recipient email address
        $to = "ari.afshartr@gmail.com";  // Your Gmail address
        $subject = "New Request Form Submission";

        // Compose the email body
        $body = "New request submitted:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Phone: $phone\n";
        $body .= "Address: $address\n";
        $body .= "Message: $message\n";

        // Set email headers
        $headers = "From: no-reply@yourdomain.com" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";

        // Send the email using PHP's mail function
        if (mail($to, $subject, $body, $headers)) {
            echo "<h1>Message sent successfully!</h1>";
        } else {
            echo "<h1>Failed to send the message.</h1>";
        }
    }

    // Check email verification (this part is related to the initial structure you provided)
    $test = $_GET['ver'];
    $mail = $_SESSION['mail'] ?? '';

    if ($test == $_SESSION['verify']) {
        echo "<h1>Congratulations. Email: $mail has been verified.</h1>";
    } else {
        echo "<h1>Verification failed. Please try again.</h1>";
    }

    // Clear the session data
    session_destroy();
    session_unset();
    ?>

</body>

</html>