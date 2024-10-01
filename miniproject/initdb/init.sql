-- init.sql
CREATE DATABASE IF NOT EXISTS docker_bmi_db;

CREATE USER 'tejas'@'%' IDENTIFIED BY 'mailpass';
GRANT ALL PRIVILEGES ON docker_bmi_db.* TO 'tejas'@'%';
FLUSH PRIVILEGES;