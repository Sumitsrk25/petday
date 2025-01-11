CREATE TABLE `vaccine_record` (
 `vaccine_id` int(11) NOT NULL AUTO_INCREMENT,
 `customer_id` int(11) NOT NULL,
 `pet_id` int(11) NOT NULL,
 `vaccine_name` varchar(200) NOT NULL,
 `vaccine_date` timestamp NULL DEFAULT NULL,
 `vaccine_expiry` timestamp NULL DEFAULT NULL,
 `created` timestamp NOT NULL DEFAULT current_timestamp(),
 PRIMARY KEY (`vaccine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4
