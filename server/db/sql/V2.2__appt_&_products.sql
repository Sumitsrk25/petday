ALTER TABLE `appointment`
ADD `status` VARCHAR(50) NOT NULL DEFAULT 'Pending'
AFTER `type`;
ALTER TABLE `products` CHANGE `dimension` `dimension` VARCHAR(30) NOT NULL;