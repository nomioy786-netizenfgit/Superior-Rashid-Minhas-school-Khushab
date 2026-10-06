<?php
require_once __DIR__ . '/config/database.php';
$settings = getSchoolSettings();
include_once __DIR__ . '/includes/header.php';
?>

<!-- 1. HERO SECTION -->
<section class="hero-section" id="home">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <div class="hero-badge">
            <i class="fa-solid fa-star"></i> Admissions Open Session 2026-2027
        </div>
        <h1 class="hero-title">Superior Rashid Minhas School Khushab</h1>
        <p class="hero-subtitle">Building Bright Minds, Inspiring Future Leaders</p>
        <p class="hero-desc">
            Providing quality education, character development and a supportive learning environment for the students of Khushab.
        </p>
        <div class="hero-buttons">
            <a href="#admissions" class="btn btn-gold">
                <i class="fa-solid fa-graduation-cap"></i> Apply for Admission
            </a>
            <a href="#about" class="btn btn-outline-white">
                <i class="fa-solid fa-compass"></i> Explore Our School
            </a>
            <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission." target="_blank" class="btn btn-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
        </div>

        <div class="hero-highlights">
            <div class="hero-highlight-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>Registered Institution</span>
            </div>
            <div class="hero-highlight-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>BISE Sargodha Syllabus</span>
            </div>
            <div class="hero-highlight-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>Modern Science & IT Labs</span>
            </div>
            <div class="hero-highlight-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>Safe School Transport</span>
            </div>
        </div>
    </div>
</section>

<!-- 2. WHY CHOOSE US -->
<section class="section" id="why-choose-us">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Educational Distinction</span>
            <h2 class="section-title">Why Choose Superior Rashid Minhas School?</h2>
            <p class="section-subtitle">We blend traditional moral ethics with contemporary modern education to empower students for academic, personal, and career triumph.</p>
        </div>

        <div class="features-grid">
            <!-- 1. Quality Education -->
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <h3 class="feature-title">Quality Education</h3>
                <p class="feature-desc">A conceptual curriculum designed to foster deep analytical understanding, critical inquiry, and sustained academic distinction.</p>
            </div>

            <!-- 2. Experienced Teachers -->
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <i class="fa-solid fa-chalkboard-user"></i>
                </div>
                <h3 class="feature-title">Experienced Teachers</h3>
                <p class="feature-desc">Subject specialists and dedicated educators who provide individualized attention and mentorship to every young learner.</p>
            </div>

            <!-- 3. Modern Learning Environment -->
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <i class="fa-solid fa-microchip"></i>
                </div>
                <h3 class="feature-title">Modern Learning Environment</h3>
                <p class="feature-desc">Multimedia-enabled smart classrooms, updated computers, and high-standard scientific apparatus fostering discovery.</p>
            </div>

            <!-- 4. Character Building -->
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <i class="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h3 class="feature-title">Character Building</h3>
                <p class="feature-desc">Instilling Islamic ethics, leadership qualities, civic duty, integrity, and patriotism inspired by the courage of Rashid Minhas.</p>
            </div>

            <!-- 5. Safe & Caring Campus -->
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <h3 class="feature-title">Safe & Caring Campus</h3>
                <p class="feature-desc">Comprehensive CCTV monitoring, vetted security personnel, clean hygienic drinking water, and caring supervision.</p>
            </div>
        </div>
    </div>
</section>

