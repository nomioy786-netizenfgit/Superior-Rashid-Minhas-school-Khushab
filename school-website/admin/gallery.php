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
    $pdo->prepare("DELETE FROM gallery WHERE id = :id")->execute([':id' => $delId]);
    $msg = 'Gallery photo removed.';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_photo'])) {
    $title = trim($_POST['title'] ?? '');
    $category = $_POST['category'] ?? 'Campus';
    $imageUrl = trim($_POST['image_url'] ?? '');
    $caption = trim($_POST['caption'] ?? '');

    if (!empty($title) && !empty($imageUrl)) {
        $stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url, caption) VALUES (:title, :category, :image_url, :caption)");
        $stmt->execute([
            ':title' => htmlspecialchars($title),
            ':category' => $category,
            ':image_url' => filter_var($imageUrl, FILTER_SANITIZE_URL),
            ':caption' => htmlspecialchars($caption),
        ]);
        $msg = 'Photo successfully added to gallery!';
    }
}

$photos = $pdo->query("SELECT * FROM gallery ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Manage Gallery | Superior Rashid Minhas School</title>
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
        .admin-grid-2 { display: grid; grid-template-columns: 360px 1fr; gap: 24px; }
        .data-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .gallery-grid-admin { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
        .photo-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; position: relative; }
        .photo-card img { width: 100%; height: 140px; object-fit: cover; }
        .photo-info { padding: 10px; }
        .photo-title { font-weight: 700; font-size: 0.85rem; margin-bottom: 4px; }
        .photo-cat { font-size: 0.75rem; color: #d97706; font-weight: 600; }
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
            <li><a href="gallery.php" class="active"><i class="fa-solid fa-images"></i> Manage Gallery</a></li>
            <li><a href="settings.php"><i class="fa-solid fa-sliders"></i> School Settings</a></li>
            <li><a href="logout.php" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
        </ul>
    </aside>

    <main class="admin-main">
        <h2 style="font-size:1.4rem; font-weight:800; color:#064e3b; margin-bottom:20px;">School Gallery Manager</h2>
        <?php if (!empty($msg)): ?>
            <div style="background:#ecfdf5; color:#065f46; padding:12px; border-radius:8px; margin-bottom:20px;"><?= htmlspecialchars($msg) ?></div>
        <?php endif; ?>

        <div class="admin-grid-2">
            <!-- Add Photo Form -->
            <div class="data-card">
                <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:16px;">Add New Photo</h3>
                <form method="POST" action="">
                    <input type="hidden" name="add_photo" value="1">
                    <div class="form-group">
                        <label>Photo Title *</label>
                        <input type="text" name="title" class="form-control" placeholder="e.g. Science Laboratory Practicals" required>
                    </div>
                    <div class="form-group">
                        <label>Category *</label>
                        <select name="category" class="form-control" required>
                            <option value="Campus">Campus</option>
                            <option value="Students">Students</option>
                            <option value="Events">Events</option>
                            <option value="Sports">Sports</option>
                            <option value="Activities">Activities</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Image URL *</label>
                        <input type="url" name="image_url" class="form-control" placeholder="https://example.com/photo.jpg" required>
                        <small style="color:#64748b; font-size:0.75rem;">Can be direct link or hosted image URL.</small>
                    </div>
                    <div class="form-group">
                        <label>Caption / Description</label>
                        <textarea name="caption" class="form-control" rows="2" placeholder="Brief description of the activity..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-gold" style="width:100%;"><i class="fa-solid fa-plus"></i> Add to Gallery</button>
                </form>
            </div>

            <!-- Existing Photos Grid -->
            <div class="data-card">
                <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:16px;">Current Gallery Items (<?= count($photos) ?>)</h3>
                <div class="gallery-grid-admin">
                    <?php foreach ($photos as $p): ?>
                        <div class="photo-card">
                            <img src="<?= htmlspecialchars($p['image_url']) ?>" alt="School Photo">
                            <div class="photo-info">
                                <span class="photo-cat"><?= htmlspecialchars($p['category']) ?></span>
                                <div class="photo-title"><?= htmlspecialchars($p['title']) ?></div>
                                <a href="gallery.php?delete=<?= $p['id'] ?>" onclick="return confirm('Remove photo?');" style="color:#ef4444; font-size:0.8rem;">
                                    <i class="fa-solid fa-trash"></i> Delete
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </main>
</div>
</body>
</html>
