create table Product
(
	id NUMBER NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	primary key(id)
);