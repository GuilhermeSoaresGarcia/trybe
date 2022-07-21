-- 1) Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT
    a.actor_id,
    a.first_name,
    a.last_name,
    fa.film_id
FROM actor a
    INNER JOIN film_actor fa ON a.actor_id = fa.actor_id;

-- 2) Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT
    s.first_name,
    s.last_name,
    a.address
FROM staff s
    INNER JOIN `address` a ON s.address_id = a.address_id;

-- 3) Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da
-- rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name),
    c.email,
    a.address_id,
    TRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.address, '0', ''),'1',''),'2',''),'3',''),'4',''),'5',''),'6',''),'7',''),'8',''),'9','')) 
    AS 'Nome da rua' --QUE COISA MAIS LINDA!! XD
FROM customer c
    INNER JOIN `address` a ON c.address_id = a.address_id
ORDER BY c.first_name
LIMIT 100;

-- 4) Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações
-- podem ser encontradas nas tabelas address e customer.
SELECT CONCAT(first_name, ' ', last_name) AS `Name`, email, a.address_id, `address`, district FROM customer c
INNER JOIN `address` a ON c.address_id = a.address_id
WHERE district = 'California' AND
first_name LIKE '%rene%';

-- 5) Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos.
-- As informações podem ser encontradas na tabela address e customer.
SELECT c.first_name, COUNT(a.address) FROM customer c
INNER JOIN `address` a ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

-- 6) Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff.
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT first_name, last_name, AVG(amount) FROM staff s
INNER JOIN payment p ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY first_name, last_name;

-- 7) Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de
-- um JOIN na mesma query.
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name), f.film_id, f.title FROM actor a
INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
INNER JOIN film f ON fa.film_id = f.film_id;