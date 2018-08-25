/* food_db CREATION AND SETUP */
/* ======================================= */ 

DROP DATABASE IF EXISTS food_db; 
CREATE DATABASE food_db; 

USE food_db; 

CREATE TABLE food 
(
	id int NOT NULL AUTO_INCREMENT, 
	food_name VARCHAR(225) NOT NULL, 
	devoured BOOLEAN DEFAULT false, 
	PRIMARY KEY (id)
); 

/* ======================================= */ 
