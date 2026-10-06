<?php
require_once __DIR__ . '/../config/database.php';
$settings = getSchoolSettings();
$schoolName = $settings['school_name'] ?? 'Superior Rashid Minhas School Khushab';
$whatsapp = $settings['whatsapp_number'] ?? '03417885841';
$whatsappInt = $settings['whatsapp_international'] ?? '923417885841';
$phone = $settings['phone_number'] ?? '+92 341 7885841';
$location = $settings['location_address'] ?? 'Khushab, Punjab, Pakistan';
$isAdmissionOpen = ($settings['admissions_open'] ?? '1') === '1';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($schoolName) ?> | Quality Education</title>
    <meta name="description" content="Superior Rashid Minhas School Khushab provides quality education, student development and a supportive learning environment in Khushab, Punjab.">
    <meta property="og:title" content="<?= htmlspecialchars($schoolName) ?>">
    <meta property="og:description" content="Building Bright Minds, Inspiring Future Leaders in Khushab, Punjab.">
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- TOP INFORMATION BAR -->
    <div class="top-bar">
        <div class="container top-bar-content">
            <div class="top-info-left">
                <span><i class="fa-solid fa-phone"></i> <a href="tel:<?= htmlspecialchars($phone) ?>"><?= htmlspecialchars($phone) ?></a></span>
                <span><i class="fa-brands fa-whatsapp"></i> <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>" target="_blank"><?= htmlspecialchars($whatsapp) ?></a></span>
                <span class="desktop-only"><i class="fa-solid fa-location-dot"></i> <?= htmlspecialchars($location) ?></span>
            </div>
            <div class="top-info-right">
                <span class="badge-admission"><i class="fa-solid fa-graduation-cap"></i> Admissions Open 2026-27</span>
                <a href="admin/index.php" class="admin-link" title="Staff & Admin Portal"><i class="fa-solid fa-lock"></i> Portal</a>
            </div>
        </div>
    </div>

    <!-- MAIN NAVIGATION -->
    <header class="main-header" id="mainHeader">
        <div class="container header-container">
            <a href="index.php" class="brand-logo">
                <div class="logo-crest">
                    <i class="fa-solid fa-award"></i>
                </div>
                <div class="brand-text">
                    <span class="school-title">Superior Rashid Minhas</span>
                    <span class="school-subtitle">School Khushab</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="nav-menu" id="navMenu">
                <ul>
                    <li><a href="index.php#home" class="nav-link active">Home</a></li>
                    <li><a href="index.php#about" class="nav-link">About Us</a></li>
                    <li><a href="index.php#academics" class="nav-link">Academics</a></li>
                    <li><a href="index.php#facilities" class="nav-link">Facilities</a></li>
                    <li><a href="index.php#student-life" class="nav-link">Student Life</a></li>
                    <li><a href="index.php#gallery" class="nav-link">Gallery</a></li>
                    <li><a href="index.php#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            <div class="header-action">
                <a href="index.php#admissions" class="btn btn-gold btn-admission">
                    <i class="fa-solid fa-pen-to-square"></i> Admission Open
                </a>
                <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
