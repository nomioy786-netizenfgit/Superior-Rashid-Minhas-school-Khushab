# Superior Rashid Minhas School Khushab – Official Web Portal

A modern, fast, responsive, and professional school website and administrative portal designed for **Superior Rashid Minhas School Khushab, Punjab, Pakistan**.

- **Official WhatsApp:** `03417885841` (Direct wa.me integration)
- **Location:** Khushab, Punjab, Pakistan
- **Color Palette:** Emerald Green (`#064e3b`), Gold Accent (`#d97706`), Crisp White & Light Slate

---

## Project Structure

```text
/school-website
    /assets
        /css
            style.css          # Clean CSS3 design system with emerald/gold palette
        /js
            script.js          # Sticky nav, mobile drawer, filters, lightbox, AJAX forms
        /images                # School campus, lab, and activity photos
    /admin
        index.php              # Secure admin login (password_verify + session)
        dashboard.php          # Metric statistics, recent inquiries, quick actions
        admissions.php         # Review, filter, update status, WhatsApp parents, delete
        messages.php           # Contact inbox management with direct reply
        gallery.php            # Photo upload & delete management with category tags
        settings.php           # Update school WhatsApp, phone, email, address, session
        logout.php             # Session destruction handler
    /config
        database.php           # Secure PDO database connection with fallback defaults
    /includes
        header.php             # Top information bar, sticky navigation, mobile menu
        footer.php             # Dark green footer, quick links, contact, WhatsApp float
    index.php                  # Complete unified school website with all sections
    about.php                  # Dedicated About & Principal Message page
    submit-admission.php       # Sanitized JSON API handler for admission inquiries
    submit-contact.php         # Sanitized JSON API handler for contact messages
    database.sql               # Complete MySQL database export (ready to import)
    README.md                  # This complete documentation
```

---

## 1. How to Run Locally

### Using XAMPP / WAMP / Laragon:
1. Install **XAMPP** (PHP 7.4, 8.0, 8.1, 8.2 or 8.3).
2. Copy the `school-website` directory into your server's root folder:
   - For XAMPP: `C:/xampp/htdocs/school-website`
   - For Laragon: `C:/laragon/www/school-website`
   - For WAMP: `C:/wamp64/www/school-website`
3. Start **Apache** and **MySQL** services in your XAMPP Control Panel.
4. Open your browser and navigate to:
   ```
   http://localhost/school-website/
   ```

### Using PHP Built-In Server:
You can also run without installing full Apache:
```bash
cd school-website
php -S localhost:8000
```
Then visit `http://localhost:8000/`.

---

## 2. How to Create MySQL Database & Import `database.sql`

1. Open **phpMyAdmin** in your browser (`http://localhost/phpmyadmin/`).
2. Click **New** in the left sidebar to create a database.
3. Database Name: `srms_khushab_db`
   - Collation: `utf8mb4_unicode_ci`
   - Click **Create**.
4. Select `srms_khushab_db`, click the **Import** tab at the top.
5. Click **Choose File**, select `school-website/database.sql`, and click **Go** (or **Import**).
6. All 5 tables will be created automatically:
   - `admins` (Default admin: `admin` / `admin123`)
   - `admissions` (Student inquiry submissions)
   - `contact_messages` (Parent contact messages)
   - `gallery` (Categorized campus and event photos)
   - `school_settings` (Dynamic WhatsApp, Phone, School info)

---

## 3. How to Configure Database Credentials

Open `config/database.php` in any text editor:
```php
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'root');       // Your MySQL username
define('DB_PASS', getenv('DB_PASS') ?: '');           // Your MySQL password
define('DB_NAME', getenv('DB_NAME') ?: 'srms_khushab_db');
```
For production cPanel hosting, replace `'root'` and `''` with your cPanel database username and password.

---

## 4. How to Configure WhatsApp Number

The school WhatsApp number `03417885841` can be changed in two ways:
1. **From Admin Panel:**
   - Log into `http://localhost/school-website/admin/`
   - Go to **School Settings**
   - Enter your new WhatsApp number and click **Save Changes**.
2. **From Code:**
   - Edit `config/database.php` or `school_settings` table in MySQL.

All floating WhatsApp buttons and direct application buttons use the official Pakistani WhatsApp link format:
`https://wa.me/923417885841?text=...`

---

## 5. How to Login to Admin Panel

- **URL:** `http://localhost/school-website/admin/index.php`
- **Default Username:** `admin`
- **Default Password:** `admin123`
*(Passwords are hashed securely using PHP `password_hash()` and verified via `password_verify()`.)*

---

## 6. How to Deploy to Production / cPanel Hosting

1. **Upload Files:**
   - Compress the contents of `school-website` into a `.zip` archive.
   - In cPanel, open **File Manager** -> `public_html`.
   - Upload and extract your `.zip` file.
2. **Setup Database:**
   - In cPanel, click **MySQL Database Wizard**.
   - Create a database (e.g. `youruser_srms_db`).
   - Create a database user and assign all privileges.
   - Go to **phpMyAdmin** in cPanel, select your database, and import `database.sql`.
3. **Update Config:**
   - In File Manager, edit `config/database.php` with your cPanel DB name, username, and password.
4. Visit your domain: `https://your-school-domain.com`.

---

## 7. Security Features Implemented

- **Prepared SQL Statements**: Uses PHP Data Objects (PDO) with parameter binding to prevent SQL injection vulnerabilities.
- **XSS Sanitization**: All user inputs undergo `htmlspecialchars()` with `ENT_QUOTES` before rendering.
- **Password Hashing**: Employs PHP `password_hash()` (BCRYPT) so passwords are never stored in plaintext.
- **CSRF & Session Protection**: Admin portal uses native authenticated PHP sessions (`$_SESSION['admin_logged_in']`).
