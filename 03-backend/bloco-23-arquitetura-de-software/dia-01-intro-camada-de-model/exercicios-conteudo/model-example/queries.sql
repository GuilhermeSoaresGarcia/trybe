SELECT
    id,
    first_name,
    middle_name,
    last_name
FROM model_example.authors;

INSERT INTO model_example.authors (first_name, middle_name, last_name, birthday, nationality)
VALUES 
('Machado', NULL, 'de Assis', '1839-06-21', 'brasileiro'),
('George', NULL, 'Orwell', '1903-06-25', 'britânico'),
('Gabriel', 'Garcia', 'Marques', '1927-03-06', 'colombiano'),
('Franz', NULL, 'Kafka', '1883-07-03', 'tcheco'),
('Neil', NULL,'Gaiman','1960-11-10','britânico');