<!-- 3. ABOUT SCHOOL -->
<section class="section about-section" id="about">
    <div class="container">
        <div class="about-grid">
            <div class="about-image-wrapper">
                <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80" alt="Superior Rashid Minhas School Khushab Campus">
                <div class="about-badge">
                    <span class="num">15+</span>
                    <span class="lbl">Years of Academic Legacy</span>
                </div>
            </div>

            <div class="about-content">
                <span class="section-kicker">Welcome to Excellence</span>
                <h2>About Superior Rashid Minhas School</h2>
                <p class="about-p">
                    At <strong>Superior Rashid Minhas School Khushab</strong>, our mission is to nurture bright, capable, and ethically grounded future leaders. Founded with a deep commitment to high-standard education in Khushab, we believe every child possesses innate gifts that flourish when guided by passion and discipline.
                </p>
                <p class="about-p">
                    We combine proven teaching pedagogies with interactive classroom discussions, rigorous board examination coaching, and comprehensive Tarbiyah. Our experienced faculty encourages students to think independently, ask insightful questions, and develop the confidence necessary to excel in higher education and life.
                </p>

                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-num">35+</div>
                        <div class="stat-label">Experienced Faculty</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-num">100%</div>
                        <div class="stat-label">Modern Learning</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-num">1500+</div>
                        <div class="stat-label">Student Development</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-num">A+</div>
                        <div class="stat-label">Quality Education</div>
                    </div>
                </div>

                <a href="#academics" class="btn btn-primary">
                    <i class="fa-solid fa-arrow-right"></i> Read More About Our Programs
                </a>
            </div>
        </div>
    </div>
</section>

<!-- 4. ACADEMICS -->
<section class="section" id="academics">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Curriculum & Pathways</span>
            <h2 class="section-title">Academic Programs</h2>
            <p class="section-subtitle">Structured, developmentally appropriate learning stages from early years foundation up to secondary board certification.</p>
        </div>

        <div class="academics-grid">
            <!-- Early Education -->
            <div class="academic-card">
                <div class="academic-img-box">
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Early Education">
                    <span class="academic-age">Ages 3 – 5 Yrs</span>
                </div>
                <div class="academic-body">
                    <h3 class="academic-title">Early Education</h3>
                    <span class="academic-sub">Playgroup, Nursery & Prep</span>
                    <p class="academic-desc">Play-based cognitive stimulation, sensory discovery, phonics foundations, and nurturing social confidence in young hearts.</p>
                    <ul class="academic-list">
                        <li><i class="fa-solid fa-check"></i> Phonics & English Reading</li>
                        <li><i class="fa-solid fa-check"></i> Basic Number Concepts & Shapes</li>
                        <li><i class="fa-solid fa-check"></i> Storytelling & Creative Arts</li>
                    </ul>
                    <a href="#admissions" class="btn btn-primary" style="margin-top:auto;"><i class="fa-solid fa-envelope"></i> Learn More</a>
                </div>
            </div>

            <!-- Primary Classes -->
            <div class="academic-card">
                <div class="academic-img-box">
                    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Primary Classes">
                    <span class="academic-age">Grades 1 – 5</span>
                </div>
                <div class="academic-body">
                    <h3 class="academic-title">Primary Classes</h3>
                    <span class="academic-sub">Foundations of Literacy & Math</span>
                    <p class="academic-desc">Building strong computational ability, English/Urdu bilingual mastery, introductory science projects, and character etiquette.</p>
                    <ul class="academic-list">
                        <li><i class="fa-solid fa-check"></i> Core English & Urdu Grammar</li>
                        <li><i class="fa-solid fa-check"></i> Mathematics & Mental Calculation</li>
                        <li><i class="fa-solid fa-check"></i> General Science & Islamiat</li>
                    </ul>
                    <a href="#admissions" class="btn btn-primary" style="margin-top:auto;"><i class="fa-solid fa-envelope"></i> Learn More</a>
                </div>
            </div>

            <!-- Middle Classes -->
            <div class="academic-card">
                <div class="academic-img-box">
                    <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" alt="Middle Classes">
                    <span class="academic-age">Grades 6 – 8</span>
                </div>
                <div class="academic-body">
                    <h3 class="academic-title">Middle Classes</h3>
                    <span class="academic-sub">Analytical & Scientific Skills</span>
                    <p class="academic-desc">Strengthening abstract problem-solving, science concepts, IT skills, and speech debates to prepare for Matriculation.</p>
                    <ul class="academic-list">
                        <li><i class="fa-solid fa-check"></i> Integrated Science & Experiments</li>
                        <li><i class="fa-solid fa-check"></i> Computer Applications & Typing</li>
                        <li><i class="fa-solid fa-check"></i> Regular Assessment Tests</li>
                    </ul>
                    <a href="#admissions" class="btn btn-primary" style="margin-top:auto;"><i class="fa-solid fa-envelope"></i> Learn More</a>
                </div>
            </div>

            <!-- Secondary Classes -->
            <div class="academic-card">
                <div class="academic-img-box">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Secondary Classes">
                    <span class="academic-age">Grades 9 & 10 (Matric)</span>
                </div>
                <div class="academic-body">
                    <h3 class="academic-title">Secondary Classes</h3>
                    <span class="academic-sub">Matriculation Board Excellence</span>
                    <p class="academic-desc">Intensive BISE Sargodha board preparation with daily test sessions, complete syllabus revisions, and laboratory practicals.</p>
                    <ul class="academic-list">
                        <li><i class="fa-solid fa-check"></i> Science Group (Biology / Computer)</li>
                        <li><i class="fa-solid fa-check"></i> Physics & Chemistry Practical Labs</li>
                        <li><i class="fa-solid fa-check"></i> Proven Board Position History</li>
                    </ul>
                    <a href="#admissions" class="btn btn-primary" style="margin-top:auto;"><i class="fa-solid fa-envelope"></i> Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 5. OUR FACILITIES -->
