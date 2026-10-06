<?php
// includes/footer.php
$settings = getSchoolSettings();
$schoolName = $settings['school_name'] ?? 'Superior Rashid Minhas School Khushab';
$whatsapp = $settings['whatsapp_number'] ?? '03417885841';
$whatsappInt = $settings['whatsapp_international'] ?? '923417885841';
$phone = $settings['phone_number'] ?? '+92 341 7885841';
$email = $settings['email_address'] ?? 'info@superiorrashidminhas.edu.pk';
$location = $settings['location_address'] ?? 'Khushab, Punjab, Pakistan';
?>

    <!-- FOOTER -->
    <footer class="site-footer">
        <div class="container footer-grid">
            <!-- Col 1: About School -->
            <div class="footer-col footer-about">
                <div class="footer-logo">
                    <div class="logo-crest">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div>
                        <h3><?= htmlspecialchars($schoolName) ?></h3>
                        <p class="tagline">Building Bright Minds, Inspiring Future Leaders</p>
                    </div>
                </div>
                <p class="footer-desc">
                    A premier educational institution in Khushab dedicated to academic rigor, moral character building, and modern scientific discovery in a supportive, secure environment.
                </p>
                <div class="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="footer-col">
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.php#home"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
                    <li><a href="index.php#about"><i class="fa-solid fa-chevron-right"></i> About Us</a></li>
                    <li><a href="index.php#academics"><i class="fa-solid fa-chevron-right"></i> Academics & Curriculum</a></li>
                    <li><a href="index.php#facilities"><i class="fa-solid fa-chevron-right"></i> Campus Facilities</a></li>
                    <li><a href="index.php#admissions"><i class="fa-solid fa-chevron-right"></i> Admissions 2026</a></li>
                    <li><a href="index.php#gallery"><i class="fa-solid fa-chevron-right"></i> Photo Gallery</a></li>
                    <li><a href="index.php#contact"><i class="fa-solid fa-chevron-right"></i> Contact Us</a></li>
                </ul>
            </div>

            <!-- Col 3: Contact Info -->
            <div class="footer-col">
                <h4 class="footer-heading">Contact Information</h4>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <strong>Address:</strong>
                        <p><?= htmlspecialchars($location) ?></p>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-brands fa-whatsapp"></i>
                    <div>
                        <strong>WhatsApp Admissions:</strong>
                        <p><a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission."><?= htmlspecialchars($whatsapp) ?></a></p>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <strong>Direct Phone:</strong>
                        <p><a href="tel:<?= htmlspecialchars($phone) ?>"><?= htmlspecialchars($phone) ?></a></p>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <div>
                        <strong>Official Email:</strong>
                        <p><a href="mailto:<?= htmlspecialchars($email) ?>"><?= htmlspecialchars($email) ?></a></p>
                    </div>
                </div>
            </div>

            <!-- Col 4: Newsletter -->
            <div class="footer-col">
                <h4 class="footer-heading">School Bulletin</h4>
                <p>Subscribe to receive news regarding exam results, school events, and admissions updates.</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to our school newsletter!'); this.reset();">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit" class="btn btn-gold"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
                <div class="hours-card">
                    <i class="fa-solid fa-clock"></i>
                    <span>Office Hours: Mon – Sat 8:00 AM – 2:00 PM</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container footer-bottom-flex">
                <p>&copy; 2026 Superior Rashid Minhas School Khushab. All Rights Reserved.</p>
                <p>Affiliated with BISE Sargodha &middot; Dedicated to Educational Excellence</p>
            </div>
        </div>
    </footer>

    <!-- FLOATING WHATSAPP BUTTON -->
    <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission."
       class="floating-whatsapp" 
       target="_blank" 
       rel="noopener"
       aria-label="Chat with Superior Rashid Minhas School Khushab on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
        <span class="whatsapp-tooltip">Chat with Admissions</span>
    </a>

    <!-- LIGHTBOX MODAL -->
    <div id="imageLightbox" class="lightbox-modal">
        <span class="lightbox-close" id="lightboxClose">&times;</span>
        <div class="lightbox-content">
            <img id="lightboxImg" src="" alt="Enlarged school photo">
            <div id="lightboxCaption" class="lightbox-caption"></div>
        </div>
    </div>

    <!-- MAIN JAVASCRIPT -->
    <script src="assets/js/script.js"></script>
</body>
</html>
