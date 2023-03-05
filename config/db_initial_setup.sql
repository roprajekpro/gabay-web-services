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

CREATE TABLE IF NOT EXISTS `educationLevels` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`educationlevels` (`id`, `name`) VALUES(1,'BSN'),(2,'MSN'),(3,'AND'),(4,'DIP');

CREATE TABLE IF NOT EXISTS `educationCountries` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `gabay_db`.`educationCountries` (`name`) VALUES
('Aberdeenshire'),
('Angus'),
('Argyll'),
('Avon'),
('Ayrshire'),
('Banffshire'),
('Bedfordshire'),
('Berkshire'),
('Berwickshire'),
('Gwent'),
('Bridgend'),
('Bristol'),
('Buckinghamshire'),
('Bute'),
('Caerphilly'),
('Caithness'),
('Cambridgeshire'),
('Cardiff'),
('Carmarthenshire'),
('Ceredigion'),
('Cheshire'),
('Clackmannanshire'),
('Cleveland'),
('Clwyd'),
('Conwy'),
('Cornwall'),
('Cumbria'),
('Denbighshire'),
('Derbyshire'),
('Devon'),
('Dorset'),
('Dumfriesshire'),
('Dunbartonshire'),
('Durham'),
('Dyfed'),
('Lothian'),
('Sussex'),
('Yorkshire'),
('Essex'),
('Fife'),
('Flintshire'),
('Gloucestershire'),
('Manchester'),
('Guernsey'),
('Gwent'),
('Gwynedd'),
('Hampshire'),
('Herefordshire'),
('Hertfordshire'),
('shire'),
('Anglesey'),
('Man'),
('Wight'),
('Jersey'),
('Kent'),
('Kincardineshire'),
('shire'),
('Kirkcudbrightshire'),
('Lanarkshire'),
('Lancashire'),
('Leicestershire'),
('Lincolnshire'),
('London'),
('Londonderry'),
('Merseyside'),
('Tydfil'),
('Glamorgan'),
('Middlesex'),
('Midlothian'),
('Monmouthshire'),
('Moray'),
('Nairnshire'),
('Talbot'),
('Newport'),
('Norfolk'),
('Yorkshire'),
('Northamptonshire'),
('Northumberland'),
('Nottinghamshire'),
('Orkney'),
('Oxfordshire'),
('Peeblesshire'),
('Pembrokeshire'),
('Perthshire'),
('Powys'),
('Renfrewshire'),
('Taff'),
('shire'),
('Roxburghshire'),
('Rutland'),
('Selkirkshire'),
('Shetland'),
('Shropshire'),
('Somerset'),
('Glamorgan'),
('Yorkshire'),
('Staffordshire'),
('Stirlingshire'),
('Suffolk'),
('Surrey'),
('Sutherland'),
('Swansea'),
('Torfaen'),
('Wear'),
('Glamorgan'),
('Warwickshire'),
('Glamorgan'),
('Lothian'),
('Midlands'),
('Sussex'),
('Yorkshire'),
('Wigtownshire'),
('Wiltshire'),
('Worcestershire'),
('Wrexham');

CREATE TABLE IF NOT EXISTS `certifications` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`certifications` (`name`) VALUES
('BLS'),
('BCLS'),
('ALS'),
('ACLS'),
('CCRN'),
('CARN'),
('PCCN'),
('ADM'),
('CMCN'),
('CMCP'),
('CGRN'),
('COHN'),
('CPAN'),
('CCN'),
('CPHRM'),
('LNCC'),
('ENP'),
('FNP'),
('GNP'),
('PPCNP'),
('PMHNP'),
('AGACNP'),
('AGPCNP'),
('AGCNS'),
('NNP'),
('WHNP'),
('CENP');

