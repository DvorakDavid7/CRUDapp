CREATE DATABASE CrudAppDb;

GRANT ALL PRIVILEGES ON CrudAppDb.* TO 'user'@'localhost';

USE CrudAppDb;


CREATE TABLE Customers(
    id int NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(60) NOT NULL,
    Email VARCHAR(70) NOT NULL,
    Phone VARCHAR(40) NOT NULL,
    Location VARCHAR(128) NOT NULL,
    Project VARCHAR(128) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Customers VALUE(
    NULL, "David", "Dvořák", "dvorakdavid7@gmail.com", "722160685", "Praha", "CRUD app BE"
);

INSERT INTO Customers VALUE(
    NULL, "Jaroslav", "Procházka", "projaroslav@gmail.com", "785236521", "Praha", "CRUD app FE"
);

SELECT * FROM Customers;
