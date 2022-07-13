-- tabela staff do banco de dados sakila
SELECT * FROM sakila.staff;
-- Quantas senhas temos cadastradas nessa tabela?
SELECT count(password) FROM sakila.staff;
-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT count(first_name) FROM sakila.staff WHERE active = 1;
-- Quantos emails temos cadastrados nessa tabela?
SELECT count(email) FROM sakila.staff;
