<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Set content type to JSON
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Your receiving email address
$receiving_email_address = 'chs177398@gmail.com';

// Sanitize and validate input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Get form data
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
$service = isset($_POST['service']) ? sanitize_input($_POST['service']) : '';
$subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($service)) {
    $errors[] = 'Service selection is required';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
} elseif (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters';
}

// If there are validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(', ', $errors)
    ]);
    exit;
}

// Prepare email content
$email_subject = "New Contact Form Submission: $subject";

$email_body = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: white; padding: 30px; border-radius: 0 0 5px 5px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #667eea; border-radius: 3px; }
        .field strong { color: #667eea; display: block; margin-bottom: 5px; }
        .footer { text-align: center; margin-top: 20px; padding: 15px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📧 New Contact Form Submission</h2>
            <p>Fastam Solutions</p>
        </div>
        <div class='content'>
            <div class='field'>
                <strong>👤 Name:</strong>
                $name
            </div>
            <div class='field'>
                <strong>📧 Email:</strong>
                <a href='mailto:$email'>$email</a>
            </div>";

if (!empty($phone)) {
    $email_body .= "
            <div class='field'>
                <strong>📱 Phone:</strong>
                <a href='tel:$phone'>$phone</a>
            </div>";
}

$email_body .= "
            <div class='field'>
                <strong>💼 Service Interested In:</strong>
                $service
            </div>
            <div class='field'>
                <strong>📝 Subject:</strong>
                $subject
            </div>
            <div class='field'>
                <strong>💬 Message:</strong>
                <p style='margin: 10px 0 0 0; white-space: pre-wrap;'>$message</p>
            </div>
            <div class='footer'>
                <p>This email was sent from the contact form on Fastam Solutions website</p>
                <p>Submitted on: " . date('F j, Y, g:i a') . "</p>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($receiving_email_address, $email_subject, $email_body, $headers);

if ($mail_sent) {
    // Log successful submission (optional)
    $log_message = date('Y-m-d H:i:s') . " - Contact form submitted by: $name ($email)\n";
    file_put_contents('contact_log.txt', $log_message, FILE_APPEND);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at chs177398@gmail.com'
    ]);
}
?>
