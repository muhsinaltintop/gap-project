/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.14-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 46.202.154.201    Database: odycodig_gap
-- ------------------------------------------------------
-- Server version	10.11.14-MariaDB-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alternative`
--

DROP TABLE IF EXISTS `alternative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternative` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternative`
--

LOCK TABLES `alternative` WRITE;
/*!40000 ALTER TABLE `alternative` DISABLE KEYS */;
INSERT INTO `alternative` VALUES
(1,2015,1481,-1),
(2,2016,1279,-1),
(3,2017,1707,-1),
(4,2018,2497,8620),
(5,2019,2934,9660),
(6,2020,2883,6880),
(7,2021,3092,5600),
(8,2022,5149,4310),
(9,2023,-1,4950);
/*!40000 ALTER TABLE `alternative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alternativeDublinReturns`
--

DROP TABLE IF EXISTS `alternativeDublinReturns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternativeDublinReturns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternativeDublinReturns`
--

LOCK TABLES `alternativeDublinReturns` WRITE;
/*!40000 ALTER TABLE `alternativeDublinReturns` DISABLE KEYS */;
INSERT INTO `alternativeDublinReturns` VALUES
(1,'germany',1954,3002,7124,9209,8423,2953,2652,4158,0,'The category from Eurostat is: Outgoing \"Dublin\" transfers by receiving country (PARTNER), legal provision, duration of transfer, sex and type of applicant.'),
(2,'poland',17,8,15,67,58,34,127,90,91,''),
(3,'netherlands',705,2131,1890,1849,2370,1648,1149,1285,1807,'');
/*!40000 ALTER TABLE `alternativeDublinReturns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alternativeSource`
--

DROP TABLE IF EXISTS `alternativeSource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternativeSource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(20) NOT NULL,
  `category` text NOT NULL,
  `source` text NOT NULL,
  `url` text NOT NULL,
  `additionalNotes` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternativeSource`
--

LOCK TABLES `alternativeSource` WRITE;
/*!40000 ALTER TABLE `alternativeSource` DISABLE KEYS */;
INSERT INTO `alternativeSource` VALUES
(1,'germany','deportation','Deutscher Bundestag, 2015 et seq','https://dserver.bundestag.de/btd/18/075/1807588.pdf; https://dserver.bundestag.de/btd/18/111/1811112.pdf; https://dserver.bundestag.de/btd/19/008/1900800.pdf; https://dserver.bundestag.de/btd/19/080/1908021.pdf; https://dserver.bundestag.de/btd/19/182/1918201.pdf; https://dserver.bundestag.de/btd/19/270/1927007.pdf; https://dserver.bundestag.de/btd/20/008/2000890.pdf; https://dserver.bundestag.de/btd/20/057/2005795.pdf','In cases where a person has illegally crossed a border and is picked up within 6 months, they can be deported according to Sec. 57 residence Act. It is an urgent measure, which does not require an injunction.'),
(2,'germany','illegalEntries','Migrationsbericht, 2021; Bundestag, 2023','https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2021.pdf?__blob=publicationFile&v=15; https://dserver.bundestag.de/btd/20/066/2006636.pdf',''),
(3,'germany','personsObligedToLeave','Deutscher Bundestag, 2023','https://dserver.bundestag.de/btd/20/066/2006636.pdf','These include tolerated persons (a temporary suspension of deportation, Sec. 60a residence act).'),
(4,'netherlands','independentReturn','DT&V, 2023','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','The Dutch authorities speak of \'zelfstandig vertrokken zonder toezicht\'. Meaning \'left with unknown destination\'. The authorities cannot say whether these migrants have actually left Dutch territory or not; they simply disappeared.'),
(5,'nigeria','repatriation','Odunsi, W., DailyPost, 2021, March 16.','https://dailypost.ng/2021/03/16/nigeria-immigration-deports-64-foreigners-repatriates-1132/',''),
(6,'nigeria','deportationFigures','Odunsi, W., DailyPost, 2021, March 16 ; Odeniyi, S., Punch, 2024','https://dailypost.ng/2021/03/16/nigeria-immigration-deports-64-foreigners-repatriates-1132/; https://punchng.com/61-foreigners-deported-over-irregular-migration-says-nis/','Note on the figure belonging to 2024: The data indicates just the no. of deported foreign nationals in the month of August 2024. The source says \'No fewer than 61 foreign nationals were deported by the Nigerian Immigration Service from the country in August 2024.\'');
/*!40000 ALTER TABLE `alternativeSource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asylumApplication`
--

DROP TABLE IF EXISTS `asylumApplication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `asylumApplication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `year_2024` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asylumApplication`
--

LOCK TABLES `asylumApplication` WRITE;
/*!40000 ALTER TABLE `asylumApplication` DISABLE KEYS */;
INSERT INTO `asylumApplication` VALUES
(1,'germany',476649,745545,222683,185853,165938,122170,190816,244132,87777,0,'The figure for 2023 refers to the period from January to March.'),
(2,'sweden',163772,29096,25938,21665,22240,13140,11513,16813,9234,0,''),
(3,'greece',13205,51110,58660,66975,77285,40560,28355,37380,0,0,'Very small disparities (gaps) between Eurostat data and official national sources (Ministry of Migration & Asylum). Groups under Temporary Protection Status (TPS) (e.g., Ukrainians) are included in the official data of asylum seekers provided above.'),
(4,'poland',12325,12319,5078,4135,4096,2803,7699,9933,9513,0,''),
(5,'netherlands',44970,20945,18210,24025,25200,15255,26520,37020,0,0,'Aggregate of first-time asylum claims (excluding \'nareizigers\' based on family reunification).'),
(6,'turkey',64232,66167,112415,114537,56417,31334,29256,33246,19017,0,''),
(7,'iraq',244642,230836,247057,252526,245810,242163,254561,258541,0,0,''),
(8,'jordan',41012,53602,28667,27527,22281,13271,23130,17286,15058,1776,'The data reported for numbers of Syrian refugees registered with the UNHCR was used for # Asylum Applications as the best proxy data source, because no Syrians are denied refugee/asylum status in Jordan (to date; March 2024).'),
(9,'nigeria',0,47000,0,0,29960,17265,0,0,0,0,''),
(10,'morocco',5473,6733,6779,3835,5349,3614,5560,4956,0,0,'As for December 2022, UNHCR registered a Stock of 18102 refugees and asylum seekers registered with UNHCR from over 48 countries in January 2023.'),
(11,'tunisia',0,0,0,0,721,1235,1393,868,7828,1544,'We have provided you with the UNHCR statistics for each year. However, the numbers were extracted from the last factsheet due to its accuracy.'),
(12,'canada',16050,23855,50375,55025,64020,23685,24865,91640,143360,0,''),
(13,'unitedKingdom',32733,30747,26547,29504,35737,29815,50042,74751,75492,0,'The data displayed here has been contrasted between two sources: Statistica and UK Home Office. Only one inconsistency has been found (See conflicting data). 2023 data has been gathered until March.');
/*!40000 ALTER TABLE `asylumApplication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avc_germany`
--

DROP TABLE IF EXISTS `avc_germany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `avc_germany` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `deportation` int(11) NOT NULL,
  `illegalEntries` int(11) NOT NULL,
  `personsObligedToLeave` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avc_germany`
--

LOCK TABLES `avc_germany` WRITE;
/*!40000 ALTER TABLE `avc_germany` DISABLE KEYS */;
INSERT INTO `avc_germany` VALUES
(1,2015,1481,217237,204414),
(2,2016,1279,111843,207484),
(3,2017,1707,50154,228859),
(4,2018,2497,42478,235957),
(5,2019,2934,40610,249922),
(6,2020,2883,35435,281143),
(7,2021,3092,57637,292672),
(8,2022,5149,91986,304308);
/*!40000 ALTER TABLE `avc_germany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avc_netherlands`
--

DROP TABLE IF EXISTS `avc_netherlands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `avc_netherlands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `independentReturn` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avc_netherlands`
--

LOCK TABLES `avc_netherlands` WRITE;
/*!40000 ALTER TABLE `avc_netherlands` DISABLE KEYS */;
INSERT INTO `avc_netherlands` VALUES
(1,2015,0),
(2,2016,0),
(3,2017,0),
(4,2018,8620),
(5,2019,9660),
(6,2020,6880),
(7,2021,5600),
(8,2022,4310),
(9,2023,4950);
/*!40000 ALTER TABLE `avc_netherlands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avc_nigeria`
--

DROP TABLE IF EXISTS `avc_nigeria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `avc_nigeria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `repatriation` int(11) NOT NULL,
  `deportationFigures` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avc_nigeria`
--

LOCK TABLES `avc_nigeria` WRITE;
/*!40000 ALTER TABLE `avc_nigeria` DISABLE KEYS */;
INSERT INTO `avc_nigeria` VALUES
(1,2020,1132,64),
(2,2024,0,61);
/*!40000 ALTER TABLE `avc_nigeria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countryList`
--

DROP TABLE IF EXISTS `countryList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `countryList` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `countryName` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countryList`
--

LOCK TABLES `countryList` WRITE;
/*!40000 ALTER TABLE `countryList` DISABLE KEYS */;
INSERT INTO `countryList` VALUES
(1,'germany','#f7c800'),
(2,'sweden','#1E90FF'),
(3,'greece','#055eb1'),
(4,'poland','#62FF00'),
(5,'netherlands','#F36C21'),
(6,'turkey','#a91b27'),
(7,'iraq','#9e6928'),
(8,'jordan','#000000'),
(9,'afghanistan','#fc6601'),
(10,'nigeria','#00834e'),
(11,'morocco','#013220'),
(12,'tunisia','#ab00f6'),
(13,'canada','#fa8072'),
(14,'unitedKingdom','#000080');
/*!40000 ALTER TABLE `countryList` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dublinReturns`
--

DROP TABLE IF EXISTS `dublinReturns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `dublinReturns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dublinReturns`
--

LOCK TABLES `dublinReturns` WRITE;
/*!40000 ALTER TABLE `dublinReturns` DISABLE KEYS */;
INSERT INTO `dublinReturns` VALUES
(1,'germany',3597,3968,7102,9209,8423,2953,2656,4158,0,'The data belongs to the responses given by the German government to the question: \"How many transfers were made to other member states of the European Union or Schengen states under the Dublin Regulation?\", raised by the parliamentary group \"Die Linke\".'),
(2,'sweden',6465,10316,2821,2113,2178,1319,806,1248,812,''),
(3,'greece',847,890,4467,5447,2546,1825,1549,1037,0,'The data shows the number of outgoing requests transferred (not requests or decisions on requests). Transfer refers to \"taking charge/taking back\" which have been effectively carried out by the reporting Member State (Geo) (=Greece) to another Member State.'),
(4,'poland',21,9,16,80,55,30,120,95,91,''),
(5,'netherlands',0,0,0,1850,2420,1280,970,1520,0,'The website shows table with title: \"Bestemming bij aantoonbaar vertrek (zelfstandig en gedwongen)\", see row Dublin-countries.'),
(6,'unitedKingdom',3492,4239,5712,5510,3258,8502,0,0,0,'Dublin system regulations, alongside other asylum measures which make up the Common European Asylum System, ceased to apply to the UK on 1 January 2021, following the inability of the UK and the EU to agree to an alternative migration and asylum framework.');
/*!40000 ALTER TABLE `dublinReturns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entryRefusals`
--

DROP TABLE IF EXISTS `entryRefusals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `entryRefusals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entryRefusals`
--

LOCK TABLES `entryRefusals` WRITE;
/*!40000 ALTER TABLE `entryRefusals` DISABLE KEYS */;
INSERT INTO `entryRefusals` VALUES
(1,'germany',3670,3775,4250,5175,6730,4210,4635,5970,0,'The exact category from Eurostat is: Third country nationals refused entry at the external borders - annual data (rounded).'),
(2,'sweden',615,1405,880,1090,1565,1200,550,905,0,'Accordingly to the provided information by the Swedish police regarding the number of pushback cases for TCNs with no right to enter Sweden, the term \"pushback\" is not used in Swedish law. The Police Authority rejects the suggestion that illegal pushbacks are conducted at the Swedish border or within Swedish jurisdiction. It may be noted that there are few, if any, reports on illegal pushbacks at Swedish borders. Foreign citizens who are not eligible for entry will, according to the Police Authority, be denied entry and returned to their country of origin or last departure point.'),
(3,'greece',6890,18145,21175,14295,7015,3145,3075,5450,0,'The number (2157) noted in the row for 2020, refers to the period from April 2020 to October 2022. It refers to the number of alleged victims in 50 incidents of informal forced returns that occurred from April 2020 to October 2022, according to the testimonies.'),
(4,'poland',41580,103986,72140,76900,95735,34945,34125,28272,18078,''),
(5,'netherlands',2295,2700,2410,2555,2900,1980,3745,3070,0,'See table 1 in Appendix.'),
(6,'jordan',0,0,0,0,0,0,0,0,0,'There is no available data on entry refusals and pushbacks of Syrian refugees and asylum seekers wanting to cross the border into Jordan. Qualitative findings from interviews with UNHCR experts (conducted under WP4) indicated that there are no incidents of pushbacks by Jordanian authorities to stop Syrian refugees from entering Jordan, and that this was not highlighted or mentioned by the Syrian refugee community during any engagements they had with the UNHCR over the past 7 or 8 years.'),
(7,'canada',0,0,0,2800,0,0,0,0,0,'2018 number covers the period between April 2018 to March 2019.'),
(8,'unitedKingdom',14950,14480,14280,16540,18275,0,0,0,0,'The pushbacks data has been gathered from the UK Home Office under the label \"Total Enforced Returns\". The different labelling, and the fact that it is a State source, makes this specific column prone to data gaps and data conflicts in future analysis. 2023 data gathered until March.');
/*!40000 ALTER TABLE `entryRefusals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_germany`
--

DROP TABLE IF EXISTS `rbc_germany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_germany` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `kosovo` int(11) NOT NULL,
  `albania` int(11) NOT NULL,
  `serbia` int(11) NOT NULL,
  `macedonia` int(11) NOT NULL,
  `russianFederation` int(11) NOT NULL,
  `bosniaAndHerzegowina` int(11) NOT NULL,
  `romania` int(11) NOT NULL,
  `georgia` int(11) NOT NULL,
  `ukraine` int(11) NOT NULL,
  `syria` int(11) NOT NULL,
  `morocco` int(11) NOT NULL,
  `moldova` int(11) NOT NULL,
  `iraq` int(11) NOT NULL,
  `algeria` int(11) NOT NULL,
  `nigeria` int(11) NOT NULL,
  `afghanistan` int(11) NOT NULL,
  `pakistan` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_germany`
--

LOCK TABLES `rbc_germany` WRITE;
/*!40000 ALTER TABLE `rbc_germany` DISABLE KEYS */;
INSERT INTO `rbc_germany` VALUES
(1,2015,5955,3742,3627,1597,513,511,336,292,215,203,0,0,0,0,0,0,0,0,20887),
(2,2016,5043,6041,3781,1973,899,796,352,451,0,626,0,0,0,0,0,324,0,0,25375),
(3,2017,2772,3471,2374,1544,1003,0,0,698,0,0,753,751,662,653,0,0,0,0,23966),
(4,2018,1259,2214,1479,1055,1075,0,0,1128,0,0,857,0,1017,0,779,949,0,0,23617),
(5,2019,758,1604,10388,0,1152,0,0,1242,0,0,808,0,862,0,1432,931,833,0,22097),
(6,2020,0,1006,754,427,359,0,340,995,0,0,0,654,0,0,352,0,385,403,10800),
(7,2021,403,983,639,0,458,0,0,1200,0,470,0,555,0,0,0,500,551,408,11982),
(8,2022,0,878,795,810,0,0,0,953,0,707,0,601,471,665,0,732,0,657,12945);
/*!40000 ALTER TABLE `rbc_germany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_greece`
--

DROP TABLE IF EXISTS `rbc_greece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_greece` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `afghanistan` int(11) NOT NULL,
  `albania` int(11) NOT NULL,
  `algeria` int(11) NOT NULL,
  `asia` int(11) NOT NULL,
  `bangladesh` int(11) NOT NULL,
  `egypt` int(11) NOT NULL,
  `georgia` int(11) NOT NULL,
  `india` int(11) NOT NULL,
  `iran` int(11) NOT NULL,
  `iraq` int(11) NOT NULL,
  `morocco` int(11) NOT NULL,
  `pakistan` int(11) NOT NULL,
  `turkiye` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_greece`
--

LOCK TABLES `rbc_greece` WRITE;
/*!40000 ALTER TABLE `rbc_greece` DISABLE KEYS */;
INSERT INTO `rbc_greece` VALUES
(1,2018,176,6504,322,4677,169,0,659,0,381,1589,0,1336,348,12488),
(2,2020,218,2909,0,2712,114,90,641,0,168,511,76,916,0,6083),
(3,2021,0,3370,0,2855,160,105,835,125,100,395,0,1055,195,6875);
/*!40000 ALTER TABLE `rbc_greece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_jordan`
--

DROP TABLE IF EXISTS `rbc_jordan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_jordan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `syria` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_jordan`
--

LOCK TABLES `rbc_jordan` WRITE;
/*!40000 ALTER TABLE `rbc_jordan` DISABLE KEYS */;
INSERT INTO `rbc_jordan` VALUES
(1,2016,7165),
(2,2017,9913),
(3,2018,7074),
(4,2019,29409),
(5,2020,3466),
(6,2021,5994),
(7,2022,4013),
(8,2023,4383),
(9,2024,1840);
/*!40000 ALTER TABLE `rbc_jordan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_morocco`
--

DROP TABLE IF EXISTS `rbc_morocco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_morocco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `coteDIvoire` int(11) NOT NULL,
  `guinea` int(11) NOT NULL,
  `senegal` int(11) NOT NULL,
  `cameroon` int(11) NOT NULL,
  `nigeria` int(11) NOT NULL,
  `mali` int(11) NOT NULL,
  `congo` int(11) NOT NULL,
  `democraticRepublicOfCongo` int(11) NOT NULL,
  `sudan` int(11) NOT NULL,
  `gambia` int(11) NOT NULL,
  `ghana` int(11) NOT NULL,
  `philippines` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_morocco`
--

LOCK TABLES `rbc_morocco` WRITE;
/*!40000 ALTER TABLE `rbc_morocco` DISABLE KEYS */;
INSERT INTO `rbc_morocco` VALUES
(1,2020,215,202,165,47,19,36,22,11,0,19,0,11,49),
(2,2021,603,666,481,170,73,170,34,51,0,33,27,0,72),
(3,2022,657,598,367,152,146,117,111,85,47,46,0,0,131),
(4,2023,312,251,172,29,30,21,26,15,0,0,0,0,0);
/*!40000 ALTER TABLE `rbc_morocco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_netherlands`
--

DROP TABLE IF EXISTS `rbc_netherlands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_netherlands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `afghanistan` int(11) NOT NULL,
  `albania` int(11) NOT NULL,
  `algeria` int(11) NOT NULL,
  `iraq` int(11) NOT NULL,
  `moldova` int(11) NOT NULL,
  `morocco` int(11) NOT NULL,
  `nigeria` int(11) NOT NULL,
  `syria` int(11) NOT NULL,
  `ukrain` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_netherlands`
--

LOCK TABLES `rbc_netherlands` WRITE;
/*!40000 ALTER TABLE `rbc_netherlands` DISABLE KEYS */;
INSERT INTO `rbc_netherlands` VALUES
(1,2018,1,1,1,1,0,1,0,0,0),
(2,2019,0,0,1,1,1,1,1,0,0),
(3,2020,0,0,1,1,0,1,1,1,0),
(4,2021,0,1,1,0,0,1,1,1,0),
(5,2022,0,0,1,0,0,1,1,1,1),
(6,2023,0,0,1,0,1,1,1,1,0);
/*!40000 ALTER TABLE `rbc_netherlands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_nigeria`
--

DROP TABLE IF EXISTS `rbc_nigeria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_nigeria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `niger` int(11) NOT NULL,
  `benin` int(11) NOT NULL,
  `togo` int(11) NOT NULL,
  `chad` int(11) NOT NULL,
  `cameroon` int(11) NOT NULL,
  `egypt` int(11) NOT NULL,
  `sriLanka` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_nigeria`
--

LOCK TABLES `rbc_nigeria` WRITE;
/*!40000 ALTER TABLE `rbc_nigeria` DISABLE KEYS */;
INSERT INTO `rbc_nigeria` VALUES
(1,2020,782,226,31,12,11,10,8,2214);
/*!40000 ALTER TABLE `rbc_nigeria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_poland`
--

DROP TABLE IF EXISTS `rbc_poland`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_poland` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `afghanistan` int(11) NOT NULL,
  `armenia` int(11) NOT NULL,
  `belarus` int(11) NOT NULL,
  `china` int(11) NOT NULL,
  `georgia` int(11) NOT NULL,
  `india` int(11) NOT NULL,
  `iraq` int(11) NOT NULL,
  `kazakhstan` int(11) NOT NULL,
  `moldova` int(11) NOT NULL,
  `russia` int(11) NOT NULL,
  `syria` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `turkmenistan` int(11) NOT NULL,
  `ukraine` int(11) NOT NULL,
  `uzbekistan` int(11) NOT NULL,
  `vietnam` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_poland`
--

LOCK TABLES `rbc_poland` WRITE;
/*!40000 ALTER TABLE `rbc_poland` DISABLE KEYS */;
INSERT INTO `rbc_poland` VALUES
(1,2018,0,66,0,0,471,98,0,67,1141,1286,0,115,0,21338,0,255,27255),
(2,2019,0,0,1471,131,1144,134,0,89,887,1065,0,130,0,21511,0,203,17567),
(3,2020,0,0,490,55,391,59,0,0,278,447,0,79,0,7064,65,59,9362),
(4,2021,139,0,222,0,886,62,316,0,208,239,117,95,0,5264,0,0,8111),
(5,2022,256,0,561,0,1601,165,954,0,417,464,225,0,0,1033,154,0,7291),
(6,2023,0,0,1102,0,2433,212,0,0,894,544,920,198,118,544,245,0,8394);
/*!40000 ALTER TABLE `rbc_poland` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_sweden`
--

DROP TABLE IF EXISTS `rbc_sweden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_sweden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `afghanistan` int(11) NOT NULL,
  `albania` int(11) NOT NULL,
  `bosniaAndHerzegowina` int(11) NOT NULL,
  `colombia` int(11) NOT NULL,
  `georgia` int(11) NOT NULL,
  `iran` int(11) NOT NULL,
  `iraq` int(11) NOT NULL,
  `mongolia` int(11) NOT NULL,
  `pakistan` int(11) NOT NULL,
  `russia` int(11) NOT NULL,
  `serbia` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `ukraine` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  `uzbekistan` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_sweden`
--

LOCK TABLES `rbc_sweden` WRITE;
/*!40000 ALTER TABLE `rbc_sweden` DISABLE KEYS */;
INSERT INTO `rbc_sweden` VALUES
(1,2020,1390,410,0,250,430,210,745,0,170,0,225,0,450,0,225,4505),
(2,2021,630,385,0,0,415,0,715,245,0,245,290,0,740,520,410,4595),
(3,2022,0,630,255,0,655,0,600,275,0,235,390,0,375,280,750,4445),
(4,2023,330,490,0,280,370,0,755,265,0,305,355,305,0,0,680,4135);
/*!40000 ALTER TABLE `rbc_sweden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbc_tunisia`
--

DROP TABLE IF EXISTS `rbc_tunisia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbc_tunisia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `benin` int(11) NOT NULL,
  `burkinaFaso` int(11) NOT NULL,
  `gambia` int(11) NOT NULL,
  `guinea` int(11) NOT NULL,
  `liberia` int(11) NOT NULL,
  `mali` int(11) NOT NULL,
  `senegal` int(11) NOT NULL,
  `otherTotal` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbc_tunisia`
--

LOCK TABLES `rbc_tunisia` WRITE;
/*!40000 ALTER TABLE `rbc_tunisia` DISABLE KEYS */;
INSERT INTO `rbc_tunisia` VALUES
(1,2022,0,0,0,0,0,0,0,1614),
(2,2023,0,0,0,0,0,0,0,2557),
(3,2024,173,163,165,7,1,33,23,4100);
/*!40000 ALTER TABLE `rbc_tunisia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_assisted`
--

DROP TABLE IF EXISTS `rbt_assisted`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_assisted` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `tunisia` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_assisted`
--

LOCK TABLES `rbt_assisted` WRITE;
/*!40000 ALTER TABLE `rbt_assisted` DISABLE KEYS */;
INSERT INTO `rbt_assisted` VALUES
(1,2015,10908,0,0,0,1647),
(2,2016,8189,0,0,0,1357),
(3,2017,7984,0,0,0,1560),
(4,2018,8011,0,3610,0,2018),
(5,2019,7457,0,4460,0,1920),
(6,2020,5627,0,2630,0,1049),
(7,2021,5436,2740,2100,0,1319),
(8,2022,4660,3070,2450,1614,2174),
(9,2023,3001,1865,3380,2557,0),
(10,2024,0,0,0,4100,0),
(11,2025,0,0,0,0,0);
/*!40000 ALTER TABLE `rbt_assisted` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_enforced`
--

DROP TABLE IF EXISTS `rbt_enforced`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_enforced` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `jordan` int(11) NOT NULL,
  `nigeria` int(11) NOT NULL,
  `canada` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_enforced`
--

LOCK TABLES `rbt_enforced` WRITE;
/*!40000 ALTER TABLE `rbt_enforced` DISABLE KEYS */;
INSERT INTO `rbt_enforced` VALUES
(1,2015,0,0,0,0,0,0,0,850,12921),
(2,2016,0,162,0,0,0,0,0,1008,11903),
(3,2017,0,156,0,0,0,2000,0,1042,11741),
(4,2018,0,196,0,2650,0,0,0,903,9236),
(5,2019,0,134,0,2760,0,0,0,939,7198),
(6,2020,0,218,0,1650,43658,0,1196,0,3383),
(7,2021,10785,130,3145,1630,50420,0,0,0,2783),
(8,2022,13135,80,2560,1850,124441,0,0,0,3866),
(9,2023,3355,38,1850,2360,130609,0,0,0,4193),
(10,2024,0,0,0,0,93777,0,0,0,0);
/*!40000 ALTER TABLE `rbt_enforced` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_source`
--

DROP TABLE IF EXISTS `rbt_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_source` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `sourceVoluntaryReturn` text NOT NULL,
  `urlVoluntaryReturn` text NOT NULL,
  `sourceEnforcedReturn` text NOT NULL,
  `urlEnforcedReturn` text NOT NULL,
  `sourceAssistedReturn` text NOT NULL,
  `urlAssistedReturn` text NOT NULL,
  `urlSpontaneousReturn` text NOT NULL,
  `sourceSpontaneousReturn` text NOT NULL,
  `sourceTotal` text NOT NULL,
  `urlTotal` text NOT NULL,
  `notes` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_source`
--

LOCK TABLES `rbt_source` WRITE;
/*!40000 ALTER TABLE `rbt_source` DISABLE KEYS */;
INSERT INTO `rbt_source` VALUES
(1,'germany','Eurostat, 2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_6436561/default/table?lang=en','Eurostat, 2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_6436561/default/table?lang=en','Eurostat, 2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_6436561/default/table?lang=en','n/a','n/a','Eurostat, 2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_6436561/default/table?lang=en','The number of enforced return for 2023 only refers to the first quarter of 2023. The total number for 2020 only refers to the last quarter of 2020. The total number for 2023 only refers to the first quarter of 2023. The exact categories from Eurostat are: Non-assisted voluntary return, assisted forced return, assisted voluntary return, and the total number of returns.'),
(2,'sweden','Swedish Migration Agency, email correspondence with statistician, September and November 2023','n/a','Swedish Migration Agency, email correspondence with statistician, September and November 2023','n/a','Swedish Migration Agency, email correspondence with statistician, September and November 2023','n/a','n/a','n/a','Swedish Migration Agency, email correspondence with statistician, September and November 2023','n/a',''),
(3,'greece','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_9116731/default/table?lang=en','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_9116731/default/table?lang=en','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_9116731/default/table?lang=en','n/a','n/a','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN1__custom_9116731/default/table?lang=en','Column \"voluntary return\" refers to \"non-assisted voluntary return\". Column \"enforced return\" refers to \"assisted forced return\". Column \"assisted return\" refers to \"assisted voluntary return\". There are slight disparities between totals and sums of the three types for 2022 & 2023. Column \"Total\": - The number (645) for 2020 refers to the second quarter only. - The number (4250) for 2023 refers to the first 3 quarters. There are disparities (gaps) with \"TCNs returned following an order to leave (annual data)\".'),
(4,'poland','Border Guard, 2024','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a',''),
(5,'netherlands','Eurostat, 2024','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn1__custom_13623610/bookmark/table?lang=en&bookmarkId=a46b4bf6-7814-41ea-8b2c-447af23c9c74','DT&V, 2023','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','DT&V, 2023','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','n/a','n/a','DT&V, 2023','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','n/a'),
(6,'turkey','AHaber, 2024','https://www.youtube.com/watch?v=vvCTLlDWJxQ','AHaber, 2024','https://www.youtube.com/watch?v=vvCTLlDWJxQ','n/a','n/a','n/a','Number of \'voluntarily\" returned Syrians based on media monitoring of official statements, 2024','n/a','n/a','There is no publicly accessible data on voluntary, assisted, and forced return in a disaggregated way. Government authorities often provide figures that do not provide relevant breakdowns for proper data analysis.'),
(7,'iraq','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a'),
(8,'jordan','n/a','n/a','HRW, 2017','https://www.hrw.org/report/2017/10/02/i-have-no-idea-why-they-sent-us-back/jordanian-deportations-and-expulsions-syrian','n/a','n/a','https://data.unhcr.org/en/situations/syria_durable_solutions?_gl=1*4s4x8a*_rup_ga*NDAwMjUxODM1LjE3MDg3ODQyMTQ.*_rup_ga_EVDQTJ4LMY*MTcwODc5MDM1Ni4zLjEuMTcwODc5MTEyNi4wLjAuMA..*_ga*NDAwMjUxODM1LjE3MDg3ODQyMTQ.*_ga_R8HEVFXLT1*MTcwODc5MTEyNi4xLjAuMTcwODc5MTEyNi4wLjAuMA..#_ga=2.154098424.1354575118.1708784214-400251835.1708784214','UNHCR, 2024','n/a','n/a','Voluntary return: There is no obligation for Syrian refugees and asylum seekers to leave Jordan and return to Syria. Therefore, there is no data to report under voluntary return, according to the definition of the term in this study. Enforced return: The Government of Jordan does not enforce return migration of Syrian refugees and asylum seekers from Jordan to Syria. However, deportation cases of around 2,000 Syrian refugees were reported in 2016/2017, allegedly because the Jordanian authorities deemed these individuals to be a threat to national security in Jordan. The occurrence of these deportations was confirmed in expert interviews, but the number of deportations could not be validated beyond the 2017 article by Human Rights Watch, which is the original and sole source of this empirical data. Assisted return: There are no reported cases of any assisted returns of Syrian refugees and asylum seekers from Jordan to Syria.'),
(9,'afghanistan','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','n/a','There is no reliable and accurate data available on the types of return for Afghanistan. The existing data not only vary in numbers for the same period but also lack distinctive classifications that differentiate return types, such as voluntary, involuntary, assisted, or others.'),
(10,'nigeria','n/a','n/a','Odeniyi, S., Punch, 2024; Odunsi, W., Daily Post, March 2021','https://punchng.com/61-foreigners-deported-over-irregular-migration-says-nis/ ; https://dailypost.ng/2021/03/16/nigeria-immigration-deports-64-foreigners-repatriates-1132/','n/a','n/a','n/a','n/a','n/a','n/a','The data comes from two different sources. The data originally refer to the categorization of \"repatriation\" and \"deportation\" figures.'),
(11,'morocco','n/a','n/a','n/a','n/a','IOM Morocco, 2023','https://mena.iom.int/sites/g/files/tmzbdl686/files/documents/2023-03/Rapport_Annuel_EN_AVRR_20230310.pdf','n/a','n/a','n/a','n/a','For the 2023 data, returns concern the first half of the year.'),
(12,'tunisia','n/a','n/a','n/a','n/a','La Presse Tunisie, 2024','https://lapresse.tn/2024/07/26/oim-tunisie-rapatriement-volontaire-de-plus-de-4-100-migrants-vers-leurs-pays-dorigine/','n/a','n/a','n/a','n/a','These data were gathered from press sources (La Presse du Tunisie) which cites the IOM as a data source (AVRR).'),
(13,'canada','Canada Border Security Agency, 2020','https://www.cbsa-asfc.gc.ca/transparency-transparence/pd-dp/bbp-rpp/pacp/2020-11-24/km-mc-eng.html','Canada Border Security Agency, 2020','https://www.cbsa-asfc.gc.ca/transparency-transparence/pd-dp/bbp-rpp/pacp/2020-11-24/km-mc-eng.html','n/a','n/a','n/a','n/a','Canada Border Security Agency, 2020','https://www.cbsa-asfc.gc.ca/transparency-transparence/pd-dp/bbp-rpp/pacp/2020-11-24/km-mc-eng.html','2015 numbers cover period between April 2015 and March 2016. 2016 numbers cover period between April 2016 and March 2017. 2017 numbers cover period between April 2017 and March 2018. 2018 numbers cover period between April 2018 and March 2019. 2019 numbers cover period between April 2019 and March 2020. 2020 number covers period between April 2020 and March 2021. 2021 number covers period between April 2021 to March 2022.'),
(14,'unitedKingdom','UK Home Office, 2023','https://www.gov.uk/government/statistical-data-sets/returns-and-detention-datasets','UK Home Office, 2023','https://www.gov.uk/government/statistics/immigration-system-statistics-year-ending-june-2023/how-many-people-are-detained-or-returned#returns','UK Home Office, 2023','https://www.gov.uk/government/statistical-data-sets/returns-and-detention-datasets','n/a','n/a','n/a','n/a','This data should be analyzed and contrasted carefully because there was no specification of TCNs/foreign nationals returned following an order to leave, although it is assumed.');
/*!40000 ALTER TABLE `rbt_source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_spontaneous`
--

DROP TABLE IF EXISTS `rbt_spontaneous`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_spontaneous` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `jordan` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_spontaneous`
--

LOCK TABLES `rbt_spontaneous` WRITE;
/*!40000 ALTER TABLE `rbt_spontaneous` DISABLE KEYS */;
INSERT INTO `rbt_spontaneous` VALUES
(1,2015,0,60100),
(2,2016,7165,56300),
(3,2017,7913,40014),
(4,2018,7074,129000),
(5,2019,29409,85576),
(6,2020,3466,48050),
(7,2021,5994,55271),
(8,2022,4013,61803),
(9,2023,4383,76346),
(10,2024,1840,121695),
(11,2025,0,0);
/*!40000 ALTER TABLE `rbt_spontaneous` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_total`
--

DROP TABLE IF EXISTS `rbt_total`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_total` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `morocco` int(11) NOT NULL,
  `canada` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_total`
--

LOCK TABLES `rbt_total` WRITE;
/*!40000 ALTER TABLE `rbt_total` DISABLE KEYS */;
INSERT INTO `rbt_total` VALUES
(1,2015,0,21085,0,0,1399,8688),
(2,2016,0,23637,0,0,1500,7995),
(3,2017,0,18081,0,0,1733,8211),
(4,2018,0,17554,0,6260,1509,9695),
(5,2019,0,16663,0,7220,1370,11527),
(6,2020,5015,13521,645,4280,796,11229),
(7,2021,10785,12712,6880,3730,2377,7453),
(8,2022,13135,11105,7015,4300,2457,10180),
(9,2023,3355,7483,4250,5740,938,0);
/*!40000 ALTER TABLE `rbt_total` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbt_voluntary`
--

DROP TABLE IF EXISTS `rbt_voluntary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `rbt_voluntary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `poland` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `canada` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbt_voluntary`
--

LOCK TABLES `rbt_voluntary` WRITE;
/*!40000 ALTER TABLE `rbt_voluntary` DISABLE KEYS */;
INSERT INTO `rbt_voluntary` VALUES
(1,2015,10038,0,321,0,60100,7838,30210),
(2,2016,15286,0,426,0,56300,6987,28474),
(3,2017,9941,0,507,0,40014,7169,20979),
(4,2018,9347,0,450,0,129000,8792,15702),
(5,2019,9072,0,380,0,85576,10588,12574),
(6,2020,7676,0,169,0,48046,0,5009),
(7,2021,7146,995,110,2255,55271,0,7333),
(8,2022,6365,1390,100,2900,61803,0,10710),
(9,2023,4444,525,183,0,76346,0,0),
(10,2024,0,0,0,0,121695,0,0);
/*!40000 ALTER TABLE `rbt_voluntary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `readmittedCitizens`
--

DROP TABLE IF EXISTS `readmittedCitizens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `readmittedCitizens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `reference` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `source_2015` text NOT NULL,
  `year_2016` int(11) NOT NULL,
  `source_2016` text NOT NULL,
  `year_2017` int(11) NOT NULL,
  `source_2017` text NOT NULL,
  `year_2018` int(11) NOT NULL,
  `source_2018` text NOT NULL,
  `year_2019` int(11) NOT NULL,
  `source_2019` text NOT NULL,
  `year_2020` int(11) NOT NULL,
  `source_2020` text NOT NULL,
  `year_2021` int(11) NOT NULL,
  `source_2021` text NOT NULL,
  `year_2022` int(11) NOT NULL,
  `source_2022` text NOT NULL,
  `year_2023` int(11) NOT NULL,
  `source_2023` text NOT NULL,
  `year_2024` int(11) NOT NULL,
  `source_2024` text NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `readmittedCitizens`
--

LOCK TABLES `readmittedCitizens` WRITE;
/*!40000 ALTER TABLE `readmittedCitizens` DISABLE KEYS */;
INSERT INTO `readmittedCitizens` VALUES
(1,'germany','Migrationsbericht, 2021; Destatis, 2023',120713,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',146047,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',166703,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',201531,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',212669,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',191883,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',183650,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',184753,'https://www.bamf.de/SharedDocs/Anlagen/DE/Forschung/Migrationsberichte/migrationsbericht-2022.pdf?__blob=publicationFile&v=17',191356,'https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Wanderungen/Tabellen/wanderungen-nach-staatsangehoerigkeiten-Jahr-03.html',0,'n/a','These numbers include readmitted citizens with late resettlers (Spätaussiedler). The numbers without the late resettlers can be found in the conflicting data.   Spätaussiedler are Germans within the meaning of the Basic Law who live abroad as a German minority and then return to the homeland of their ancestors in order to settle here permanently. (Source: https://www.bmi.bund.de/DE/themen/heimat-integration/gesellschaftlicher-zusammenhalt/kriegsfolgen/spaetaussiedler/spaetaussiedler-node.html) '),
(2,'poland','Border Guards, n.d.',17,'n/a',11,'n/a',101,'n/a',306,'n/a',487,'n/a',510,'n/a',573,'n/a',677,'n/a',682,'n/a (until 30 November)',0,'n/a',''),
(3,'iraq','Personal correspondence, governmental institution, April, 2024',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',286,'n/a',''),
(4,'nigeria','The New Humanitarian, 2020',0,'n/a',0,'n/a',8400,'https://www.thenewhumanitarian.org/news-feature/2020/07/28/Nigeria-migrants-return-Europe',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',0,'n/a',''),
(5,'morocco','IOM Morocco, 2020, 2021, 2022',0,'n/a',1317,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/inline-files/EN_Rapport_Annuel_AVRR_20210518_0.pdf',53,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/inline-files/EN_Rapport_Annuel_AVRR_20210518_0.pdf',130,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/inline-files/EN_Rapport_Annuel_AVRR_20210518_0.pdf',133,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/inline-files/EN_Rapport_Annuel_AVRR_20210518_0.pdf',148,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/inline-files/EN_Rapport_Annuel_AVRR_20210518_0.pdf',125,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/en_rapport_annuel_avrr_.pdf',639,'https://morocco.iom.int/sites/g/files/tmzbdl936/files/documents/2023-03/Rapport_Annuel_FR_AVRR_20230310.pdf',0,'n/a',0,'n/a',''),
(6,'tunisia','Eurostat, 2023',0,'n/a',0,' -1',0,' -1',0,'n/a',0,'n/a',0,'n/a',1345,'https://ec.europa.eu/eurostat/databrowser/explore/all/popul?lang=en&subtheme=migr.migr_man&display=list&sort=category',2215,'https://ec.europa.eu/eurostat/databrowser/explore/all/popul?lang=en&subtheme=migr.migr_man&display=list&sort=category',2515,'https://ec.europa.eu/eurostat/databrowser/explore/all/popul?lang=en&subtheme=migr.migr_man&display=list&sort=category',0,'n/a','');
/*!40000 ALTER TABLE `readmittedCitizens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnSource`
--

DROP TABLE IF EXISTS `returnSource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `returnSource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `sourceTotalOrderReturn` text NOT NULL,
  `sourceReturnDecisionsIrregular` text NOT NULL,
  `sourceReturnNegativeAsylum` text NOT NULL,
  `sourceReturnedFollowingOrder` text NOT NULL,
  `sourceReturnedMinors` text NOT NULL,
  `sourceLeftByCitizenship` text NOT NULL,
  `urlTotalOrderReturn` text NOT NULL,
  `urlReturnDecisionsIrregular` text NOT NULL,
  `urlReturnNegativeAsylum` text NOT NULL,
  `urlReturnedFollowingOrder` text NOT NULL,
  `urlReturnedMinors` text NOT NULL,
  `urlLeftByCitizenship` text NOT NULL,
  `addtionalNote` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnSource`
--

LOCK TABLES `returnSource` WRITE;
/*!40000 ALTER TABLE `returnSource` DISABLE KEYS */;
INSERT INTO `returnSource` VALUES
(1,'germany','Eurostat, 2023','','','Eurostat, 2023','Eurostat, 2023','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIORD/default/table?lang=en','','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN/default/table?lang=en&category=migr.migr_man.migr_eil','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn2/default/table?lang=en','','Eurostat categories:   Third country nationals ordered to leave - annual data (rounded)  Third country nationals returned following an order to leave - annual data (rounded)  Third-country unaccompanied minors returned following an order to leave, by type of return, citizenship, country of destination, age and sex of the minor - quarterly data (rounded)  The number of \'Third country unaccompanied minors returned following an order to leave\' for 2023 only refers to the first three quarters of 2023.'),
(2,'greece','Eurostat, 2023, Accessed: 23-12-2023','','','Eurostat, 2023, Accessed: 23-12-2023','Eurostat, 2023, Accessed: 23-12-2023','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/migr_eiord__custom_8199416/default/table?lang=en','','','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn__custom_8199439/default/table?lang=en','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn2__custom_8199481/default/table?lang=en','https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_vol__custom_8197821/default/table?lang=en','As regards the \'Number of Third country unaccompanied minors returned following an order to leave\':  The number (5) provided for 2023 refers to the first 2 quarters. For 2021 nationalities & types of return are recorded, for 2022-23 such details are not stated.     As regards the \'Number of TCNs/foreign nationals who have left to the territory by citizenship\':  There are disparities (gaps) in the data: for 2021, with \'# TCNs/foreign nationals returned following an order to leave (annual data)\'; for 2020 with other Eurostat Tables (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_ass__custom_8197816/default/table?lang=en), (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_agr/default/table?lang=en), for 2020 (6952)-2021 (6855)-2022 (6985) in other tables (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_agr/default/table?lang=en)'),
(3,'turkey','','','','','','','','','','','','',''),
(4,'canada','','','Dennler, 2022','','','','','','https://refugeelab.ca/wp-content/uploads/2022/11/RS1.pdf','','','','Data concern number of failed asylum applicants that have been effectively returned and not the overall number of return decisions issued upon negative asylum applications.'),
(5,'unitedKingdom','Eurostat, 2023','','','','','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIORD/default/table?lang=en','','','','','','The data displayed here matches the one in \'TCNs found to be illegally present\'.');
/*!40000 ALTER TABLE `returnSource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockOfIrregularAlternative`
--

DROP TABLE IF EXISTS `stockOfIrregularAlternative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockOfIrregularAlternative` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockOfIrregularAlternative`
--

LOCK TABLES `stockOfIrregularAlternative` WRITE;
/*!40000 ALTER TABLE `stockOfIrregularAlternative` DISABLE KEYS */;
INSERT INTO `stockOfIrregularAlternative` VALUES
(1,'greece',911471,204820,68112,93367,123710,0,0,0,0,'For the years 2015-2018 disparities are small. Only in 2019 there is a significant difference in data, as shown above. No available data published online after that year.'),
(2,'poland',16835,23375,28470,31245,30900,12170,12795,10510,16480,''),
(3,'netherlands',0,0,22700,0,0,0,0,0,0,'This is an extrapolation based on POSSION methods, based on period 2017-2018.');
/*!40000 ALTER TABLE `stockOfIrregularAlternative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockOfIrregularMigrants`
--

DROP TABLE IF EXISTS `stockOfIrregularMigrants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockOfIrregularMigrants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `year_2024` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockOfIrregularMigrants`
--

LOCK TABLES `stockOfIrregularMigrants` WRITE;
/*!40000 ALTER TABLE `stockOfIrregularMigrants` DISABLE KEYS */;
INSERT INTO `stockOfIrregularMigrants` VALUES
(1,'germany',376435,370555,156710,134125,133525,117930,120285,198310,0,0,'The exact category from Eurostat is: Third country nationals found to be illegally present - annual data (rounded). Germany itself does not collect data on the number of persons illegally present in Germany.'),
(2,'sweden',1445,1210,2145,1720,2170,2615,2635,2455,0,0,''),
(3,'greece',911470,204820,68110,93365,123025,47295,38015,49060,0,0,'Disparities (gaps) between Eurostat data and official national sources (Hellenic Police), especially for 2019.'),
(4,'poland',12557,18493,22558,26547,26625,9823,6812,7166,10342,0,''),
(5,'netherlands',3150,2760,2120,2790,3565,3640,5010,5510,0,0,''),
(6,'turkey',146485,174466,174752,268003,454662,122302,162996,285027,254008,215023,''),
(7,'jordan',0,0,0,0,0,0,0,0,0,0,'With respect to Syrian refugees and asylum seekers, there are no irregular migrants in Jordan because no Syrians are denied refugee/asylum status by the Government of Jordan (to date).'),
(8,'nigeria',0,37000,0,0,13650,7995,0,0,0,0,''),
(9,'tunisia',0,0,0,0,0,0,0,0,79635,23000,'Until the end of August 2024, 61.000 irregular migrants were prevented to reach the Italian shores by the Tunisian sea guards and navy. Source: https://bit.ly/4dUiRpk & https://bit.ly/3DrGzN7'),
(10,'unitedKingdom',70020,59895,54910,27830,22275,17100,36813,54702,14846,0,'As a result of the difficulty for finding conclusive data on the stock of irregular immigrants due to the very nature of the phenomena under study. The data displayed since 2020 has been gathered from the UK Home Office under the label \'Detected attempts to enter the UK irregularly\' - This data reflects flows and not stock. In addition, 2023 data only reflects information until March.');
/*!40000 ALTER TABLE `stockOfIrregularMigrants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_desicion_for_irregular`
--

DROP TABLE IF EXISTS `tcn_desicion_for_irregular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_desicion_for_irregular` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `tunisia` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_desicion_for_irregular`
--

LOCK TABLES `tcn_desicion_for_irregular` WRITE;
/*!40000 ALTER TABLE `tcn_desicion_for_irregular` DISABLE KEYS */;
INSERT INTO `tcn_desicion_for_irregular` VALUES
(1,2015,21085,0,0),
(2,2016,23636,0,0),
(3,2017,18081,0,0),
(4,2018,17554,6010,0),
(5,2019,16663,6910,0),
(6,2020,13521,4890,0),
(7,2021,12712,4640,0),
(8,2022,11105,6030,1614),
(9,2023,7483,6000,2557),
(10,2024,0,0,4100);
/*!40000 ALTER TABLE `tcn_desicion_for_irregular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_following_order`
--

DROP TABLE IF EXISTS `tcn_following_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_following_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_following_order`
--

LOCK TABLES `tcn_following_order` WRITE;
/*!40000 ALTER TABLE `tcn_following_order` DISABLE KEYS */;
INSERT INTO `tcn_following_order` VALUES
(1,2015,53640,9695,14390,8385),
(2,2016,74080,10160,19055,11890),
(3,2017,44960,6845,18060,8195),
(4,2018,29055,6850,12465,8830),
(5,2019,25140,6425,9650,11055),
(6,2020,12265,4930,6950,8715),
(7,2021,8195,6805,6855,2540),
(8,2022,7725,8615,6985,975);
/*!40000 ALTER TABLE `tcn_following_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_minors`
--

DROP TABLE IF EXISTS `tcn_minors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_minors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_minors`
--

LOCK TABLES `tcn_minors` WRITE;
/*!40000 ALTER TABLE `tcn_minors` DISABLE KEYS */;
INSERT INTO `tcn_minors` VALUES
(1,2015,0,111,0),
(2,2016,0,262,0),
(3,2017,0,261,0),
(4,2018,0,170,0),
(5,2019,0,113,0),
(6,2020,0,47,0),
(7,2021,75,43,15),
(8,2022,110,44,5),
(9,2023,140,33,5);
/*!40000 ALTER TABLE `tcn_minors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_negative_asylum`
--

DROP TABLE IF EXISTS `tcn_negative_asylum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_negative_asylum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `sweden` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `canada` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_negative_asylum`
--

LOCK TABLES `tcn_negative_asylum` WRITE;
/*!40000 ALTER TABLE `tcn_negative_asylum` DISABLE KEYS */;
INSERT INTO `tcn_negative_asylum` VALUES
(1,2015,19940,0,4660),
(2,2016,35310,0,3911),
(3,2017,34927,0,4624),
(4,2018,20761,13000,4096),
(5,2019,14784,15640,6366),
(6,2020,13358,9780,10511),
(7,2021,7552,9200,0),
(8,2022,8045,6590,0),
(9,2023,6901,11670,0);
/*!40000 ALTER TABLE `tcn_negative_asylum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_source`
--

DROP TABLE IF EXISTS `tcn_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_source` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `sourceTotalOrderReturn` text NOT NULL,
  `sourceReturnDecisionsIrregular` text NOT NULL,
  `sourceReturnNegativeAsylum` text NOT NULL,
  `sourceReturnedFollowingOrder` text NOT NULL,
  `sourceReturnedMinors` text NOT NULL,
  `sourceLeftByCitizenship` text NOT NULL,
  `urlTotalOrderReturn` text NOT NULL,
  `urlReturnDecisionsIrregular` text NOT NULL,
  `urlReturnNegativeAsylum` text NOT NULL,
  `urlReturnedFollowingOrder` text NOT NULL,
  `urlReturnedMinors` text NOT NULL,
  `urlLeftByCitizenship` text NOT NULL,
  `addtionalNote` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_source`
--

LOCK TABLES `tcn_source` WRITE;
/*!40000 ALTER TABLE `tcn_source` DISABLE KEYS */;
INSERT INTO `tcn_source` VALUES
(1,'germany','Eurostat, 2023','','','Eurostat, 2023','Eurostat, 2023','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIORD/default/table?lang=en','','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIRTN/default/table?lang=en&category=migr.migr_man.migr_eil','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn2/default/table?lang=en','','Eurostat categories:   Third country nationals ordered to leave - annual data (rounded).  Third country nationals returned following an order to leave - annual data (rounded).  Third-country unaccompanied minors returned following an order to leave, by type of return, citizenship, country of destination, age and sex of the minor - quarterly data (rounded).  The number of \"Third country unaccompanied minors returned following an order to leave\" for 2023 only refers to the first three quarters of 2023.     '),
(2,'sweden','','Swedish Migration Agency, Planeringsavdelningen/Norrköping, Enheten för statistik och analys, email correspondence with Philip Engman, statistician, in September and November 2023 (on file with the authors). ','Swedish Migration Agency, Planeringsavdelningen/Norrköping, Enheten för statistik och analys, email correspondence with Philip Engman, statistician, in September and November 2023 (on file with the authors). ','Eurostat, 2023','Swedish Migration Agency, Planeringsavdelningen/Norrköping, Enheten för statistik och analys, email correspondence with Philip Engman, statistician, in September and November 2023 (on file with the authors). ','','','','','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn$defaultview/default/table','','',''),
(3,'greece','Eurostat, 2023, Accessed: 23-12-2023','','','Eurostat, 2023, Accessed: 23-12-2023','Eurostat, 2023, Accessed: 23-12-2023','Eurostat, 2023, Accessed: 23-12-2023','https://ec.europa.eu/eurostat/databrowser/view/migr_eiord__custom_8199416/default/table?lang=en','','','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn__custom_8199439/default/table?lang=en','https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn2__custom_8199481/default/table?lang=en','https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_vol__custom_8197821/default/table?lang=en','As regards the \"Number of third country unaccompanied minors returned following an order to leave\": The number (5) provided for 2023 refers to the first 2 quarters. For 2021 nationalities & types of return are recorded, for 2022-23 such details are not stated.     As regards the \"Number of TCNs/foreign nationals who have left to the territory by citizenship\": There are disparities (gaps) in the data: for 2021, with \"# TCNs/foreign nationals returned following an order to leave (annual data)\"; for 2020 with other Eurostat Tables (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_ass__custom_8197816/default/table?lang=en), (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_agr/default/table?lang=en), for 2020 (6952)-2021 (6855)-2022 (6985) in other tables (https://ec.europa.eu/eurostat/databrowser/view/migr_eirt_agr/default/table?lang=en)'),
(4,'poland','The Office for Foreigners, n.d.','','','','','','https://www.gov.pl/web/udsc/zestawienia-roczne','','','','','',''),
(5,'netherlands','Eurostat, 2023; for year 2023: (Kerncijfers Asiel & Migratie)','DT&V, 2023','DT&V, 2023','Eurostat, 2023','','','https://ec.europa.eu/eurostat/databrowser/view/migr_eiord/default/table?lang=en','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','https://www.dienstterugkeerenvertrek.nl/over-dtv/cijfers','https://ec.europa.eu/eurostat/databrowser/view/migr_eiord/default/table?lang=en','','','For total number, see table 4 Excel sheet Eurostat irregular stock.'),
(6,'nigeria','Udegbunam, O., Premium Times, September 25, 2020','','','','','','https://www.premiumtimesng.com/news/top-news/416897-nigeria-deports-french-national-10-egyptians-eight-others.html?tztc=1','','','','','','Note for \"foreign nationals ordered to leave\" TOTAL number: Nigeria deports French nationals, 10 Egyptians, eight others. Udegbunam, O., Premium Times, September, 25, 2020).      '),
(7,'tunisia','','Tunisia Press, 2024','','','','','','https://lapresse.tn/2024/07/26/oim-tunisie-rapatriement-volontaire-de-plus-de-4-100-migrants-vers-leurs-pays-dorigine/#:~:text=En%202023%2C%20le%20retour%20volontaire,les%20donn%C3%A9es%20de%20l\'OIM','','','','','These data were gathered from press sources (La Presse du Tunisie) which cites the IOM as a data source (AVRR). '),
(8,'canada','','','Dennler, 2022','','','','','','https://refugeelab.ca/wp-content/uploads/2022/11/RS1.pdf','','','','Data concern number of failed asylum applicants that have been effectively returned and not the overall number of return decisions issued upon negative asylum applications. '),
(9,'united kingdom','Eurostat, 2023','','','','','','https://ec.europa.eu/eurostat/databrowser/view/MIGR_EIORD/default/table?lang=en','','','','','','The data displayed here matches the one in \"TCNs found to be illegally present\". ');
/*!40000 ALTER TABLE `tcn_source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tcn_total`
--

DROP TABLE IF EXISTS `tcn_total`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tcn_total` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `poland` int(11) NOT NULL,
  `netherlands` int(11) NOT NULL,
  `nigeria` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcn_total`
--

LOCK TABLES `tcn_total` WRITE;
/*!40000 ALTER TABLE `tcn_total` DISABLE KEYS */;
INSERT INTO `tcn_total` VALUES
(1,2015,54080,104575,13979,19015,0,70020),
(2,2016,70005,33790,20252,25310,0,59895),
(3,2017,97165,45765,24882,20750,0,54910),
(4,2018,52930,58325,29733,17935,0,21490),
(5,2019,47530,78880,29072,25435,0,22275),
(6,2020,36330,38540,12003,21100,19,0),
(7,2021,31515,28815,10177,17300,0,0),
(8,2022,32865,33500,8412,15740,0,0),
(9,2023,0,0,10467,21400,0,0);
/*!40000 ALTER TABLE `tcn_total` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalOrderToLeave`
--

DROP TABLE IF EXISTS `totalOrderToLeave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalOrderToLeave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `germany` int(11) NOT NULL,
  `greece` int(11) NOT NULL,
  `turkey` int(11) NOT NULL,
  `canada` int(11) NOT NULL,
  `unitedKingdom` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalOrderToLeave`
--

LOCK TABLES `totalOrderToLeave` WRITE;
/*!40000 ALTER TABLE `totalOrderToLeave` DISABLE KEYS */;
INSERT INTO `totalOrderToLeave` VALUES
(1,2015,54080,104575,-1,-1,70020),
(2,2016,70005,33790,-1,-1,59895),
(3,2017,97165,45765,-1,-1,54910),
(4,2018,52930,58325,-1,-1,21490),
(5,2019,47530,78880,-1,-1,22275),
(6,2020,36330,38540,-1,-1,-1),
(7,2021,31515,28815,-1,-1,-1),
(8,2022,32865,33500,-1,-1,-1);
/*!40000 ALTER TABLE `totalOrderToLeave` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tps`
--

DROP TABLE IF EXISTS `tps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` text NOT NULL,
  `year_2015` int(11) NOT NULL,
  `year_2016` int(11) NOT NULL,
  `year_2017` int(11) NOT NULL,
  `year_2018` int(11) NOT NULL,
  `year_2019` int(11) NOT NULL,
  `year_2020` int(11) NOT NULL,
  `year_2021` int(11) NOT NULL,
  `year_2022` int(11) NOT NULL,
  `year_2023` int(11) NOT NULL,
  `year_2024` int(11) NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tps`
--

LOCK TABLES `tps` WRITE;
/*!40000 ALTER TABLE `tps` DISABLE KEYS */;
INSERT INTO `tps` VALUES
(1,'poland',0,0,0,0,0,0,0,1640510,0,0,'Refugee groups under TPS: Ukrainian Citizens'),
(2,'turkey',2503549,2834441,3426786,3623192,3576370,3641370,3737369,3535898,3214780,2933205,'Refugee groups under TPS: Syrians under Temporary Protection'),
(3,'iraq',244642,230836,247057,252526,245810,242163,254561,258541,0,0,'Refugee groups under TPS: Syrian Refugees that registered by the international organizations system.');
/*!40000 ALTER TABLE `tps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-07 15:35:22
