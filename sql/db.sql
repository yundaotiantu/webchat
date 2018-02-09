DROP DATABASE IF EXISTS db;
CREATE DATABASE db CHARSET SET utf8;

DROP TABLE IF EXISTS db.chat;
CREATE TABLE db.chat(
    id INT AUTO_INCREMENT PRIMARY KEY  COMMENT 'id pk',
    question TEXT NOT NULL COMMENT '问题',
    answer TEXT not null COMMENT '回答'
) COMMENT '聊天表';

INSERT INTO db.chat VALUES(null,'你好','你好');
INSERT INTO db.chat VALUES(null,'你是谁？','我是聊天机器人');
INSERT INTO db.chat VALUES(null,'再见','再见');