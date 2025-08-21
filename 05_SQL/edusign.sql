
DROP TABLE IF EXISTS edusign;
DROP TABLE IF EXISTS users;

CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    sign_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');



SELECT * FROM users;

SELECT * FROM users
WHERE firstname = 'Ada';

SELECT * FROM users
WHERE firstname LIKE 'B%';

SELECT COUNT(*) AS total_users
FROM users;

SELECT COUNT(*) AS users_with_b
FROM users
WHERE firstname LIKE 'B%';

SELECT firstname 
FROM users;



INSERT INTO edusign (user_id, sign_at)
SELECT user_id, '2024-05-30 09:30:00'
FROM users
WHERE firstname = 'Ada'
LIMIT 1;

INSERT INTO edusign (user_id, sign_at)
SELECT user_id, '2024-05-30 09:30:00'
FROM users
WHERE firstname = 'Bella'
LIMIT 1;

INSERT INTO edusign (user_id, sign_at)
SELECT user_id, '2024-05-30 09:30:00'
FROM users;

SELECT id, user_id, sign_at
FROM edusign
ORDER by sign_at DESC, user_id ASC;

