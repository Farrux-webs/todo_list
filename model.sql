CREATE DATABASE exam3;

\c exam3;

CREATE TYPE todo_status AS ENUM('fulfilled', 'inprogress', '');

CREATE TABLE todoList(
    todo_id SERIAL PRIMARY KEY NOT NULL,
    todo_title VARCHAR(128) NOT NULL,
    todo_text text NOT NULL,
    created_at date NOT NULL,
    is_done todo_status  DEFAULT '' NOT NULL
)

INSERT INTO todoList(todo_title, todo_text, created_at)VALUES('Najot Talim', 'Najot Talimda backend kurslari', Current_date);