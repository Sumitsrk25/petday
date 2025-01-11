ALTER TABLE `appointment`
ADD `status` VARCHAR(50) NOT NULL DEFAULT 'Pending'
AFTER `type`;
-- correction for products
ALTER TABLE `products` CHANGE `dimension` `dimension` VARCHAR(30) NOT NULL;

-- seed products
INSERT INTO `products` (
  `item_id`, `item_name`, `category`, `item_hsn`, `description`,
  `dimension`, `weight`, `item_image`, `mrp`, `discount`,
  `gst_percent`, `stock`, `max_quantity`, `personalize`
) VALUES
(1, 'Dog Residence Mat', 'Toys, Other', '74141',
 'A cozy mat for pets, soft and comfortable for small to medium-sized animals.',
 '12*13*18', 3, 'assets/images/shop/product_img_15.jpg',
 1240, 35, 18, 'In Stock', 5, 'No'),
(2, 'Cat Sleeping Pad', 'Beds, Other', '84122',
 'Soft sleeping pad for cats, made with durable material.',
 '10*15*20', 2, 'assets/images/shop/product_img_16.jpg',
 900, 25, 18, 'In Stock', 4, 'No'),
(3, 'Pet Travel Bag', 'Accessories, Bags', '52141',
 'Lightweight travel bag for carrying pets.',
 '20*15*25', 5, 'assets/images/shop/product_img_17.jpg',
 1599, 30, 18, 'Limited Stock', 3, 'No'),
(4, 'Dog Chew Toy', 'Toys, Chews', '33124',
 'Durable chew toy for dogs to keep them engaged.',
 '8*5*10', 1, 'assets/images/shop/product_img_18.jpg',
 450, 15, 5, 'In Stock', 10, 'No'),
(5, 'Adjustable Pet Collar', 'Accessories, Collars', '62141',
 'Stylish and adjustable pet collar for dogs and cats.',
 '5*3*2', 0, 'https://example.com/images/pet_collar.png',
 350, 10, 12, 'In Stock', 7, 'Yes'),
(6, 'Dog Raincoat', 'Clothing, Rainwear', '44152',
 'Waterproof raincoat to keep your dog dry during rain.',
 '25*18*3', 1, 'https://example.com/images/dog_raincoat.png',
 800, 20, 18, 'In Stock', 2, 'Yes'),
(7, 'Cat Litter Box', 'Hygiene, Litter', '74133',
 'Easy-to-clean litter box for cats.',
 '30*25*40', 7, 'https://example.com/images/cat_litter_box.png',
 1800, 40, 18, 'Limited Stock', 1, 'No'),
(8, 'Pet Feeding Bowl', 'Accessories, Feeding', '92152',
 'Stainless steel feeding bowl for pets.',
 '15*15*8', 2, 'https://example.com/images/pet_feeding_bowl.png',
 600, 10, 5, 'In Stock', 6, 'No'),
(9, 'Dog Training Leash', 'Accessories, Leash', '61124',
 'Durable training leash for dogs.',
 '20*5*3', 2, 'https://example.com/images/dog_training_leash.png',
 500, 15, 12, 'In Stock', 8, 'No'),
(10, 'Pet Grooming Kit', 'Hygiene, Grooming', '44162',
 'Complete grooming kit for pets including brushes and clippers.',
 '30*20*10', 5, 'https://example.com/images/pet_grooming_kit.png',
 2500, 20, 18, 'In Stock', 3, 'Yes');
