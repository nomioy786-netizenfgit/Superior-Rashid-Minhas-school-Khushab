<?php
/**
 * Submit Admission Inquiry Handler
 * Superior Rashid Minhas School Khushab
 */

require_once __DIR__ . '/config/database.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// Retrieve sanitized POST inputs
$student_name   = trim($_POST['student_name'] ?? '');
$father_name    = trim($_POST['father_name'] ?? '');
$class_applying = trim($_POST['class_applying'] ?? '');
$phone          = trim($_POST['phone'] ?? '');
$email          = trim($_POST['email'] ?? '');
$message        = trim($_POST['message'] ?? '');

// Validation
if (empty($student_name) || empty($father_name) || empty($class_applying) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields (Student Name, Father Name, Class, Phone).']);
    exit;
}

try {
    $pdo = getDBConnection();
    $inquiry_code = 'ADM-' . rand(1000, 9999);

    $stmt = $pdo->prepare("
        INSERT INTO admissions (inquiry_code, student_name, father_name, class_applying, phone, email, message, status)
        VALUES (:inquiry_code, :student_name, :father_name, :class_applying, :phone, :email, :message, 'new')
    ");

    $stmt->execute([
        ':inquiry_code'   => $inquiry_code,
        ':student_name'   => htmlspecialchars($student_name, ENT_QUOTES, 'UTF-8'),
        ':father_name'    => htmlspecialchars($father_name, ENT_QUOTES, 'UTF-8'),
        ':class_applying' => htmlspecialchars($class_applying, ENT_QUOTES, 'UTF-8'),
        ':phone'          => htmlspecialchars($phone, ENT_QUOTES, 'UTF-8'),
        ':email'          => filter_var($email, FILTER_SANITIZE_EMAIL),
        ':message'        => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
    ]);

    echo json_encode([
        'success'      => true,
        'message'      => 'Admission inquiry submitted successfully! Our admissions office will contact you soon.',
        'inquiry_code' => $inquiry_code
    ]);
} catch (\PDOException $e) {
    error_log("Admission Submission Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error while saving inquiry. Please try again or message us on WhatsApp.']);
}
