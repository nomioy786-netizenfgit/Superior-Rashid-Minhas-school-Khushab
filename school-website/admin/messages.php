<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: index.php');
    exit;
}

require_once __DIR__ . '/../config/database.php';
$pdo = getDBConnection();
$msg = '';

if (isset($_GET['delete'])) {
    $delId = intval($_GET['delete']);
    $pdo->prepare("DELETE FROM contact_messages WHERE id = :id")->execute([':id' => $delId]);
    $msg = 'Message deleted.';
}

$messages = $pdo->query("SELECT * FROM contact_messages ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Messages | Superior Rashid Minhas School</title>
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
        .data-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
        th, td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #e2e8f0; }
        th { background: #f8fafc; color: #475569; }
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
            <li><a href="messages.php" class="active"><i class="fa-solid fa-envelope"></i> Contact Messages</a></li>
            <li><a href="gallery.php"><i class="fa-solid fa-images"></i> Manage Gallery</a></li>
            <li><a href="settings.php"><i class="fa-solid fa-sliders"></i> School Settings</a></li>
            <li><a href="logout.php" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
        </ul>
    </aside>

    <main class="admin-main">
        <h2 style="font-size:1.4rem; font-weight:800; color:#064e3b; margin-bottom:20px;">Contact Messages (<?= count($messages) ?>)</h2>
        <?php if (!empty($msg)): ?>
            <div style="background:#ecfdf5; color:#065f46; padding:12px; border-radius:8px; margin-bottom:20px;"><?= htmlspecialchars($msg) ?></div>
        <?php endif; ?>

        <div class="data-card">
            <table>
                <thead>
                    <tr>
                        <th>Sender Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($messages as $m): ?>
                        <tr>
                            <td><strong><?= htmlspecialchars($m['name']) ?></strong></td>
                            <td><?= htmlspecialchars($m['phone']) ?></td>
                            <td><?= htmlspecialchars($m['email']) ?></td>
                            <td style="max-width:320px;"><?= nl2br(htmlspecialchars($m['message'])) ?></td>
                            <td><small><?= date('M d, Y', strtotime($m['created_at'])) ?></small></td>
                            <td>
                                <a href="https://wa.me/92<?= ltrim(preg_replace('/[^0-9]/', '', $m['phone']), '0') ?>" target="_blank" class="btn btn-whatsapp" style="padding:4px 8px; font-size:0.75rem;">
                                    <i class="fa-brands fa-whatsapp"></i> Reply
                                </a>
                                <a href="messages.php?delete=<?= $m['id'] ?>" onclick="return confirm('Delete message?');" style="color:#ef4444; margin-left:8px;">
                                    <i class="fa-solid fa-trash"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </main>
</div>
</body>
</html>
