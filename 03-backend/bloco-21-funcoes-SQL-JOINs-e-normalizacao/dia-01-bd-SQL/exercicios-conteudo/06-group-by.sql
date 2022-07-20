-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT
    IF (active = 0, 'Inativos', 'Ativos') AS 'Situação',
    COUNT(active) AS 'Quantidade'
FROM customer
GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes
-- (ativos ou inativos) e a quantidade de clientes por status.
SELECT
    store_id AS 'Loja',
    IF (active = 0, 'Inativos', 'Ativos') AS 'Situação',
    COUNT(active) AS 'Quantidade'
FROM customer
GROUP BY active, store_id
ORDER BY store_id, Situação;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados
-- pela classificação indicativa e ordenados da maior média para a menor.
SELECT
    rating,
    AVG(rental_duration) AS rental_media
FROM film
GROUP BY rating
ORDER BY rental_media DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele.
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT
    district,
    COUNT(`address`) AS Quant
FROM `address`
GROUP BY district
ORDER BY Quant DESC;