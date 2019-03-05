SET FOREIGN_KEY_CHECKS=0;
DROP TABLE if exists member;
DROP TABLE if exists baf_event;
DROP TABLE if exists registration;
DROP TABLE if exists event_type;
DROP TABLE if exists user_role;
DROP TABLE if exists user_credentials;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE member (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    address VARCHAR(50),
    gender VARCHAR(1),
    birthdate TIMESTAMP,
    sa_id_number VARCHAR(30) NOT NULL,
    baf_id VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE event_type (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	description VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE baf_event (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	date TIMESTAMP,
	type_id INT UNSIGNED not null,
     FOREIGN KEY fk_event_type (type_id)
	REFERENCES event_type(id)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE registration (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    event_id INT UNSIGNED not null,
    FOREIGN KEY fk_event (event_id)
	REFERENCES baf_event(id)
	ON UPDATE CASCADE
	ON DELETE RESTRICT,
    member_id INT UNSIGNED not null,
     FOREIGN KEY fk_member (member_id)
	REFERENCES member(id)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE user_role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE user_credentials (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(30) NOT NULL,
    pass VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED not null,
     FOREIGN KEY user_role (role_id)
	REFERENCES user_role(id)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
) ENGINE=InnoDB;
