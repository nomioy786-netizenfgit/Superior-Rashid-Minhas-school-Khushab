<?php
/**
 * Database Configuration & Connection
 * Superior Rashid Minhas School Khushab
 */

// Database credentials - update these for your production or local server (cPanel / XAMPP)
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'srms_khushab_db');
define('DB_CHARSET', 'utf8mb4');

function getDBConnection() {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (\PDOException $e) {
            // In production, log error instead of exposing database details
            error_log("Database Connection Error: " . $e->getMessage());
            die("Database connection failed. Please ensure the database is imported and credentials are configured.");
        }
    }
    return $pdo;
}

// Helper to get school settings key-value pair
function getSchoolSettings() {
    try {
        $pdo = getDBConnection();
        $stmt = $pdo->query("SELECT setting_key, setting_value FROM school_settings");
        $settings = [];
        while ($row = $stmt->fetch()) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }
        return $settings;
    } catch (\Exception $e) {
        // Fallback default values if database not yet migrated
        return [
            'school_name' => 'Superior Rashid Minhas School Khushab',
            'tagline' => 'Building Bright Minds, Inspiring Future Leaders',
            'whatsapp_number' => '03417885841',
            'whatsapp_international' => '923417885841',
            'phone_number' => '+92 341 7885841',
            'email_address' => 'info@superiorrashidminhas.edu.pk',
            'location_address' => 'Khushab, Punjab, Pakistan',
            'admissions_open' => '1',
            'academic_year' => '2026 – 2027',
        ];
    }
}
