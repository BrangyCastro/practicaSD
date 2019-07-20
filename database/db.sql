-- to create a new database
CREATE DATABASE practicaSD;

-- to use database
use practicaSD;

-- creating a new table
CREATE TABLE cliente (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

CREATE TABLE usuario (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) NOT NULL,
  clave VARCHAR(50) NOT NULL,
  nombres VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe cliente;
describe usuario;


