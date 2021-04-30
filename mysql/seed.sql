USE desafio02;
CREATE TABLE people (
    id int not null auto_increment,
    name varchar(120),
    primary key (id)
);

INSERT INTO people (id, name)
VALUES 
('', 'Alisson'),
('', 'Luis'),
('', 'Wesley')