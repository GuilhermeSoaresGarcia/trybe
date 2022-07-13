-- Monte uma query que exiba seu nome na tela;
SELECT 'Guilherme';
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Guilherme', 'Soares Garcia', 'Porto Alegre' , 37;
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'Guilherme' AS nome, 'Soares Garcia' AS sobrenome, 'Porto Alegre' AS cidade_natal, 37 AS idade;
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "data_atual".
SELECT now() AS data_atual;
