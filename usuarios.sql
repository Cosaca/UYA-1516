CREATE TABLE usuarios (
  Modelo VARCHAR(20) NOT NULL,
  Conductor VARCHAR(20) NOT NULL PRIMARY KEY,
  Antigüedad INT NOT NULL,
  Rutina_viajes VARCHAR(45) NOT NULL,
  Otros_viajeros VARCHAR(45) NOT NULL,
  Zonas_de_accion VARCHAR(45) NOT NULL
);

INSERT INTO usuarios VALUES('Honda Civic', 'Marcelo Díaz', 17, 'Madrid-Barcelona', 'Manuel Cortés', 'Centro Madrid-Puerta del Sol');

INSERT INTO usuarios VALUES('Alfa Romeo', 'Miguel Frías', 4, 'León-Burgos', 'Jesús Santana', 'Noroeste de la Península Ibérica');

INSERT INTO usuarios VALUES('Dacia Sandero', 'Lidia Fernández', 20, 'La Laguna-Los Cristianos', 'Marta Lozano', 'Zona Norte de Tenerife');

CREATE TABLE registros (
  Nombre VARCHAR(25) NOT NULL PRIMARY KEY,
  Apellidos VARCHAR(50) NOT NULL,
  Correo VARCHAR(50) NOT NULL,
  Comentarios_adicionales VARCHAR(250) NOT NULL
);