<section class="section about-section" id="facilities">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Campus Infrastructure</span>
            <h2 class="section-title">Our Modern Facilities</h2>
            <p class="section-subtitle">We invest in world-class amenities to ensure students learn in comfort, curiosity, and complete safety.</p>
        </div>

        <div class="facilities-grid">
            <!-- 1. Smart Classrooms -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" alt="Smart Classrooms">
                    <div class="facility-icon-badge"><i class="fa-solid fa-chalkboard"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Smart Classrooms</h3>
                    <p class="facility-desc">Airy, well-lit spaces equipped with multimedia displays, ergonomic desks, and natural airflow for focused learning.</p>
                </div>
            </div>

            <!-- 2. Science Laboratory -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" alt="Science Laboratory">
                    <div class="facility-icon-badge"><i class="fa-solid fa-flask-vial"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Science Laboratory</h3>
                    <p class="facility-desc">Dedicated Physics, Chemistry, and Biology equipment adhering strictly to BISE Sargodha board experiment standards.</p>
                </div>
            </div>

            <!-- 3. Computer Lab -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" alt="Computer Lab">
                    <div class="facility-icon-badge"><i class="fa-solid fa-laptop-code"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Computer Lab</h3>
                    <p class="facility-desc">Modern computers with fast connectivity, providing hands-on training in basic typing, coding, and software tools.</p>
                </div>
            </div>

            <!-- 4. Library -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" alt="Library">
                    <div class="facility-icon-badge"><i class="fa-solid fa-book-open-reader"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Library & Reading Hall</h3>
                    <p class="facility-desc">A peaceful sanctuary packed with curriculum guides, literature, encyclopedias, and moral storybooks.</p>
                </div>
            </div>

            <!-- 5. Playground -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" alt="Playground">
                    <div class="facility-icon-badge"><i class="fa-solid fa-volleyball"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Playground & Sports Arena</h3>
                    <p class="facility-desc">Dedicated grounds for cricket, football, badminton, and physical fitness drills supervised by sports masters.</p>
                </div>
            </div>

            <!-- 6. Safe Transport -->
            <div class="facility-card">
                <div class="facility-img">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" alt="Safe Transport">
                    <div class="facility-icon-badge"><i class="fa-solid fa-bus-simple"></i></div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">Safe School Transport</h3>
                    <p class="facility-desc">Reliable van network covering major areas of Khushab city and surrounding towns with experienced drivers.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 6. STUDENT LIFE -->
