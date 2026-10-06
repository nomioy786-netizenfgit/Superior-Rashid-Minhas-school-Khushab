export interface SchoolInfo {
  name: string;
  tagline: string;
  subheading: string;
  description: string;
  whatsapp: string;
  whatsappInternational: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  country: string;
  officeHours: string;
  admissionsOpen: boolean;
  academicYear: string;
}

export const initialSchoolInfo: SchoolInfo = {
  name: "Superior Rashid Minhas School Khushab",
  tagline: "Building Bright Minds, Inspiring Future Leaders",
  subheading: "Premier Educational Institution in Khushab",
  description:
    "Providing quality education, character development and a supportive learning environment for the students of Khushab, Punjab.",
  whatsapp: "03417885841",
  whatsappInternational: "923417885841",
  phone: "+92 341 7885841",
  email: "info@superiorrashidminhas.edu.pk",
  address: "Civil Lines / College Road, Khushab City",
  city: "Khushab",
  province: "Punjab",
  country: "Pakistan",
  officeHours: "Monday – Saturday: 8:00 AM – 2:00 PM",
  admissionsOpen: true,
  academicYear: "2026 – 2027",
};

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const featuresList: Feature[] = [
  {
    id: "quality-education",
    title: "Quality Education",
    description:
      "A structured curriculum designed to build solid conceptual foundations, critical reasoning, and academic excellence at every level.",
    iconName: "GraduationCap",
    badge: "Academic Rigor",
  },
  {
    id: "experienced-teachers",
    title: "Experienced Teachers",
    description:
      "A compassionate, highly trained faculty dedicated to student mentorship, personal guidance, and interactive learning techniques.",
    iconName: "Users",
    badge: "Certified Staff",
  },
  {
    id: "modern-environment",
    title: "Modern Learning Environment",
    description:
      "Spacious multimedia-equipped classrooms, cutting-edge science and IT laboratories designed for the modern 21st-century learner.",
    iconName: "Monitor",
    badge: "Smart Campus",
  },
  {
    id: "character-building",
    title: "Character Building",
    description:
      "Nurturing moral values, civic discipline, Islamic ethics, and leadership skills to shape responsible and empathetic citizens.",
    iconName: "ShieldCheck",
    badge: "Ethical Growth",
  },
  {
    id: "safe-campus",
    title: "Safe & Caring Campus",
    description:
      "Gated campus with 24/7 CCTV surveillance, strict security protocols, clean sanitation, and dedicated student pastoral care.",
    iconName: "HeartHandshake",
    badge: "Child Safety First",
  },
];

export interface AcademicGrade {
  id: string;
  title: string;
  subTitle: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  subjects: string[];
  imageUrl: string;
}

export const academicGrades: AcademicGrade[] = [
  {
    id: "early-education",
    title: "Early Education",
    subTitle: "Playgroup, Nursery & Kindergarten (Prep)",
    ageGroup: "Ages 3 – 5 Years",
    description:
      "A warm, activity-based environment fostering early literacy, motor skills, sensory discovery, and joyful social interaction.",
    highlights: [
      "Phonics & language development",
      "Interactive play & sensory exploration",
      "Basic mathematical concepts",
      "Rhymes, art & storytelling",
    ],
    subjects: ["English Phonics", "Urdu Qaidah", "Early Math", "General Knowledge", "Art & Craft"],
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "primary-classes",
    title: "Primary Classes",
    subTitle: "Grade 1 through Grade 5",
    ageGroup: "Ages 6 – 10 Years",
    description:
      "Developing core competencies in reading, writing, mathematical logic, scientific inquiry, and ethical civic awareness.",
    highlights: [
      "Conceptual learning approach",
      "Bilingual proficiency (English & Urdu)",
      "Hands-on science experiments",
      "Character building & Tarbiyah",
    ],
    subjects: ["English", "Urdu", "Mathematics", "General Science", "Islamiat", "Social Studies", "Computer Basics"],
    imageUrl:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "middle-classes",
    title: "Middle Classes",
    subTitle: "Grade 6 through Grade 8",
    ageGroup: "Ages 11 – 13 Years",
    description:
      "Strengthening analytical thinking, problem-solving, advanced scientific theories, and preparing students for secondary board examination rigor.",
    highlights: [
      "Rigorous academic testing schedule",
      "Introduction to lab practicals",
      "Speech, debate & presentation skills",
      "Information technology coursework",
    ],
    subjects: ["English Literature", "Urdu", "Mathematics", "Science (General)", "Computer Science", "Islamiat", "Pak Studies", "Arabic"],
    imageUrl:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "secondary-classes",
    title: "Secondary Classes",
    subTitle: "Grade 9 & Grade 10 (Matriculation)",
    ageGroup: "Ages 14 – 16 Years",
    description:
      "Focused preparation for BISE Sargodha Board examinations with intensive test series, lab experiments, and personalized coaching for top grades.",
    highlights: [
      "Science Group (Biology / Computer Science)",
      "Daily revision & past-paper drills",
      "Comprehensive lab experiment practicals",
      "Proven track record of A+ Board positions",
    ],
    subjects: ["Physics", "Chemistry", "Biology / Computer Science", "Mathematics", "English", "Urdu", "Islamiat", "Pakistan Studies"],
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
];

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  highlights: string[];
}