CREATE TABLE IF NOT EXISTS `professions` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`professions` (`name`) VALUES 
('Registered Nurse'),
('Licensed Practical Nurse'),
('Certified Nursing Assistant'),
('Allied Health'),
('Nurse Practitioner'),
('Clinical Nurse Specialist'),
('Management/Director/Executive'),
('Certified Occupational Therapist Assistant'),
('Occupational Therapist'),
('Physical Therapist'),
('Physical Therapist Assistant'),
('Speech Language Pathologist'),
('Speech Language Pathologist Assistant'),
('Other');

CREATE TABLE IF NOT EXISTS `specialities` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`specialities` (`name`) VALUES 
('Administrative / Research / Non-Clinical'),
('Ambulatory Care'),
('Camp / School Nurse'),
('Case Management/Utilization Review'),
('Catheterization Laboratory'),
('Cardiovascular Intensive Care Unit'),
('Correctional'),
('Certified Registered Nurse Anesthetist'),
('Cardiovascular Operating Room'),
('Diabetes'),
('Dialysis'),
('Endoscopy/GI Lab'),
('Emergency Room'),
('Flight Nurse'),
('Hematology/Oncology'),
('Home Health'),
('Hospice'),
('House Supervisor'),
('ICU (MICU, SICU, CCU, BICU)'),
('Infection Control'),
('Informatics'),
('Labor and Delivery'),
('Medical Surgical'),
('Mother-Baby/Couplet Care/Nursery'),
('Neonatal Intensive Care Unit'),
('Nurse Edu'),
('Obstetrics/Gynecology'),
('Occupational/Industrial Nursing'),
('Office/Outpatient Clinic'),
('Operating Room'),
('Post-Anesthesia Care Unit'),
('Palliative Care'),
('Pediatric Intensive Care Unit'),
('Pediatrics'),
('Plastic Surgery'),
('Post-Partum/Ante-Partum'),
('Psychiatry'),
('Quality'),
('Radiology'),
('Rehabilitation/Sub-Acute'),
('Sales'),
('Skilled Nursing/Long Term Care'),
('Telemetry/Step-Down'),
('Telephonic'),
('Transplant'),
('Wound Care'),
('Other');

CREATE TABLE IF NOT EXISTS `employmenttypes` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`employmenttypes` (`name`) VALUES 
('Travel/Contract'),
('Permanent'),
('Per Diem');

CREATE TABLE IF NOT EXISTS `licenses` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`licenses` (`name`) VALUES 
('Alabama'),
('Alaska'),
('Arizona'),
('Arkansas'),
('California'),
('Colorado'),
('Connecticut'),
('Delaware'),
('District Of Columbia'),
('Florida'),
('Georgia'),
('Hawaii'),
('Idaho'),
('Illinois'),
('Indiana'),
('Iowa'),
('Kansas'),
('Kentucky'),
('Louisiana'),
('Maine'),
('Maryland'),
('Massachusetts'),
('Michigan'),
('Minnesota'),
('Mississippi'),
('Missouri'),
('Montana'),
('Nebraska'),
('Nevada'),
('New Hampshire'),
('New Jersey'),
('New Mexico'),
('New York'),
('North Carolina'),
('North Dakota'),
('Ohio'),
('Oklahoma'),
('Oregon'),
('Pennsylvania'),
('Rhode Island'),
('South Carolina'),
('South Dakota'),
('Tennessee'),
('Texas'),
('Utah'),
('Vermont'),
('Virginia'),
('Washington'),
('West Virginia'),
('Wisconsin'),
('Wyoming');


CREATE TABLE IF NOT EXISTS `shifts` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`shifts` (`name`) VALUES 
('Day'),
('Evening'),
('Night');

CREATE TABLE IF NOT EXISTS `travelexperiences` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`travelexperiences` (`name`) VALUES 
('1+ Year(s)'),
('< 1 Year'),
('None');

CREATE TABLE IF NOT EXISTS `hearAboutUs` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `gabay_db`.`hearAboutUs` (`name`) VALUES 
('Website'),
('Social Media'),
('Search Engine'),
('Friend');
commit;