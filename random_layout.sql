/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : auto_chess

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-05-31 17:23:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for random_layout
-- ----------------------------
DROP TABLE IF EXISTS `random_layout`;
CREATE TABLE `random_layout` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `npc_count` int(11) NOT NULL DEFAULT '0',
  `total_cost` int(11) NOT NULL DEFAULT '0',
  `layout_str` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
