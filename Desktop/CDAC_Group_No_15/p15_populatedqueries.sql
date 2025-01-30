CREATE DATABASE  IF NOT EXISTS `p15_epackmart` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `p15_epackmart`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: p15_epackmart
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (50,'Plastic Films'),(51,'Corrugated Boxes'),(52,'Paper Packaging'),(53,'Flexible Packaging');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (281,'Visakhapatnam',1),(282,'Vijayawada',1),(283,'Guntur',1),(284,'Nellore',1),(285,'Kurnool',1),(286,'Itanagar',2),(287,'Tawang',2),(288,'Ziro',2),(289,'Pasighat',2),(290,'Roing',2),(291,'Guwahati',3),(292,'Silchar',3),(293,'Dibrugarh',3),(294,'Jorhat',3),(295,'Tezpur',3),(296,'Patna',4),(297,'Gaya',4),(298,'Bhagalpur',4),(299,'Muzaffarpur',4),(300,'Darbhanga',4),(301,'Raipur',5),(302,'Bilaspur',5),(303,'Durg',5),(304,'Korba',5),(305,'Rajnandgaon',5),(306,'Panaji',6),(307,'Margao',6),(308,'Vasco da Gama',6),(309,'Mapusa',6),(310,'Ponda',6),(311,'Ahmedabad',7),(312,'Surat',7),(313,'Vadodara',7),(314,'Rajkot',7),(315,'Bhavnagar',7),(316,'Chandigarh',8),(317,'Faridabad',8),(318,'Gurugram',8),(319,'Panipat',8),(320,'Ambala',8),(321,'Shimla',9),(322,'Manali',9),(323,'Dharamshala',9),(324,'Mandi',9),(325,'Solan',9),(326,'Ranchi',10),(327,'Jamshedpur',10),(328,'Dhanbad',10),(329,'Bokaro',10),(330,'Hazaribagh',10),(331,'Bengaluru',11),(332,'Mysuru',11),(333,'Hubballi',11),(334,'Mangaluru',11),(335,'Belagavi',11),(336,'Thiruvananthapuram',12),(337,'Kochi',12),(338,'Kozhikode',12),(339,'Thrissur',12),(340,'Alappuzha',12),(341,'Bhopal',13),(342,'Indore',13),(343,'Gwalior',13),(344,'Jabalpur',13),(345,'Ujjain',13),(346,'Mumbai',14),(347,'Pune',14),(348,'Nagpur',14),(349,'Nashik',14),(350,'Chhatrapati Sambhaji Nagar',14),(351,'Imphal',15),(352,'Churachandpur',15),(353,'Thoubal',15),(354,'Kakching',15),(355,'Ukhrul',15),(356,'Shillong',16),(357,'Tura',16),(358,'Nongstoin',16),(359,'Jowai',16),(360,'Baghmara',16),(361,'Aizawl',17),(362,'Lunglei',17),(363,'Serchhip',17),(364,'Champhai',17),(365,'Kolasib',17),(366,'Kohima',18),(367,'Dimapur',18),(368,'Mokokchung',18),(369,'Mon',18),(370,'Wokha',18),(371,'Bhubaneswar',19),(372,'Cuttack',19),(373,'Rourkela',19),(374,'Berhampur',19),(375,'Sambalpur',19),(376,'Chandigarh',20),(377,'Ludhiana',20),(378,'Amritsar',20),(379,'Jalandhar',20),(380,'Patiala',20),(381,'Jaipur',21),(382,'Jodhpur',21),(383,'Udaipur',21),(384,'Kota',21),(385,'Ajmer',21),(386,'Gangtok',22),(387,'Namchi',22),(388,'Gyalshing',22),(389,'Mangan',22),(390,'Rangpo',22),(391,'Chennai',23),(392,'Coimbatore',23),(393,'Madurai',23),(394,'Tiruchirappalli',23),(395,'Salem',23),(396,'Hyderabad',24),(397,'Warangal',24),(398,'Nizamabad',24),(399,'Karimnagar',24),(400,'Khammam',24),(401,'Agartala',25),(402,'Udaipur',25),(403,'Kailashahar',25),(404,'Dharmanagar',25),(405,'Ambassa',25),(406,'Lucknow',26),(407,'Kanpur',26),(408,'Varanasi',26),(409,'Agra',26),(410,'Meerut',26),(411,'Dehradun',27),(412,'Haridwar',27),(413,'Nainital',27),(414,'Rishikesh',27),(415,'Almora',27),(416,'Kolkata',28),(417,'Darjeeling',28),(418,'Asansol',28),(419,'Siliguri',28),(420,'Howrah',28);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (501,'MSME123456789','GSTIN1234567890',201),(502,'MSME987654321','GSTIN9876543210',202),(503,'MSME112233445','GSTIN1122334455',203),(504,'MSME667788990','GSTIN6677889900',204),(505,'MSME998877665','GSTIN9988776655',205),(506,'MSME223344556','GSTIN2233445566',206),(507,'MSME334455667','GSTIN3344556677',207),(508,'MSME638877665','GSTIN5377889901',310),(509,'MSME352233463','GSTIN4634567886',313);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `company_product`
--

