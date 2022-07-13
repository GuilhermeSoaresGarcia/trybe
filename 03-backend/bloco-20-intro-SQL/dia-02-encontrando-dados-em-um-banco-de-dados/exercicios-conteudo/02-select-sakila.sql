-- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:
USE sakila;
-- Escreva uma query que selecione todas as colunas da tabela city;
SELECT * FROM city;
-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM customer;
-- Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * FROM rental;
-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM film;
-- Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM actor, address, category, city, country, customer, film, film_actor, film_category, film_text, inventory, language, payment, rental, staff, store;
