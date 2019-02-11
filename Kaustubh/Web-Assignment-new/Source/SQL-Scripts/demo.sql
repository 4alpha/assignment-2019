CREATE TABLE IF NOT EXISTS admin(admin_id int(11) PRIMARY KEY NOT NULL,admin_name varchar(255),admin_pass varchar(255),admin_address varchar(255));

INSERT INTO admin (admin_id,admin_name,admin_pass,admin_address) VALUES(1211,'kaustubh','pass','Pune'); 

CREATE TABLE IF NOT EXISTS USERS (
        ID int(11) AUTO_INCREMENT PRIMARY KEY,
        fname varchar(255) NOT NULL,            
        sname varchar(255) NOT NULL,
        email varchar(50) NOT NULL,
        gender varchar(6) NOT NULL,
        pass varchar(30) NOT NULL);
CREATE TABLE IF NOT EXISTS USERS_ADDRESS (
        ID int(11) AUTO_INCREMENT PRIMARY KEY,
        addr varchar(255) NOT NULL,            
        city varchar(20) NOT NULL,
        stat varchar(20) NOT NULL,
        country varchar(20) NOT NULL,
        uid int(11) NOT NULL, FOREIGN KEY(uid) REFERENCES USERS(ID))
