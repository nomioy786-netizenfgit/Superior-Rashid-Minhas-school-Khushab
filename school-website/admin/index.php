<?php
/**
 * Admin Login Page
 * Superior Rashid Minhas School Khushab
 */

session_start();
require_once __DIR__ . '/../config/database.php';

// If already logged in, redirect to dashboard
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (!empty($username) && !empty($password)) {
        try {
            $pdo = getDBConnection();
            $stmt = $pdo->prepare("SELECT * FROM admins WHERE username = :username LIMIT 1");
            $stmt->execute([':username' => $username]);
            $admin = $stmt->fetch();

            // Verify password or allow fallback default if first-time run
            if ($admin && (password_verify($password, $admin['password']) || ($username === 'admin' && $password === 'admin123'))) {
                $_SESSION['admin_logged_in'] = true;
                $_SESSION['admin_id'] = $admin['id'];
                $_SESSION['admin_username'] = $admin['username'];
                $_SESSION['admin_name'] = $admin['full_name'];

                header('Location: dashboard.php');
                exit;
            } else if ($username === 'admin' && $password === 'admin123') {
                // Fallback default for easy initial setup
                $_SESSION['admin_logged_in'] = true;
                $_SESSION['admin_username'] = 'admin';
                $_SESSION['admin_name'] = 'Administrator';
                header('Location: dashboard.php');
                exit;
            } else {
                $error = 'Invalid username or password. (Default: admin / admin123)';
            }
        } catch (\Exception $e) {
            // If database not connected, fallback allows admin demo
            if ($username === 'admin' && $password === 'admin123') {
                $_SESSION['admin_logged_in'] = true;
                $_SESSION['admin_username'] = 'admin';
                $_SESSION['admin_name'] = 'Administrator';
                header('Location: dashboard.php');
                exit;
            }
            $error = 'Database error: ' . $e->getMessage();
        }
    } else {
        $error = 'Please enter both username and password.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Superior Rashid Minhas School Khushab</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #022c22 0%, #064e3b 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .login-card {
            background: #ffffff;
            border-radius: 16px;
            width: 100%;
            max-width: 440px;
            padding: 40px 32px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .login-crest {
            width: 60px;
            height: 60px;
            background: #064e3b;
            color: #fbbf24;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin: 0 auto 16px auto;
        }
        .login-header {
            text-align: center;
            margin-bottom: 28px;
        }
        .login-header h2 {
            font-size: 1.4rem;
            font-weight: 800;
            color: #064e3b;
        }
        .login-header p {
            font-size: 0.85rem;
            color: #64748b;
        }
        .alert-error {
            background-color: #fee2e2;
            color: #991b1b;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            margin-bottom: 20px;
            border: 1px solid #f87171;
        }
        .default-hint {
            margin-top: 24px;
            background: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            color: #475569;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="login-card">
        <div class="login-crest">
            <i class="fa-solid fa-school"></i>
        </div>
        <div class="login-header">
            <h2>School Admin Portal</h2>
            <p>Superior Rashid Minhas School Khushab</p>
        </div>

        <?php if (!empty($error)): ?>
            <div class="alert-error">
                <i class="fa-solid fa-triangle-exclamation"></i> <?= htmlspecialchars($error) ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" class="form-control" placeholder="Enter username (admin)" required autofocus>
            </div>

            <div class="form-group" style="margin-bottom: 24px;">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="form-control" placeholder="Enter password (admin123)" required>
            </div>

            <button type="submit" class="btn btn-gold" style="width: 100%; padding: 12px;">
                <i class="fa-solid fa-right-to-bracket"></i> Login to Dashboard
            </button>
        </form>

        <div class="default-hint">
            <strong>Default Credentials:</strong><br>
            Username: <code>admin</code> &middot; Password: <code>admin123</code>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="../index.php" style="font-size: 0.85rem; color: #064e3b; font-weight: 600;">
                <i class="fa-solid fa-arrow-left"></i> Back to School Website
            </a>
        </div>
    </div>

</body>
</html>
