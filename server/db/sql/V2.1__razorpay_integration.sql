-- Create order_transaction table
CREATE TABLE `order_transaction` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `rz_order_id` varchar(255) NOT NULL,
  `rz_payment_id` varchar(255),
  `rz_amount` int(11) NOT NULL,
  `rz_status` varchar(50) NOT NULL,
  `rz_updated_at` datetime ON UPDATE current_timestamp(),
  `rz_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`transaction_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
-- remove transaction details from `appointment`
ALTER TABLE `appointment` DROP `status`,
  DROP `pay_amt`,
  DROP `pay_method`,
  DROP `pay_status`,
  DROP `pay_datetime`;
-- make refund nullable
ALTER TABLE `appointment` CHANGE `refund_amt` `refund_amt` INT NULL,
  CHANGE `refund_date` `refund_date` DATETIME NULL,
  CHANGE `refund_transaction_id` `refund_transaction_id` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL,
  CHANGE `service_provider_id` `service_provider_id` INT NULL;
-- fixes for customer table
ALTER TABLE `customer` CHANGE `gender` `gender` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  CHANGE `dob` `dob` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  CHANGE `address` `address` VARCHAR(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  CHANGE `city` `city` VARCHAR(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  CHANGE `state` `state` VARCHAR(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  CHANGE `pincode` `pincode` VARCHAR(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL;