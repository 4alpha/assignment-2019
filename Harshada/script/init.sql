CREATE TABLE IF NOT EXISTS admin(username varchar(20) NOT NULL,password varchar(20) NOT NULL);

INSERT INTO admin (username, password) VALUES('admin', 'admin'); 

CREATE TABLE IF NOT EXISTS passport (
	email varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	application_for varchar(20),
	type_of_application varchar(10),
	booklet varchar(20) NOT NULL,
	name varchar(20) NOT NULL,
	surname varchar(20),
	picture varchar(100) NOT NULL,
	gender varchar(10) NOT NULL,
	place varchar(10) NOT NULL,
	birth_date date NOT NULL,
	pan varchar(10) NOT NULL,
	address varchar(50) NOT NULL,
	mobile_no varchar(10) NOT NULL);

