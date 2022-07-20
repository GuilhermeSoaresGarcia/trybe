-- Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna
-- gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
--    SELECT rating, AVG(length)
--    FROM sakila.film
--    GROUP BY rating;
SELECT
    rating,
    AVG(length) AS Dur_Media
FROM sakila.film
GROUP BY rating
HAVING
    Dur_Media BETWEEN 115. AND 121.50
ORDER BY Dur_Media DESC;

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost),
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
--    SELECT rating, SUM(replacement_cost)
--    FROM sakila.film
--    GROUP by rating;
SELECT
    rating,
    SUM(replacement_cost) AS Sum_replace
FROM sakila.film
GROUP by rating
HAVING Sum_replace > 3950.50
ORDER BY Sum_replace;