# Création de la bdd 
CREATE DATABASE IF NOT EXISTS plan_vol;

#Selection de la base de données
USE plan_vol;

# Création de la table pilotes
CREATE TABLE IF NOT EXISTS pilotes
(
id_pilote INT NOT NULL AUTO_INCREMENT,
nom VARCHAR(100) NOT NULL,
prenom VARCHAR(100) NOT NULL,
adresse VARCHAR(100) NOT NULL,
PRIMARY KEY (id_pilote)
)
ENGINE=INNODB;

#Création de la table avions
CREATE TABLE IF NOT EXISTS avions
(
id_avion INT NOT NULL AUTO_INCREMENT,
fabricant varchar(100) NOT NULL,
modele varchar(100) not null,
nom varchar(100) not null,
localite varchar(100) not null,
capacite int not null,
PRIMARY KEY (id_avion)
)
ENGINE = INNODB;




#Création de la table vols
CREATE TABLE IF NOT EXISTS vols
(
numero_vol INT not null AUTO_INCREMENT,
id_pilote int not null,
id_avion int not null,
FOREIGN KEY (id_pilote) REFERENCES pilotes(id_pilote),
FOREIGN KEY (id_avion) REFERENCES avions(id_avion),
ville_depart varchar(100) NOT NULL,
ville_arrivee varchar(100) NOT NULL,
heure_depart datetime,
heure_arrivee datetime,
PRIMARY KEY (numero_vol)
)
ENGINE=INNODB;

#Insérer les valeurs
INSERT into avions(fabricant,modele,capacite,localite) values 
    ("Boeing","787",300,"Nairobi"),
    ("Boeing","737",250,"Sidney"),
    ("Airbus","320",220,"Milan"),
    ("Avic","250",150,"Pékin");

#Afficher tous les avions
SELECT * FROM avions;

#Afficher tous les avions par ordre croissant sur le fabricant
SELECT * FROM avions ORDER BY fabricant asc;

#Afficher les noms et les capacités des avions
SELECT modele,capacite from avions;

#Afficher les localités des avions sans redondance
SELECT distinct(localite) FROM avions;

#Afficher les avions dans la localité et NAIROBI ou MILAN
SELECT * FROM avions WHERE localite = "Nairobi" OR localite="Milan";

#Modifier la capacité de l’avion numéro 3, la nouvelle capacité et 400
UPDATE avions SET capacite = 400 WHERE id_avion = 3;

#Supprimer les avions dans la capacité et inférieure à 200
DELETE FROM avions WHERE capacite < 200;

#Afficher la capacité maximale, minimale, moyenne des avions
SELECT MAX(capacite),MIN(capacite),AVG(capacite) FROM avions;

#Afficher les données des avions dont la capacité et la plus basse
SELECT id_avion,fabricant,modele,localite,MIN(capacite) FROM avions; 

#Afficher les données des avions dont la capacité et supérieure à la capacité moyenne
SELECT * from avions where capacite > (select AVG(capacite) from avions);

#Insérer donnée dans pilotes
INSERT into pilotes(nom,prenom,adresse) values
("Henon","Raphael","En ville"),
("Cheddadi","Jihane","Sautron"),
("Menu","Charlotte","A la campagne");

#Insérer données dans vols
Insert into vols(id_pilote,id_avion,ville_depart,ville_arrivee) values
(3,1,"Paris","Madrid"),
(1,2,"Strasbourg","Hong-Kong"),
(2,3,"Nantes","Paris"),
(1,3,"New-York","Madrid");

#Afficher le nom et l’adresse des pilotes assurant les vols IT100 et IT104
SELECT nom,adresse FROM pilotes INNER JOIN vols on pilotes.id_pilote = vols.id_pilote WHERE numero_vol = 1 OR numero_vol = 4;

#Afficher les noms des pilotes qui conduisent un AIRBUS
SELECT nom from vols inner join avions on vols.id_avion = avions.id_avion inner join pilotes on vols.id_pilote = pilotes.id_pilote where fabricant = 'Airbus';