<section class="section" id="student-life">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Co-Curricular Growth</span>
            <h2 class="section-title">Vibrant Student Life</h2>
            <p class="section-subtitle">Education at Superior Rashid Minhas School extends beyond textbooks through dynamic sports, cultural, and scientific activities.</p>
        </div>

        <div class="activities-grid">
            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80" alt="Sports Gala">
                <div class="activity-overlay">
                    <span class="activity-cat">Sports</span>
                    <h3 class="activity-title">Annual Sports Championship</h3>
                    <p class="activity-desc">Track events, relay races, badminton, and inter-house cricket tournaments.</p>
                </div>
            </div>

            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Science Exhibition">
                <div class="activity-overlay">
                    <span class="activity-cat">Science Activities</span>
                    <h3 class="activity-title">Science Fair & Innovation</h3>
                    <p class="activity-desc">Working models, chemical reactions, environmental projects, and robotics demonstrations.</p>
                </div>
            </div>

            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" alt="School Events">
                <div class="activity-overlay">
                    <span class="activity-cat">School Events</span>
                    <h3 class="activity-title">Annual Prize Distribution Day</h3>
                    <p class="activity-desc">Celebrating academic toppers and character champions with parents and guests.</p>
                </div>
            </div>

            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80" alt="Cultural Activities">
                <div class="activity-overlay">
                    <span class="activity-cat">Cultural & Spiritual</span>
                    <h3 class="activity-title">Qirat, Naat & Millat Contests</h3>
                    <p class="activity-desc">Inspiring Quranic recitation, Hamd-o-Naat, and national day celebrations.</p>
                </div>
            </div>

            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Classroom Activities">
                <div class="activity-overlay">
                    <span class="activity-cat">Classroom Activities</span>
                    <h3 class="activity-title">Collaborative STEM Projects</h3>
                    <p class="activity-desc">Group presentations, mathematical puzzles, and mental arithmetic quizzes.</p>
                </div>
            </div>

            <div class="activity-card">
                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80" alt="Competitions">
                <div class="activity-overlay">
                    <span class="activity-cat">Competitions</span>
                    <h3 class="activity-title">Bilingual Debates & Speech</h3>
                    <p class="activity-desc">Urdu and English speech declamations building confidence and stage presentation.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 7. PHOTO GALLERY -->
