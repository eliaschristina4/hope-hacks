CREATE DATABASE user_saves;
USE user_saves;

CREATE TABLE saves (
	id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(500),
    date_added DATETIME
);
