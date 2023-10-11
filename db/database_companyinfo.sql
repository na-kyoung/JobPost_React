-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        5.7.42-log - MySQL Community Server (GPL)
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- reactdb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `reactdb` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `reactdb`;

-- 테이블 reactdb.companyinfo 구조 내보내기
CREATE TABLE IF NOT EXISTS `companyinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logo` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `job` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `isDeleted` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 테이블 데이터 reactdb.companyinfo:~5 rows (대략적) 내보내기
DELETE FROM `companyinfo`;
INSERT INTO `companyinfo` (`id`, `logo`, `name`, `num`, `job`, `date`, `isDeleted`) VALUES
	(1, '/img/toss.png', '토스', 20, '백엔드 개발자', '2023-12-31', 0),
	(2, '/img/lg.png', 'LG CNS', 30, 'SI 개발자', '2023-11-30', 0),
	(3, '/img/Kakao.jpg', '카카오', 10, '백엔드 개발자', '2023-10-15', 0),
	(4, '/img/samsung.png', '삼성 SDS', 5, 'SI 개발자', '2023-09-30', 0),
	(5, '/img/naver.jpg', '네이버', 20, '프론트엔드 개발자', '2023-11-30', 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
