CREATE DATABASE node_crud;

USE node_crud;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    numero_cuenta VARCHAR(20) NOT NULL,
    escuela ENUM('Fes Aragón', 'Fes Zaragoza', 'Fes Iztacala') NOT NULL
);