-- Ovako se pišu komentari


-- Zamjeniti db_a98acf_wp7 s imenom svoje baze

SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_ab6dab_ribe SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_ab6dab_ribe COLLATE Latin1_General_100_CI_AI_SC_UTF8;
GO
ALTER DATABASE db_ab6dab_ribe SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO

create table ribe(
sifra int not null primary key identity(1,1), -- ovo je primarni kljuè
naziv varchar(50) not null
);



-- 1 (Ovo je šifra koju je dodjelila baza)
insert into ribe 
(naziv) values
('Pastrva');

insert into ribe(naziv) values
-- 2
('Štuka');
