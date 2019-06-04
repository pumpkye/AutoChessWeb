/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost
 Source Database       : auto_chess

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : utf-8

 Date: 05/14/2019 23:38:46 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `npc`
-- ----------------------------
DROP TABLE IF EXISTS `npc`;
CREATE TABLE `npc` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level1_rate` float DEFAULT NULL COMMENT '1级时的胜率',
  `level2_rate` float DEFAULT NULL COMMENT '2级时的胜率',
  `level3_rate` float DEFAULT NULL COMMENT '3级时的胜率',
  `quality_rate` varchar(255) DEFAULT NULL COMMENT '在同品质中的胜率',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='同等级npc的强度';

SET FOREIGN_KEY_CHECKS = 1;
