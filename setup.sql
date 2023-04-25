-- create the databases
CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

-- create the users for each database
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO people (name) VALUES ('Shazam!');
INSERT INTO people (name) VALUES ('Wesley!');
INSERT INTO people (name) VALUES ('Deivid Cardoso!');
INSERT INTO people (name) VALUES ('Maria!');
