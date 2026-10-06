<?php
/**
 * Submit Contact Message Handler
 * Superior Rashid Minhas School Khushab
 */

require_once __DIR__ . '/config/database.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$name    = trim($_POST['name'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide Name, Phone number, and your Message.']);
    exit;
}

try {
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("
        INSERT INTO contact_messages (name, phone, email, message, status)
        VALUES (:name, :phone, :email, :message, 'unread')
    ");

    $stmt->execute([
        ':name'    => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
        ':phone'   => htmlspecialchars($phone, ENT_QUOTES, 'UTF-8'),
        ':email'   => filter_var($email, FILTER_SANITIZE_EMAIL),
        ':message' => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting Superior Rashid Minhas School Khushab. We have received your query.'
    ]);
} catch (\PDOException $e) {
    error_log("Contact Submission Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Unable to save your message. Please reach us directly on WhatsApp 03417885841.']);
}
