DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN
created_at TIMESTAMP NOT NULL
PRIMARY KEY(id)
);
