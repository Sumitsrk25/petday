-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2025 at 07:38 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petday`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `aid` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `vetid` int(11) NOT NULL,
  `book_date` date NOT NULL,
  `centername` varchar(200) NOT NULL,
  `type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pending',
  `pay_amt` int(11) NOT NULL,
  `pay_method` int(11) NOT NULL,
  `pay_status` varchar(255) NOT NULL,
  `transaction_id` varchar(255) NOT NULL,
  `pay_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `refund_amt` int(11) NOT NULL,
  `refund_date` datetime NOT NULL,
  `refund_transaction_id` varchar(255) NOT NULL,
  `service_provider_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`aid`, `customer_id`, `pet_id`, `vetid`, `book_date`, `centername`, `type`, `status`, `pay_amt`, `pay_method`, `pay_status`, `transaction_id`, `pay_datetime`, `refund_amt`, `refund_date`, `refund_transaction_id`, `service_provider_id`) VALUES
(1, 1, 2, 2, '2024-11-28', '', 'Clinic Visit', 'Approve', 0, 0, '', '', '2024-11-28 18:49:15', 0, '0000-00-00 00:00:00', '', 0),
(2, 1, 3, 1, '2024-11-21', '', 'Grooming', 'Pending', 0, 0, '', '', '2024-11-28 18:49:48', 0, '0000-00-00 00:00:00', '', 0),
(3, 1, 2, 2, '2024-11-29', '', 'Online Consult', 'Pending', 100, 0, '', '', '2024-11-28 18:52:37', 0, '0000-00-00 00:00:00', '', 0),
(4, 1, 2, 1, '0000-00-00', '', '', 'Pending', 0, 0, '', '', '2025-01-09 14:15:04', 0, '0000-00-00 00:00:00', '', 0),
(5, 1, 2, 3, '2025-01-20', '', 'Clinic Visit', 'Pending', 0, 0, '', '', '2025-01-09 14:23:08', 0, '0000-00-00 00:00:00', '', 0),
(6, 1, 1, 0, '2025-01-11', '', 'Visit', 'Rejected', 0, 0, '', '', '2025-01-09 17:12:30', 0, '0000-00-00 00:00:00', '', 0),
(32, 1, 14, 1, '2025-01-19', 'What a Cat', 'Visit', 'Pending', 0, 0, '', '', '2025-01-11 01:28:54', 0, '0000-00-00 00:00:00', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobile` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `city` varchar(300) NOT NULL,
  `state` varchar(300) NOT NULL,
  `pincode` varchar(300) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `lname`, `email`, `mobile`, `password`, `gender`, `dob`, `address`, `city`, `state`, `pincode`, `created`) VALUES
(1, 'Test1', 'LName', 'testlab1@gmail.com', '9370498438', 'test123', 'Male', '', 'Test Lab Address', 'Pune', 'Maharashtra', '411020', '2024-10-14 17:55:39'),
(3, 'Lawrence', 'Balid', 'law1@gmail.com', '9922446465', '$xW2w#!l*yOV', '', '', '', '', '', '', '2024-10-17 13:06:23'),
(4, 'Lawrence', 'Balid', 'law@gmail.com', '9922446465', '$xW2w#!l*yOV', '', '', '', '', '', '', '2024-10-17 13:07:08'),
(5, 'Test', 'Last', 'test2@gmail.com', '9370498438', 'test123', '', '', '', '', '', '', '2024-10-17 13:15:04'),
(6, 'test', 'test', 'test', '9123456789', '12345', '', '', '', '', '', '', '2024-10-17 13:26:50'),
(7, 'Test3', 'Lab4', 'test3@gmail.com', '9370498438', '12345', '', '', '', '', '', '', '2024-10-17 15:04:49'),
(8, 'Test Lab4', 'Lastr Name', 'test4@gmail.com', '9370498438', 'test123', '', '', '', '', '', '', '2024-10-17 15:07:05'),
(9, 'Test Lab5', 'last', 'test6@gmail.com', '9370498438', 'test123', '', '', '', '', '', '', '2024-10-17 15:08:52'),
(10, 'Sumit Kalyana', 'Test Lname', 'test7@gmail.com', '9370498438', 'test123', '', '', '', '', '', '', '2024-10-17 15:13:46'),
(11, 'Test Fname', 'Lname', 'test8@gmail.com', '9370498438', 'test123', '', '', '', '', '', '', '2024-10-17 15:16:29'),
(12, 'Amit', 'Agrawal', 'agrawami@gmail.com', '9881254276', 'Petday@123', 'Male', '', 'RH 47', 'Pune', 'Maharashtra', '412307', '2024-12-21 14:32:56');

-- --------------------------------------------------------

--
-- Table structure for table `groomer_details`
--

CREATE TABLE `groomer_details` (
  `groomer_id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `postal_address` text DEFAULT NULL,
  `pin` varchar(10) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `active` tinyint(1) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `gst_number` varchar(15) DEFAULT NULL,
  `grooming_center_name` varchar(100) DEFAULT NULL,
  `working_days` varchar(50) DEFAULT NULL,
  `workinghrs_frm` varchar(200) DEFAULT NULL,
  `workinghrs_to` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groomer_details`
--

INSERT INTO `groomer_details` (`groomer_id`, `first_name`, `last_name`, `mobile`, `email`, `password`, `location`, `postal_address`, `pin`, `city`, `state`, `gender`, `created`, `active`, `picture`, `bio`, `gst_number`, `grooming_center_name`, `working_days`, `workinghrs_frm`, `workinghrs_to`) VALUES
(1, 'Grommer', 'One', '9370498438', 'testgrommer@gmail.com', 'test12345', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(2, 'Grommer', 'Two', '9370498438', 'test2@test.com', 'test12345', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(3, 'Sumit', 'Kalyana', '9370498438', 'test3@gmail.com', 'test12345', 'Aundh', '', '411020', 'Pune', 'Maharashtra', 'Male', NULL, NULL, '', 'I am a Certified Grommer', 'ECDP1234', 'Grommers Pride', 'Monday,Wednesday,Thursday', '14:10', '17:10'),
(4, 'Grommer41', 'Last1', '9370498431', 'test4@gmail.com', 'test12345', 'Bangalore', 'Test Lab11', '411021', 'Pune', 'Maharashtra', 'Female', '2024-12-24 20:23:46', NULL, '', 'I am jst a grommer1', 'GST14C1', 'Groomers Club', 'Monday,Friday', '23:23', '20:26');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(1, 'Sumit Kalyana', 'testlab1@gmail.com', '$2b$10$3F6sKGgi1j2fwO0qx0ww4.4h16RQM/cVjXyBmGCePMTTWYE23Xr/W'),
(2, 'Sumit Kalyana', 'testlab2@gmail.com', '$2b$10$yZeCSWcRHTYtKW5xhYSQCOSlFcoeow0Ygd8RBdGW.T7RuI23zfwhW');

-- --------------------------------------------------------

--
-- Table structure for table `pet_profile`
--

CREATE TABLE `pet_profile` (
  `pet_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `pet_type` varchar(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `breed` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `picture` varchar(300) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pet_profile`
--

INSERT INTO `pet_profile` (`pet_id`, `customer_id`, `pet_type`, `name`, `lname`, `gender`, `breed`, `age`, `picture`, `created`) VALUES
(1, 1, 'Cat', 'Science', 'Maths', 'Male', 'Labrador', 2, '', '2025-01-06 11:26:48'),
(2, 1, 'Cat', 'Facebook', 'India', 'Male', 'Labrador', 2, '', '2025-01-06 08:38:32'),
(3, 0, '', 'Science', 'Maths', '', '', 0, '', '2025-01-06 08:38:32'),
(4, 0, '', 'Science1', 'Maths1', '', '', 0, '', '2025-01-06 08:38:32'),
(5, 0, '', 'matoshree', 'MANE', '', '', 0, '', '2025-01-06 08:38:32'),
(6, 0, '', 'Doggy', 'Lname', '', '', 0, '', '2025-01-06 08:38:32'),
(7, 0, 'Cat', 'Test', 'Ferguson1', '', '', 29, '', '2025-01-06 08:38:32'),
(8, 0, '', 'Test', 'Lab4', '', '', 3, '', '2025-01-06 08:38:32'),
(9, 0, 'Dog', 'TestDog', 'Ferguson1', '', '', 6, '', '2025-01-06 08:38:32'),
(10, 0, 'Cat', 'Test Lab3', 'Ferguson1', 'Female', '', 4, '', '2025-01-06 08:38:32'),
(11, 0, 'Bird', 'Sumit', 'Jones1', 'Male', '', 1, '', '2025-01-06 08:38:32'),
(12, 0, 'Cat', 'Kitty', 'Pie', 'Male', '', 3, '', '2025-01-06 08:38:32'),
(13, 0, 'Dog', 'Test', 'Jones1', 'Female', '', 4, '', '2025-01-06 08:38:32'),
(14, 1, 'Dog', 'Test', 'Jones1', 'Male', '', 3, '', '2025-01-06 08:38:32');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `item_hsn` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `dimension` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `item_image` varchar(255) NOT NULL,
  `mrp` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `gst_percent` int(11) NOT NULL,
  `stock` varchar(200) NOT NULL,
  `max_quantity` int(11) NOT NULL,
  `personalize` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_record`
--

CREATE TABLE `vaccine_record` (
  `vaccine_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `vaccine_name` varchar(200) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccine_record`
--

INSERT INTO `vaccine_record` (`vaccine_id`, `customer_id`, `pet_id`, `vaccine_name`, `created`) VALUES
(1, 1, 1, 'Rabies Vaccine', '0000-00-00'),
(2, 1, 2, 'Core Vaccine', '0000-00-00'),
(3, 1, 2, 'Test Vaccine', '2025-01-11');

-- --------------------------------------------------------

--
-- Table structure for table `vetdetails`
--

CREATE TABLE `vetdetails` (
  `vetid` int(11) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `postaladdress` text DEFAULT NULL,
  `pin` varchar(10) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `active` tinyint(1) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `gstno` varchar(15) DEFAULT NULL,
  `medicalregno` varchar(50) DEFAULT NULL,
  `workingdays` varchar(50) DEFAULT NULL,
  `workinghrs_frm` varchar(200) DEFAULT NULL,
  `workinghrs_to` varchar(200) NOT NULL,
  `speciality` varchar(100) DEFAULT NULL,
  `clinicname` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vetdetails`
--

INSERT INTO `vetdetails` (`vetid`, `firstName`, `lastName`, `mobile`, `email`, `password`, `location`, `postaladdress`, `pin`, `city`, `state`, `gender`, `created`, `active`, `picture`, `bio`, `gstno`, `medicalregno`, `workingdays`, `workinghrs_frm`, `workinghrs_to`, `speciality`, `clinicname`) VALUES
(1, 'Test', 'Vet', '9310498438', 'testvet@gmail.com', 'test12345', 'Pune', 'Test Lab1', '411020', 'Pune', 'Maharashtra', 'Male', '2024-12-13 22:20:58', NULL, '', 'My Bio is Great', '4444', '333333', 'Monday,Tuesday,Thursday,Sunday', '13:00', '18:29', 'Dogs and Cat', 'What a Cat'),
(2, 'Test', 'Vet', '9370498438', 'testvet1@gmail.com', 'test12345', 'VimanNagar', 'Test Lab', '411020', 'Pune', 'Maharashtra', 'Male', '2024-12-13 22:42:41', NULL, NULL, 'I am Certified Vet', '4444444', '555555', 'Monday,Thursday,Sunday', '4', '', 'Dogs  Cats', 'What a Pet'),
(3, 'Jack', 'Jones', '9370498438', NULL, 'test12345', 'Delhi', 'Test Lab1', '411020', 'Pune', 'Maharashtra', 'Female', '2024-12-24 19:02:17', NULL, '', 'I am a very experienced and a certified vet', 'MH12432145', 'MReg1245', 'Monday,Tuesday,Thursday', '19:01', '22:01', 'Surgeon ', 'Operation Pets'),
(4, 'Test', 'Ferguson1', '9370498438', 'testvet4@gmail.com', 'test12345', 'Delhi', 'Test Lab1', '411020', 'Pune', 'Maharashtra', 'Male', '2024-12-24 19:15:02', NULL, '', 'Testing Bio', 'GST12345', 'MRN12345', 'Tuesday,Wednesday,Friday', '19:14', '23:14', 'Operation', 'Operation Clinic'),
(5, 'Amy1', 'Jones1', '9370498437', 'testvet5@gmail.com', 'test12345', 'Pune', 'Test Lab1', '411020', 'Pune', 'Maharashtra', 'Female', '2024-12-24 19:26:58', NULL, '', 'Testing My bio1', 'GST5678', 'MRN9372', 'Monday,Friday,Saturday', '00:26', '15:26', 'Testing', 'Test Clinic1'),
(6, 'First Name', 'Last Name', 'Mobile', 'example@gmail.com', 'Password', 'Pune', 'Test Lab1', '411020', 'Pune', 'Maharashtra', 'Female', '2025-01-10 19:06:13', NULL, NULL, 'I am testing form', '6tyr4dd', 'r5ty55', 'Monday,Friday,Sunday', '19:06', '19:07', 'Cat Dogs', 'New Clinic India');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `groomer_details`
--
ALTER TABLE `groomer_details`
  ADD PRIMARY KEY (`groomer_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pet_profile`
--
ALTER TABLE `pet_profile`
  ADD PRIMARY KEY (`pet_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `vaccine_record`
--
ALTER TABLE `vaccine_record`
  ADD PRIMARY KEY (`vaccine_id`);

--
-- Indexes for table `vetdetails`
--
ALTER TABLE `vetdetails`
  ADD PRIMARY KEY (`vetid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `groomer_details`
--
ALTER TABLE `groomer_details`
  MODIFY `groomer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pet_profile`
--
ALTER TABLE `pet_profile`
  MODIFY `pet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vaccine_record`
--
ALTER TABLE `vaccine_record`
  MODIFY `vaccine_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vetdetails`
--
ALTER TABLE `vetdetails`
  MODIFY `vetid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
