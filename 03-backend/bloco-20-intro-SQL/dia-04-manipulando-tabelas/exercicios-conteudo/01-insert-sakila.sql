-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique 
-- quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!

-- Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, `password`)
VALUES ('Guilherme', 'Garcia', 1, 'guilherme.garcia@email.com', 1, 0, 'guidje', '123456');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES 
('Funcionario', 'Quatro', 4, 1, 0, 'quatro'),
('Employee', 'Five', 5, 2, 1, 'five');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (`name`)
VALUES 
('Categoria 1'),
('Categoria 2'),
('Categoria 3');
SELECT * FROM category;

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id)
VALUES (4, 3);
SHOW COLUMNS FROM store;
