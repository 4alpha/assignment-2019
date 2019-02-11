CREATE TABLE IF NOT EXISTS admin (
fname varchar(10) NOT NULL, 
lname varchar(10) NOT NULL,
dp varchar(30),
gender varchar(11),
agegroup varchar(20),
email varchar(30) NOT NULL,
contact varchar(15) NOT NULL, 
pword varchar(20) NOT NULL, 
PRIMARY KEY (email)
);

INSERT INTO admin (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Admin', 'Portal', 'uploads/admin.jpg','Male', 'Teenager (13 to 19)', 'admin@gmail.com','8888812345','admin');

CREATE TABLE IF NOT EXISTS user (
fname varchar(20) NOT NULL, 
lname varchar(20) NOT NULL,
dp varchar(30),
gender varchar(11),
agegroup varchar(20),
email varchar(30) NOT NULL,
contact varchar(15) NOT NULL,
pword varchar(30) NOT NULL, 
PRIMARY KEY (email)
);

INSERT INTO user (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Shripad', 'Kshirsagar', 'uploads/shripad.jpg','Male', 'Adult (20 to 50)', 'shripad000@gmail.com','8625010244','abc123');

INSERT INTO user (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Vivek', 'Patil', 'uploads/vp.jpg','Male', 'Teenager (13 to 19)', 'vivekpatil@gmail.com','9988776655','xyz123');