LOCK TABLES `company_product` WRITE;
/*!40000 ALTER TABLE `company_product` DISABLE KEYS */;
INSERT INTO `company_product` VALUES (17,111,501,5.00,'Large','Plastic','High-quality plastic wrap for packaging',1000,150.50),(18,112,502,3.00,'Medium','Plastic','Plastic film rolls for industrial use',1500,200.00),(19,113,503,4.00,'Large','Plastic','Shrink wrap for product bundling',1200,180.75),(20,114,504,2.50,'Small','Plastic','Durable plastic bags for packing',2000,120.30),(21,115,505,8.00,'Large','Cardboard','Corrugated packaging boxes for shipping',900,250.00),(22,116,506,10.00,'Medium','Cardboard','Double wall corrugated box for heavy goods',800,300.00),(23,117,507,6.00,'Small','Cardboard','Single wall corrugated box for light goods',1500,100.00),(24,118,501,12.00,'Custom','Cardboard','Custom printed corrugated box for branding',700,350.00),(25,119,502,1.00,'Medium','Paper','Brown kraft paper for packaging and wrapping',2500,50.00),(26,120,503,2.00,'Large','Paper','Recycled paperboard for sustainable packaging',1200,60.00),(27,121,504,0.50,'Small','Paper','Paper bags for eco-friendly packaging',5000,35.00),(28,122,505,2.50,'Medium','Paper','Paperboard boxes for lightweight packaging',1800,75.00),(29,123,506,3.00,'Pouch','Plastic','Flexible packaging pouches for snacks',2000,100.00),(30,124,507,4.00,'Roll','Plastic','Stretch film for wrapping and securing goods',1500,120.00),(31,125,501,1.00,'Small','Plastic','BOPP bags for packaging small items',3000,90.00),(32,126,502,5.00,'Sheet','Aluminum','Aluminum foil packaging for food products',1300,150.00);
/*!40000 ALTER TABLE `company_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `p_order`
--

LOCK TABLES `p_order` WRITE;
/*!40000 ALTER TABLE `p_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `p_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (111,'Plastic Wrap',50),(112,'Plastic Film Rolls',50),(113,'Shrink Wrap',50),(114,'Plastic Bags',50),(115,'Corrugated Packaging Boxes',51),(116,'Double Wall Corrugated Box',51),(117,'Single Wall Corrugated Box',51),(118,'Custom Printed Corrugated Box',51),(119,'Brown Kraft Paper',52),(120,'Recycled Paperboard',52),(121,'Paper Bags',52),(122,'Paperboard Boxes',52),(123,'Flexible Packaging Pouches',53),(124,'Stretch Film',53),(125,'BOPP Bags',53),(126,'Aluminum Foil Packaging',53);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'vendor'),(3,'customer');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Andhra Pradesh'),(2,'Arunachal Pradesh'),(3,'Assam'),(4,'Bihar'),(5,'Chhattisgarh'),(6,'Goa'),(7,'Gujarat'),(8,'Haryana'),(9,'Himachal Pradesh'),(10,'Jharkhand'),(11,'Karnataka'),(12,'Kerala'),(13,'Madhya Pradesh'),(14,'Maharashtra'),(15,'Manipur'),(16,'Meghalaya'),(17,'Mizoram'),(18,'Nagaland'),(19,'Odisha'),(20,'Punjab'),(21,'Rajasthan'),(22,'Sikkim'),(23,'Tamil Nadu'),(24,'Telangana'),(25,'Tripura'),(26,'Uttar Pradesh'),(27,'Uttarakhand'),(28,'West Bengal');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (101,'alice.smith@admin.com','Alice Smith','alice@12',281,'101, Blue Lane, Visakhapatnam, Andhra Pradesh','ABC1234567',1),(102,'amit.kumar@admin.com','Amit Kumar','amit@45',282,'56, Green Park, Vijayawada, Andhra Pradesh','JKL9876543',1),(103,'anil.agarwal@admin.com','Anil Agarwal','anil@67',331,'34, Oakwood Apartments, Jayanagar, Bengaluru, Karnataka','GHI9876543',1),(104,'arvind.singh@admin.com','Arvind Singh','arvind@78',346,'78, Shivaji Nagar, Andheri West, Mumbai, Maharashtra','XYZ1234567',1),(201,'vikram.packaging@vendor.com','Vikram Packaging','vikram@12',283,'45, MG Road, Guntur, Andhra Pradesh','LMN5432101',2),(202,'vasundhara.pack@vendor.com','Vasundhara Pack','vasundhara@23',285,'32, Krishna Nagar, Kurnool, Andhra Pradesh','STU6543210',2),(203,'veera.packaging@vendor.com','Veera Packaging','veera@56',302,'22, River View Lane, Bilaspur, Chhattisgarh','MNO8765432',2),(204,'vishal.packing@vendor.com','Vishal Packing','vishal@78',325,'67, Greenfield, Ranchi, Jharkhand','DEF3456789',2),(205,'vinayak.packing@vendor.com','Vinayak Packing','vinayak@34',305,'200, Shankar Nagar, Raipur, Chhattisgarh','JKL6543210',2),(206,'vidya.pack@vendor.com','Vidya Pack','vidya@67',336,'89, Dehradun Heights, Dehradun, Uttarakhand','STU1239876',2),(207,'vikas.packing@vendor.com','Vikas Packing','vikas@99',347,'250, Aaram Nagar, Thane West, Mumbai, Maharashtra','PQR8765432',2),(301,'chetna.patel@customer.com','Chetna Patel','chetna@34',282,'87, Green Park, Vijayawada, Andhra Pradesh','XYZ9876543',3),(302,'chirag.sharma@customer.com','Chirag Sharma','chirag@45',285,'12, New Colony, Nellore, Andhra Pradesh','PQR9876543',3),(303,'chaitanya.joshi@customer.com','Chaitanya Joshi','chaitanya@67',307,'45, Sunshine Villas, Margao, Goa','STU5432109',3),(304,'charu.das@customer.com','Charu Das','charu@12',325,'22, Rose Garden, Solan, Himachal Pradesh','PQR1239876',3),(305,'chitra.verma@customer.com','Chitra Verma','chitra@34',336,'33, Greenfield Road, Thiruvananthapuram, Kerala','XYZ3216547',3),(306,'chetan.murthy@customer.com','Chetan Murthy','chetan@56',328,'101, Maple Street, Dhanbad, Jharkhand','DEF7654321',3),(307,'chanchal.agarwal@customer.com','Chanchal Agarwal','chanchal@89',306,'108, Lotus Colony, Navi Mumbai, Maharashtra','LMN9876543',3),(308,'chiranjivi.naidu@customer.com','Chiranjivi Naidu','chiranjivi@23',347,'45, Green Meadows, Pune, Maharashtra','DEF3216547',3),(309,'ch08@gmail.com','Ch Pande','chpande@34',379,'Gopal Nagar, Jalandhar, Punjab','XYZ6476547',3),(310,'vijay.pack@vendor.com','Vijay Dev','vijay@36',409,'89, Nehru Colony, Agra, Uttar Pradesh','MGF2456789A',2),(311,'chinmay.sathe@customer.com','Chinmay Sathe','chinamy@89',409,'63, Gandhi Colony, Agra, Uttar Pradesh','JNN5676343',3),(313,'vinit.pack@vendor.com','Vinit Pack','vinit@77',322,'61, Mall Road, Manali, Himachal Pradesh','STU8539842',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-06 17:00:11