<section class="section about-section" id="gallery">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Campus Moments</span>
            <h2 class="section-title">School Photo Gallery</h2>
            <p class="section-subtitle">Take a visual glimpse into daily life, classroom learning, and memorable celebrations at our Khushab campus.</p>
        </div>

        <!-- Filter tabs -->
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All Photos</button>
            <button class="filter-btn" data-filter="Campus">Campus</button>
            <button class="filter-btn" data-filter="Students">Students</button>
            <button class="filter-btn" data-filter="Events">Events</button>
            <button class="filter-btn" data-filter="Sports">Sports</button>
            <button class="filter-btn" data-filter="Activities">Activities</button>
        </div>

        <div class="gallery-grid" id="galleryContainer">
            <?php
            try {
                $pdo = getDBConnection();
                $galleryQuery = $pdo->query("SELECT * FROM gallery ORDER BY id DESC");
                $galleryItems = $galleryQuery->fetchAll();
            } catch (\Exception $e) {
                $galleryItems = [];
            }

            if (empty($galleryItems)) {
                // Fallback default sample images
                $galleryItems = [
                    ['title' => 'Main Academic Campus', 'category' => 'Campus', 'image_url' => 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80', 'caption' => 'Spacious building in Khushab'],
                    ['title' => 'Computer Science Lab', 'category' => 'Campus', 'image_url' => 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80', 'caption' => 'High speed workstations'],
                    ['title' => 'Science Practical Lab', 'category' => 'Activities', 'image_url' => 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80', 'caption' => 'Hands-on titration and chemistry'],
                    ['title' => 'Classroom Discussion', 'category' => 'Students', 'image_url' => 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80', 'caption' => 'Students actively participating in lessons'],
                    ['title' => 'Cricket Championship', 'category' => 'Sports', 'image_url' => 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80', 'caption' => 'Annual sports tournament matches'],
                    ['title' => 'Awards & Certificates', 'category' => 'Events', 'image_url' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80', 'caption' => 'Recognizing outstanding board achievers'],
                ];
            }

            foreach ($galleryItems as $item):
            ?>
                <div class="gallery-item" data-category="<?= htmlspecialchars($item['category']) ?>">
                    <img src="<?= htmlspecialchars($item['image_url']) ?>" alt="<?= htmlspecialchars($item['title']) ?>" loading="lazy">
                    <div class="gallery-caption-overlay">
                        <h4><?= htmlspecialchars($item['title']) ?></h4>
                        <p><?= htmlspecialchars($item['caption']) ?></p>
                        <span style="font-size:0.75rem; color:#fde68a; margin-top:6px;"><i class="fa-solid fa-magnifying-glass-plus"></i> Click to Zoom</span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- 8. ADMISSIONS SECTION -->
<section class="section admissions-section" id="admissions">
    <div class="container">
        <div class="admissions-grid">
            <div class="admissions-info">
                <span class="hero-badge"><i class="fa-solid fa-bell"></i> Admissions Open 2026-2027</span>
                <h2>Admissions Open</h2>
                <p>
                    Give your child the opportunity to learn, grow and build a successful future. Join a community that values character, discipline, and top-tier academic scores.
                </p>

                <div class="admissions-steps">
                    <div class="step-row">
                        <div class="step-num">1</div>
                        <div class="step-text">
                            <h5>Submit Inquiry</h5>
                            <p>Fill out the online form or directly message our admissions office on WhatsApp.</p>
                        </div>
                    </div>
                    <div class="step-row">
                        <div class="step-num">2</div>
                        <div class="step-text">
                            <h5>Campus Visit & Assessment</h5>
                            <p>Meet our faculty, tour the science & computer labs, and take a friendly diagnostic assessment.</p>
                        </div>
                    </div>
                    <div class="step-row">
                        <div class="step-num">3</div>
                        <div class="step-text">
                            <h5>Enrollment & Orientation</h5>
                            <p>Complete documentation, receive syllabus and books list, and welcome your child to Superior Rashid Minhas School.</p>
                        </div>
                    </div>
                </div>

                <div style="display:flex; gap:16px; flex-wrap:wrap;">
                    <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission." target="_blank" class="btn btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Apply via WhatsApp
                    </a>
                    <a href="tel:<?= htmlspecialchars($phone) ?>" class="btn btn-outline-white">
                        <i class="fa-solid fa-phone"></i> Call Admissions: <?= htmlspecialchars($whatsapp) ?>
                    </a>
                </div>
            </div>

            <!-- Admission Inquiry Form -->
            <div class="admissions-form-box">
                <h3>Admission Inquiry Form</h3>
                <p>Please provide the details below and our team will get in touch with you promptly.</p>

                <div id="admissionAlert" style="display:none;"></div>

                <form id="admissionForm">
                    <div class="form-group">
                        <label for="studentName">Student Full Name *</label>
                        <input type="text" id="studentName" name="student_name" class="form-control" placeholder="e.g. Muhammad Ahmad" required>
                    </div>

                    <div class="form-group">
                        <label for="fatherName">Father / Guardian Name *</label>
                        <input type="text" id="fatherName" name="father_name" class="form-control" placeholder="e.g. Tariq Mehmood" required>
                    </div>

                    <div class="form-group">
                        <label for="classApplying">Class Applying For *</label>
                        <select id="classApplying" name="class_applying" class="form-control" required>
                            <option value="">Select Target Class...</option>
                            <option value="Playgroup / Nursery">Early Education (Playgroup / Nursery / Prep)</option>
                            <option value="Grade 1 to 5 (Primary)">Primary Classes (Grade 1 - 5)</option>
                            <option value="Grade 6 to 8 (Middle)">Middle Classes (Grade 6 - 8)</option>
                            <option value="Grade 9 (Science / Computer)">Grade 9 (Science / Computer)</option>
                            <option value="Grade 10 (Matriculation)">Grade 10 (Matriculation)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone / WhatsApp Number *</label>
                        <input type="tel" id="phone" name="phone" class="form-control" placeholder="e.g. 03417885841" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address (Optional)</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="e.g. parent@example.com">
                    </div>

                    <div class="form-group">
                        <label for="message">Message / Previous School (Optional)</label>
                        <textarea id="message" name="message" class="form-control" rows="3" placeholder="Tell us about the student's previous school, transport requirement, or questions..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-gold" style="width:100%;">
                        <i class="fa-solid fa-paper-plane"></i> Submit Admission Inquiry
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- 9. CONTACT SECTION -->
<section class="section" id="contact">
    <div class="container">
        <div class="section-header">
            <span class="section-kicker">Get in Touch</span>
            <h2 class="section-title">Contact Our Admissions Office</h2>
            <p class="section-subtitle">We are here to answer all your queries regarding curriculum, admissions, fees, and transport routes.</p>
        </div>

        <div class="contact-grid">
            <!-- Left: Info & Map -->
            <div class="contact-info-card">
                <h3 style="font-size:1.35rem; color:var(--primary-dark); font-weight:800; margin-bottom:20px;">Contact Details</h3>

                <div class="contact-item-row">
                    <div class="contact-icon-box"><i class="fa-solid fa-school"></i></div>
                    <div>
                        <strong>School Name:</strong>
                        <p style="color:var(--text-muted); font-size:0.95rem; font-weight:600;"><?= htmlspecialchars($schoolName) ?></p>
                    </div>
                </div>

                <div class="contact-item-row">
                    <div class="contact-icon-box"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                        <strong>Campus Location:</strong>
                        <p style="color:var(--text-muted); font-size:0.95rem;"><?= htmlspecialchars($location) ?></p>
                    </div>
                </div>

                <div class="contact-item-row">
                    <div class="contact-icon-box" style="background:#ecfdf5; color:#059669;"><i class="fa-brands fa-whatsapp"></i></div>
                    <div>
                        <strong>WhatsApp (Fastest Response):</strong>
                        <p style="color:var(--text-muted); font-size:0.95rem;">
                            <a href="https://wa.me/<?= htmlspecialchars($whatsappInt) ?>?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission." target="_blank" style="color:#059669; font-weight:700;">
                                <?= htmlspecialchars($whatsapp) ?> (Click to Chat)
                            </a>
                        </p>
                    </div>
                </div>

                <div class="contact-item-row">
                    <div class="contact-icon-box"><i class="fa-solid fa-clock"></i></div>
                    <div>
                        <strong>Office Hours:</strong>
                        <p style="color:var(--text-muted); font-size:0.95rem;">Monday to Saturday: 8:00 AM – 2:00 PM</p>
                    </div>
                </div>

                <!-- Google Maps Embed placeholder centered on Khushab -->
                <div class="contact-map-placeholder">
                    <iframe 
                        title="Superior Rashid Minhas School Khushab Map Location"
                        src="https://maps.google.com/maps?q=Khushab%2C%20Punjab%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <!-- Right: Contact Form -->
            <div class="contact-form-box">
                <h3 style="font-size:1.35rem; color:var(--primary-dark); font-weight:800; margin-bottom:6px;">Send Us a Message</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:24px;">Leave your contact details and our administration will get back to you within 24 hours.</p>

                <div id="contactAlert" style="display:none;"></div>

                <form id="contactForm">
                    <div class="form-group">
                        <label for="cName">Your Name *</label>
                        <input type="text" id="cName" name="name" class="form-control" placeholder="e.g. Asad Malik" required>
                    </div>

                    <div class="form-group">
                        <label for="cPhone">Phone / WhatsApp *</label>
                        <input type="tel" id="cPhone" name="phone" class="form-control" placeholder="e.g. 03417885841" required>
                    </div>

                    <div class="form-group">
                        <label for="cEmail">Email Address (Optional)</label>
                        <input type="email" id="cEmail" name="email" class="form-control" placeholder="e.g. yourname@example.com">
                    </div>

                    <div class="form-group">
                        <label for="cMessage">Your Message *</label>
                        <textarea id="cMessage" name="message" class="form-control" rows="4" placeholder="How can we assist you with admissions or school information?" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width:100%;">
                        <i class="fa-solid fa-paper-plane"></i> Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include_once __DIR__ . '/includes/footer.php'; ?>