export const schoolFacilities: Facility[] = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    description:
      "Airy, well-lit and acoustically treated learning rooms fitted with audio-visual equipment and ergonomic student furniture.",
    iconName: "Sparkles",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    highlights: ["Multimedia visual aids", "Ergonomic seating", "Natural ventilation & climate control"],
  },
  {
    id: "science-laboratory",
    title: "Science Laboratory",
    description:
      "Equipped with modern apparatus, safety goggles, microscopes, and chemical reagents for Physics, Chemistry, and Biology experiments.",
    iconName: "FlaskConical",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Individual experiment stations", "Safety first emergency stations", "Experienced lab demonstrators"],
  },
  {
    id: "computer-lab",
    title: "Modern Computer Lab",
    description:
      "High-speed workstations with broadband connectivity, teaching students digital literacy, basic coding, and productivity applications.",
    iconName: "Laptop",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    highlights: ["Dedicated PC per student", "Fiber optic high-speed internet", "Curated coding & office training"],
  },
  {
    id: "library",
    title: "Well-Stocked Library",
    description:
      "A quiet reading sanctuary housing academic textbooks, Urdu & English literature, Islamic histories, reference encyclopedias, and magazines.",
    iconName: "BookOpen",
    imageUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    highlights: ["2,000+ curated volumes", "Peaceful study corners", "Weekly borrowing program"],
  },
  {
    id: "playground",
    title: "Playground & Sports Arena",
    description:
      "Open grounds designed for physical fitness, cricket, football, badminton, and annual sports gala competitions.",
    iconName: "Trophy",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    highlights: ["Cricket pitch & badminton courts", "Supervised athletic coaching", "Annual Sports Olympiad"],
  },
  {
    id: "safe-transport",
    title: "Safe Transport Network",
    description:
      "Well-maintained fleet of school vans covering key residential areas across Khushab and surrounding localities with verified drivers.",
    iconName: "Bus",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    highlights: ["Door-to-door designated routes", "Trained conductors on board", "Strict speed & safety oversight"],
  },
];

export interface StudentActivity {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const studentActivities: StudentActivity[] = [
  {
    id: "sports-gala",
    title: "Annual Sports Gala",
    category: "Sports",
    description:
      "Exciting track events, cricket championships, tug-of-war, and races developing teamwork, fitness, and true sportsmanship.",
    imageUrl:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "science-exhibition",
    title: "Science & Innovation Fair",
    category: "Science Activities",
    description:
      "Students demonstrate working models of renewable energy, robotic cars, hydraulic lifts, and botanical ecosystems.",
    imageUrl:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "annual-events",
    title: "Annual Prize Distribution & Days",
    category: "School Events",
    description:
      "Celebrating academic achievers, board position holders, and artistic performances in the presence of proud parents and community leaders.",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "qirat-naat",
    title: "Qirat & Naat Competitions",
    category: "Cultural Activities",
    description:
      "Cultivating spiritual reverence, melodious recitation, and deep love for our cultural and Islamic heritage.",
    imageUrl:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "classroom-activities",
    title: "Active Learning & Projects",
    category: "Classroom Activities",
    description:
      "Collaborative group assignments, model making, educational role-playing, and hands-on mathematical puzzle solving.",
    imageUrl:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "debates-speech",
    title: "Debates & Declamation Contests",
    category: "Competitions",
    description:
      "Fostering public speaking, parliamentary debate standards, critical thinking, and fluent expression in Urdu and English.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Students" | "Events" | "Sports" | "Activities";
  imageUrl: string;
  caption: string;
}

export const initialGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Academic Building",
    category: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    caption: "Spacious architectural campus in Khushab surrounded by greenery.",
  },
  {
    id: "gal-2",
    title: "Computer Science Laboratory",
    category: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    caption: "Modern IT laboratory where students learn digital skills and computer programming.",
  },
  {
    id: "gal-3",
    title: "Chemistry & Physics Practical Session",
    category: "Activities",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    caption: "High school students conducting supervised titration experiments.",
  },
  {
    id: "gal-4",
    title: "Primary Students Interactive Classroom",
    category: "Students",
    imageUrl:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
    caption: "Young learners engaged in collaborative math and phonics exercises.",
  },
  {
    id: "gal-5",
    title: "Inter-House Cricket Championship",
    category: "Sports",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    caption: "Thrilling sports competition between student school houses.",
  },
  {
    id: "gal-6",
    title: "Annual Awards & Speech Ceremony",
    category: "Events",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    caption: "Honoring academic toppers, position holders, and outstanding debaters.",
  },
  {
    id: "gal-7",
    title: "Early Learners Art & Play Corner",
    category: "Students",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    caption: "Developing creativity and color recognition through fun guided arts.",
  },
  {
    id: "gal-8",
    title: "Independence Day & Cultural Exhibition",
    category: "Events",
    imageUrl:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
    caption: "Patriotic tableau performances and Pakistan cultural pavilions.",
  },
  {
    id: "gal-9",
    title: "Library Reading & Research Hour",
    category: "Activities",
    imageUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
    caption: "Students preparing research notes from encyclopedias and literature.",
  },
];
