<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: index.php');
    exit;
}

require_once __DIR__ . '/../config/database.php';
$pdo = getDBConnection();
$msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save_settings'])) {
    $fields = [
        'school_name' => $_POST['school_name'] ?? '',
        'whatsapp_number' => $_POST['whatsapp_number'] ?? '',
        'phone_number' => $_POST['phone_number'] ?? '',
        'email_address' => $_POST['email_address'] ?? '',
        'location_address' => $_POST['location_address'] ?? '',
        'office_hours' => $_POST['office_hours'] ?? '',
        'admissions_open' => isset($_POST['admissions_open']) ? '1' : '0',
    ];

    foreach ($fields as $key => $val) {
        $stmt = $pdo->prepare("INSERT INTO school_settings (setting_key, setting_value) VALUES (:k, :v) ON DUPLICATE KEY UPDATE setting_value = :v2");
        $stmt->execute([':k' => $key, ':v' => $val, ':v2' => $val]);
    }
    $msg = 'School settings updated successfully!';
}

$settings = getSchoolSettings();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>School Settings | Superior Rashid Minhas School</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        .admin-layout { display: flex; min-height: 100vh; background: #f1f5f9; }
        .admin-sidebar { width: 260px; background: #022c22; color: #fff; padding: 24px 16px; }
        .admin-brand { display: flex; align-items: center; gap: 10px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 24px; }
        .admin-nav { list-style: none; }
        .admin-nav li { margin-bottom: 6px; }
        .admin-nav a { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 8px; color: #cbd5e1; font-size: 0.92rem; }
        .admin-nav a:hover, .admin-nav a.active { background: #064e3b; color: #fbbf24; }
        .admin-main { flex: 1; padding: 30px; overflow-y: auto; }
        .data-card { background: #fff; border-radius: 12px; padding: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); max-width: 650px; }
    </style>
</head>
<body>
<div class="admin-layout">
    <aside class="admin-sidebar">
        <div class="admin-brand">
            <i class="fa-solid fa-graduation-cap" style="font-size:1.6rem; color:#fbbf24;"></i>
            <div><h3>Rashid Minhas</h3><small style="color:#94a3b8;">School Khushab</small></div>
        </div>
        <ul class="admin-nav">
            <li><a href="dashboard.php"><i class="fa-solid fa-gauge"></i> Dashboard</a></li>
            <li><a href="admissions.php"><i class="fa-solid fa-user-graduate"></i> Admission Inquiries</a></li>
            <li><a href="messages.php"><i class="fa-solid fa-envelope"></i> Contact Messages</a></li>
            <li><a href="gallery.php"><i class="fa-solid fa-images"></i> Manage Gallery</a></li>
            <li><a href="settings.php" class="active"><i class="fa-solid fa-sliders"></i> School Settings</a></li>
            <li><a href="logout.php" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
        </ul>
    </aside>

    <main class="admin-main">
        <h2 style="font-size:1.4rem; font-weight:800; color:#064e3b; margin-bottom:20px;">School General Settings</h2>
        <?php if (!empty($msg)): ?>
            <div style="background:#ecfdf5; color:#065f46; padding:12px; border-radius:8px; margin-bottom:20px;"><?= htmlspecialchars($msg) ?></div>
        <?php endif; ?>

        <div class="data-card">
            <form method="POST" action="">
                <input type="hidden" name="save_settings" value="1">

                <div class="form-group">
                    <label>School Name</label>
                    <input type="text" name="school_name" class="form-control" value="<?= htmlspecialchars($settings['school_name'] ?? 'Superior Rashid Minhas School Khushab') ?>" required>
                </div>

                <div class="form-group">
                    <label>WhatsApp Number (e.g. 03417885841)</label>
                    <input type="text" name="whatsapp_number" class="form-control" value="<?= htmlspecialchars($settings['whatsapp_number'] ?? '03417885841') ?>" required>
                </div>

                <div class="form-group">
                    <label>Direct Phone Number</label>
                    <input type="text" name="phone_number" class="form-control" value="<?= htmlspecialchars($settings['phone_number'] ?? '+92 341 7885841') ?>" required>
                </div>

                <div class="form-group">
                    <label>Official Email Address</label>
                    <input type="email" name="email_address" class="form-control" value="<?= htmlspecialchars($settings['email_address'] ?? 'info@superiorrashidminhas.edu.pk') ?>" required>
                </div>

                <div class="form-group">
                    <label>Campus Location Address</label>
                    <input type="text" name="location_address" class="form-control" value="<?= htmlspecialchars($settings['location_address'] ?? 'Khushab, Punjab, Pakistan') ?>" required>
                </div>

                <div class="form-group">
                    <label>Office Hours</label>
                    <input type="text" name="office_hours" class="form-control" value="<?= htmlspecialchars($settings['office_hours'] ?? 'Monday – Saturday: 8:00 AM – 2:00 PM') ?>">
                </div>

                <div class="form-group" style="margin-top:20px;">
                    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                        <input type="checkbox" name="admissions_open" value="1" <?= ($settings['admissions_open'] ?? '1') === '1' ? 'checked' : '' ?>>
                        <span style="font-weight:700; color:#064e3b;">Show "Admissions Open" Banner & Badges</span>
                    </label>
                </div>

                <button type="submit" class="btn btn-primary" style="width:100%; margin-top:24px;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Changes
                </button>
            </form>
        </div>
    </main>
</div>
</body>
</html>
