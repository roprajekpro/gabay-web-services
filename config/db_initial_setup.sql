CREATE DATABASE gabay_db;
use gabay_db;
CREATE TABLE IF NOT EXISTS `nurses` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `title` VARCHAR(8) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `stateProvince` VARCHAR(255) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `zipcode` INT,
  `is_deleted` TINYINT UNSIGNED DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
INSERT INTO `gabay_db`.`nurses` (`firstName`, `lastName`, `phone`, `email`, `title`, `address`, `country`, `stateProvince`, `city`, `zipcode`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', '1234567890', 'johndoe@gmail.com', 'Mr', 'BR Softech Pvt Ltd', 'India', 'Maharashtra', 'Pune' , '440028', '0', '2019-11-19 03:30:30');
INSERT INTO `gabay_db`.`nurses` (`firstName`, `lastName`, `phone`, `email`, `title`, `address`, `country`, `stateProvince`, `city`, `zipcode`, `is_deleted`, `created_at`) VALUES ('Jane', 'Doe', '9876543210', 'janedoe@gmail.com', 'Mrs', 'RG Infotech ', 'India', 'Goa', 'Panjim', '402342', '0', '2019-11-19 03:35:30');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root@Mysql0409';
flush privileges;