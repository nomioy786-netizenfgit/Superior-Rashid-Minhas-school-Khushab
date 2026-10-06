-- ========================================================
-- Database Schema for Superior Rashid Minhas School Khushab
-- Generated for MySQL 5.7+ / MySQL 8.0+ / MariaDB
-- ========================================================

CREATE DATABASE IF NOT EXISTS `srms_khushab_db` 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `srms_khushab_db`;

-- --------------------------------------------------------
-- Table: admins
-- --------------------------------------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `role` VARCHAR(30) DEFAULT 'admin',
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Default Admin User:
-- Username: admin
-- Password: admin123 (hashed via password_hash)
INSERT INTO `admins` (`username`, `email`, `password`, `full_name`, `role`) VALUES
('admin', 'admin@superiorrashidminhas.edu.pk', '$2y$10$w3UqmXgGk8uA1uR7kY5mkeO.2q1sU7gZgRfZT6N7M7L4z8fG5Kq7W', 'School Administrator', 'superadmin');

-- --------------------------------------------------------
-- Table: admissions
-- --------------------------------------------------------
DROP TABLE IF EXISTS `admissions`;
CREATE TABLE `admissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `inquiry_code` VARCHAR(20) NOT NULL UNIQUE,
  `student_name` VARCHAR(100) NOT NULL,
  `father_name` VARCHAR(100) NOT NULL,
  `class_applying` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(100) NULL,
  `message` TEXT NULL,
  `status` ENUM('new', 'reviewed', 'contacted') DEFAULT 'new',
  `notes` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `admissions` (`inquiry_code`, `student_name`, `father_name`, `class_applying`, `phone`, `email`, `message`, `status`) VALUES
('ADM-1001', 'Muhammad Ali Raza', 'Tariq Mahmood', 'Grade 9 (Science)', '03001234567', 'tariq.m@example.com', 'Interested in Science group with computer science elective. Previous school percentage 88%.', 'reviewed'),
('ADM-1002', 'Ayesha Fatima', 'Zahid Imran', 'Primary Classes (Grade 3)', '03217654321', 'zahid.imran@example.com', 'Need school van service from College Road area Khushab. Please confirm seat availability.', 'new'),
('ADM-1003', 'Hamza Rehman', 'Abdul Rehman', 'Early Education (Playgroup)', '03459876543', 'arehman.khushab@example.com', 'Child age is 3.5 years. Would like to know the campus visit timing and fee structure.', 'new');

-- --------------------------------------------------------
-- Table: contact_messages
-- --------------------------------------------------------
DROP TABLE IF EXISTS `contact_messages`;
CREATE TABLE `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(100) NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('unread', 'read') DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `contact_messages` (`name`, `phone`, `email`, `message`, `status`) VALUES
('Malik Irfan', '03335551234', 'irfan.malik@example.com', 'Assalam-o-Alaikum, does the school offer preparation for BISE Sargodha scholarship examinations?', 'read'),
('Sobia Parveen', '03417885841', 'sobia.p@example.com', 'Kindly share the morning assembly timings and winter schedule for middle school.', 'unread');

-- --------------------------------------------------------
-- Table: gallery
-- --------------------------------------------------------
DROP TABLE IF EXISTS `gallery`;
CREATE TABLE `gallery` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(150) NOT NULL,
  `category` ENUM('Campus', 'Students', 'Events', 'Sports', 'Activities') NOT NULL DEFAULT 'Campus',
  `image_url` VARCHAR(255) NOT NULL,
  `caption` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `gallery` (`title`, `category`, `image_url`, `caption`) VALUES
('Main Academic Campus Building', 'Campus', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80', 'Modern educational building in Khushab city.'),
('Computer Science Laboratory', 'Campus', 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80', 'Workstations with broadband connection for IT literacy.'),
('Physics & Chemistry Practicals', 'Activities', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80', 'Hands-on scientific inquiry and experiments.'),
('Active Collaborative Classroom', 'Students', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80', 'Primary learners engaged in conceptual group work.'),
('Inter-House Cricket Championship', 'Sports', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80', 'Fostering sportsmanship and physical fitness.'),
('Annual Awards & Speech Day', 'Events', 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80', 'Honoring top board position holders and student achievers.');

-- --------------------------------------------------------
-- Table: school_settings
-- --------------------------------------------------------
DROP TABLE IF EXISTS `school_settings`;
CREATE TABLE `school_settings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(50) NOT NULL UNIQUE,
  `setting_value` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `school_settings` (`setting_key`, `setting_value`) VALUES
('school_name', 'Superior Rashid Minhas School Khushab'),
('tagline', 'Building Bright Minds, Inspiring Future Leaders'),
('whatsapp_number', '03417885841'),
('whatsapp_international', '923417885841'),
('phone_number', '+92 341 7885841'),
('email_address', 'info@superiorrashidminhas.edu.pk'),
('location_address', 'Civil Lines / College Road, Khushab, Punjab, Pakistan'),
('office_hours', 'Monday – Saturday: 8:00 AM – 2:00 PM'),
('admissions_open', '1'),
('academic_year', '2026 – 2027'),
('about_summary', 'Superior Rashid Minhas School Khushab provides quality education, character development and a supportive learning environment for the students of Khushab.');
