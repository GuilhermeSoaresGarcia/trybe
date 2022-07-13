-- DROP DATABASE livraria;

-- CREATE DATABASE livraria;

-- CREATE TABLE livraria.livros (

-- 	id INT PRIMARY KEY AUTO_INCREMENT,

--   	titulo VARCHAR(50) NOT NULL,

--   	paginas INT,

--   	ano_lancamento INT,

--   	vendas INT

-- );

-- INSERT INTO livraria.livros (titulo, paginas, ano_lancamento, vendas) VALUES

-- ('Livro #01', 100, 2022, 153),

-- ('Metamorfose', 125, 1980, 500),

-- ('Livro #02', NULL, 1999, 357),

-- ('Harry Potter', 857, 2002, 854),

-- ('O Cortiço', 159, 1985, 254);

-- 1 - todos os livros cadastrados na livraria

SELECT * FROM livraria.livros;

-- 2 - quantidade de livros cadastrados

SELECT COUNT(*) FROM livraria.livros;

-- 3 - retornar todos os livros ordenados por nº de paginas de forma decrescente

SELECT * FROM livraria.livros ORDER BY paginas DESC;

-- 4 - lista dos 3 livros mais vendidos

SELECT * FROM livraria.livros ORDER BY vendas DESC LIMIT 3;

-- 5 - retornar 3 livros ignorado os 2 primeiros resultados

SELECT * FROM livraria.livros LIMIT 3 OFFSET 2;

-- (bônus) retornar somente os livros que contenham o número de páginas cadastrado.

SELECT *
FROM livraria.livros
WHERE
    paginas NOT LIKE ''
    OR paginas > 0
    OR paginas IS NOT NULL;

-- retornar somente nomes repetidos (sakila)
SELECT CONCAT(first_name,' ', last_name) AS full_name, COUNT(*) FROM sakila.actor
GROUP BY first_name, last_name
HAVING COUNT(last_name) > 1;