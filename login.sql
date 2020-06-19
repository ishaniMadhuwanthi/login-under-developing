-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2020 at 07:09 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `h_id` int(11) NOT NULL,
  `hospital_name` text CHARACTER SET utf32 COLLATE utf32_croatian_ci,
  `district` text CHARACTER SET utf32 COLLATE utf32_croatian_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`h_id`, `hospital_name`, `district`) VALUES
(0, 'General Hospital Rathnapura', 'Rathnapura'),
(1, 'General Hospital Kurunegala', 'Kurunegala');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text CHARACTER SET utf32,
  `last_name` text CHARACTER SET utf32 COLLATE utf32_croatian_ci,
  `email` text CHARACTER SET utf32 COLLATE utf32_croatian_ci,
  `password` text CHARACTER SET utf32 COLLATE utf32_croatian_ci,
  `created` text CHARACTER SET utf32 COLLATE utf32_croatian_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`) VALUES
(13, 'wathsari', 'samindani', 'abc@1234', '$2b$10$WwvUaQLwAPYLv8QmhiLxSOAgFvSGBOugsQhhZeNGblpSvKHMDJPbm', '2020-06-06 16:01:11'),
(14, 'mihiri', 'premathilaka', 'mihiri@test.com', '$2b$10$CUCSLxcL3X.DCmqPKVPU2OLt0v1lGNTGHsSDRhEXtrWbqSyW38bZe', '2020-06-06 17:40:19'),
(15, 'wathsari', 'premathilaka', 'wathsami95@gmail.com', '$2b$10$VwgZayy9Z/6Ls1CXepyUuefLPO3wYnndkZc.hBTlUi.0x5K7JC5S2', '2020-06-18 08:23:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`h_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;