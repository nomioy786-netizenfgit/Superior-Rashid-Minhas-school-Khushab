/**
 * Superior Rashid Minhas School Khushab
 * Frontend JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu on link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 2. Sticky Header shadow
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // 3. Gallery Category Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 4. Lightbox Modal
    const lightboxModal = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function () {
                const img = this.querySelector('img');
                const title = this.querySelector('h4')?.innerText || '';
                const desc = this.querySelector('p')?.innerText || '';

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerHTML = `<strong>${title}</strong><br><small>${desc}</small>`;
                    lightboxModal.classList.add('active');
                }
            });
        });

        lightboxClose?.addEventListener('click', function () {
            lightboxModal.classList.remove('active');
        });

        lightboxModal.addEventListener('click', function (e) {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                lightboxModal.classList.remove('active');
            }
        });
    }

    // 5. AJAX Admission Inquiry Form
    const admissionForm = document.getElementById('admissionForm');
    const admissionAlert = document.getElementById('admissionAlert');

    if (admissionForm) {
        admissionForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = admissionForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

            const formData = new FormData(admissionForm);

            try {
                const response = await fetch('submit-admission.php', {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();

                if (result.success) {
                    if (admissionAlert) {
                        admissionAlert.style.display = 'block';
                        admissionAlert.style.backgroundColor = '#ecfdf5';
                        admissionAlert.style.color = '#065f46';
                        admissionAlert.style.border = '1px solid #a7f3d0';
                        admissionAlert.style.padding = '14px';
                        admissionAlert.style.borderRadius = '8px';
                        admissionAlert.style.marginBottom = '18px';
                        admissionAlert.innerHTML = `<strong>Success!</strong> ${result.message}<br><small>Your Reference Code: <strong>${result.inquiry_code}</strong></small>`;
                    }
                    admissionForm.reset();
                } else {
                    throw new Error(result.error || 'Failed to submit form.');
                }
            } catch (err) {
                if (admissionAlert) {
                    admissionAlert.style.display = 'block';
                    admissionAlert.style.backgroundColor = '#fef2f2';
                    admissionAlert.style.color = '#991b1b';
                    admissionAlert.style.border = '1px solid #fecaca';
                    admissionAlert.style.padding = '14px';
                    admissionAlert.style.borderRadius = '8px';
                    admissionAlert.style.marginBottom = '18px';
                    admissionAlert.innerText = err.message || 'Error submitting application.';
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    // 6. AJAX Contact Form
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('submit-contact.php', {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();

                if (result.success) {
                    if (contactAlert) {
                        contactAlert.style.display = 'block';
                        contactAlert.style.backgroundColor = '#ecfdf5';
                        contactAlert.style.color = '#065f46';
                        contactAlert.style.border = '1px solid #a7f3d0';
                        contactAlert.style.padding = '14px';
                        contactAlert.style.borderRadius = '8px';
                        contactAlert.style.marginBottom = '18px';
                        contactAlert.innerHTML = `<strong>Sent!</strong> ${result.message}`;
                    }
                    contactForm.reset();
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } catch (err) {
                if (contactAlert) {
                    contactAlert.style.display = 'block';
                    contactAlert.style.backgroundColor = '#fef2f2';
                    contactAlert.style.color = '#991b1b';
                    contactAlert.style.border = '1px solid #fecaca';
                    contactAlert.style.padding = '14px';
                    contactAlert.style.borderRadius = '8px';
                    contactAlert.style.marginBottom = '18px';
                    contactAlert.innerText = err.message || 'Error sending message.';
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});
