<?php
require_once __DIR__ . '/config/database.php';
$settings = getSchoolSettings();
include_once __DIR__ . '/includes/header.php';
?>
<section class="section about-section" style="padding-top:60px;">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">About Our Institution</span>
            <h1 class="section-title">About Superior Rashid Minhas School Khushab</h1>
            <p class="section-subtitle">Dedicated to holistic character building, moral strength, and cutting-edge academic excellence in Khushab, Punjab.</p>
        </div>

        <div class="about-grid">
            <div class="about-image-wrapper">
                <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80" alt="School Campus">
                <div class="about-badge">
                    <span class="num">15+</span>
                    <span class="lbl">Years of Academic Leadership</span>
                </div>
            </div>

            <div class="about-content">
                <h2>Our Mission & Vision</h2>
                <p class="about-p">
                    Named in tribute to the youngest recipient of Nishan-e-Haider, Pilot Officer Rashid Minhas (Shaheed), our school is founded upon values of selflessness, valor, and supreme dedication. We strive to provide accessible, high-caliber education for boys and girls across Khushab.
                </p>
                <p class="about-p">
                    Our educational philosophy centers around concept-based learning rather than rote memorization. With well-equipped science and computer laboratories, dedicated Tarbiyah sessions, and continuous faculty development, we empower every student to achieve their full academic potential.
                </p>

                <div class="about-stats">
                    <div class="stat-item"><div class="stat-num">35+</div><div class="stat-label">Certified Teachers</div></div>
                    <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">Science & IT Lab Access</div></div>
                    <div class="stat-item"><div class="stat-num">1,500+</div><div class="stat-label">Alumni in Colleges & Universities</div></div>
                    <div class="stat-item"><div class="stat-num">BISE</div><div class="stat-label">Top Sargodha Board Position Holders</div></div>
                </div>

                <a href="index.php#admissions" class="btn btn-gold"><i class="fa-solid fa-graduation-cap"></i> Apply for Admission</a>
            </div>
        </div>
    </div>
</section>
<?php include_once __DIR__ . '/includes/footer.php'; ?>
