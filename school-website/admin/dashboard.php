<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: index.php');
    exit;
}

require_once __DIR__ . '/../config/database.php';
$settings = getSchoolSettings();

$totalAdmissions = 0;
$totalMessages = 0;
$totalGallery = 0;
$recentAdmissions = [];

try {
    $pdo = getDBConnection();
    $totalAdmissions = $pdo->query("SELECT COUNT(*) FROM admissions")->fetchColumn();
    $totalMessages = $pdo->query("SELECT COUNT(*) FROM contact_messages")->fetchColumn();
    $totalGallery = $pdo->query("SELECT COUNT(*) FROM gallery")->fetchColumn();

    $stmt = $pdo->query("SELECT * FROM admissions ORDER BY id DESC LIMIT 5");
    $recentAdmissions = $stmt->fetchAll();
} catch (\Exception $e) {
    // Demo fallback counts if offline
    $totalAdmissions = 3;
    $totalMessages = 2;
    $totalGallery = 6;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | Superior Rashid Minhas School Khushab</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        .admin-layout {
            display: flex;
            min-height: 100vh;
            background: #f1f5f9;
        }
        .admin-sidebar {
            width: 260px;
            background: #022c22;
            color: #ffffff;
            padding: 24px 16px;
            display: flex;
            flex-direction: column;
        }
        .admin-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            margin-bottom: 24px;
        }
        .admin-nav {
            list-style: none;
            flex-grow: 1;
        }
        .admin-nav li {
            margin-bottom: 6px;
        }
        .admin-nav a {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 14px;
            border-radius: 8px;
            color: #cbd5e1;
            font-size: 0.92rem;
            font-weight: 500;
        }
        .admin-nav a:hover,
        .admin-nav a.active {
            background: #064e3b;
            color: #fbbf24;
        }
        .admin-main {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
        }
        .admin-topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
            padding: 16px 24px;
            border-radius: 12px;
            margin-bottom: 28px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .stat-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card-box {
            background: #ffffff;
            padding: 22px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            gap: 18px;
        }
        .stat-icon {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: #ecfdf5;
            color: #064e3b;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .stat-data h3 {
            font-size: 1.7rem;
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
        }
        .stat-data p {
            font-size: 0.85rem;
            color: #64748b;
        }
        .data-table-card {
            background: #ffffff;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .table-header-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }
        th, td {
            padding: 12px 14px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }
        th {
            background: #f8fafc;
            color: #475569;
            font-weight: 600;
        }
        .status-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.78rem;
            font-weight: 600;
            text-transform: capitalize;
        }
        .status-new { background: #dbeafe; color: #1e40af; }
        .status-reviewed { background: #fef3c7; color: #92400e; }
        .status-contacted { background: #d1fae5; color: #065f46; }
    </style>
</head>
<body>

<div class="admin-layout">
    <!-- Sidebar -->
    <aside class="admin-sidebar">
        <div class="admin-brand">
            <i class="fa-solid fa-graduation-cap" style="font-size:1.6rem; color:#fbbf24;"></i>
            <div>
                <h3 style="font-size:1.05rem; font-weight:700;">Rashid Minhas</h3>
                <small style="color:#94a3b8;">School Khushab</small>
            </div>
        </div>

        <ul class="admin-nav">
            <li><a href="dashboard.php" class="active"><i class="fa-solid fa-gauge"></i> Dashboard</a></li>
            <li><a href="admissions.php"><i class="fa-solid fa-user-graduate"></i> Admission Inquiries</a></li>
            <li><a href="messages.php"><i class="fa-solid fa-envelope"></i> Contact Messages</a></li>
            <li><a href="gallery.php"><i class="fa-solid fa-images"></i> Manage Gallery</a></li>
            <li><a href="settings.php"><i class="fa-solid fa-sliders"></i> School Settings</a></li>
            <li><a href="../index.php" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Website</a></li>
        </ul>

        <div style="padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
            <a href="logout.php" style="color:#ef4444; font-size:0.9rem; display:flex; align-items:center; gap:8px;">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <main class="admin-main">
        <div class="admin-topbar">
            <div>
                <h2 style="font-size:1.4rem; font-weight:800; color:#064e3b;">Control Dashboard</h2>
                <p style="font-size:0.85rem; color:#64748b;">Welcome back, <?= htmlspecialchars($_SESSION['admin_name'] ?? 'Administrator') ?></p>
            </div>
            <div>
                <a href="settings.php" class="btn btn-gold" style="padding:8px 16px; font-size:0.85rem;">
                    <i class="fa-solid fa-phone"></i> WhatsApp: <?= htmlspecialchars($settings['whatsapp_number'] ?? '03417885841') ?>
                </a>
            </div>
        </div>

        <!-- Metric Cards -->
        <div class="stat-cards-grid">
            <div class="stat-card-box">
                <div class="stat-icon" style="background:#ecfdf5; color:#064e3b;"><i class="fa-solid fa-user-graduate"></i></div>
                <div class="stat-data">
                    <h3><?= $totalAdmissions ?></h3>
                    <p>Total Admissions</p>
                </div>
            </div>

            <div class="stat-card-box">
                <div class="stat-icon" style="background:#eff6ff; color:#2563eb;"><i class="fa-solid fa-envelope-open-text"></i></div>
                <div class="stat-data">
                    <h3><?= $totalMessages ?></h3>
                    <p>Contact Inquiries</p>
                </div>
            </div>

            <div class="stat-card-box">
                <div class="stat-icon" style="background:#fef3c7; color:#d97706;"><i class="fa-solid fa-image"></i></div>
                <div class="stat-data">
                    <h3><?= $totalGallery ?></h3>
                    <p>Gallery Photos</p>
                </div>
            </div>

            <div class="stat-card-box">
                <div class="stat-icon" style="background:#fdf2f8; color:#db2777;"><i class="fa-solid fa-school-circle-check"></i></div>
                <div class="stat-data">
                    <h3 style="font-size:1.2rem; color:#059669;">Active</h3>
                    <p>Admissions Session 26-27</p>
                </div>
            </div>
        </div>

        <!-- Recent Admissions -->
        <div class="data-table-card">
            <div class="table-header-flex">
                <h3 style="font-size:1.15rem; font-weight:700; color:#0f172a;">Recent Admission Inquiries</h3>
                <a href="admissions.php" style="font-size:0.85rem; color:#064e3b; font-weight:600;">View All &rarr;</a>
            </div>

            <?php if (!empty($recentAdmissions)): ?>
                <table>
                    <thead>
                        <tr>
                            <th>Inquiry Code</th>
                            <th>Student Name</th>
                            <th>Father Name</th>
                            <th>Target Class</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Quick Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($recentAdmissions as $adm): ?>
                            <tr>
                                <td><strong><?= htmlspecialchars($adm['inquiry_code']) ?></strong></td>
                                <td><?= htmlspecialchars($adm['student_name']) ?></td>
                                <td><?= htmlspecialchars($adm['father_name']) ?></td>
                                <td><?= htmlspecialchars($adm['class_applying']) ?></td>
                                <td><?= htmlspecialchars($adm['phone']) ?></td>
                                <td><span class="status-badge status-<?= $adm['status'] ?>"><?= $adm['status'] ?></span></td>
                                <td>
                                    <a href="https://wa.me/92<?= ltrim(preg_replace('/[^0-9]/', '', $adm['phone']), '0') ?>?text=Assalam-o-Alaikum%20from%20Superior%20Rashid%20Minhas%20School%20Khushab%20regarding%20admission%20inquiry%20<?= $adm['inquiry_code'] ?>" target="_blank" class="btn btn-whatsapp" style="padding:4px 10px; font-size:0.75rem;">
                                        <i class="fa-brands fa-whatsapp"></i> Chat
                                    </a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <p style="color:#64748b; font-size:0.9rem; padding:10px 0;">No admission inquiries yet.</p>
            <?php endif; ?>
        </div>
    </main>
</div>

</body>
</html>
