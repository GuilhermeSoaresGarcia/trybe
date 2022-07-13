-- Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome lançamento_do_filme.
SELECT concat(title, ' - ', release_year) AS lançamento_do_filme FROM film;
-- Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome classificação. 
-- Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT concat(title, ' - ', rating) AS classificação FROM film;
-- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome endereço.
SELECT concat(address, ', ', district) AS endereço FROM address;
