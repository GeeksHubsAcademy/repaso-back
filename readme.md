<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>

# Quick start

## Run the backend
- Convert .env.example to .env

- npm install

- npx nodemon app.js

## DB

- sequelize db:create
- sequelize db:migrate

- sequelize db:seed:all

importante: cambiar la configuración de MySQL para permitir mayor max_allowed_packet en my.ini
en windows es: C:\xampp\mysql\bin\my.ini 

sino desde el terminal de MySQL
mysql -u root
seteamos:
set global max_allowed_packet=1000000000;


## Notes

npm init -y
npm install express mysql2 sequelize
//create app.js
sequelize init
//make sure that config.json contains the correct auth config for your mysql service
sequelize model:generate --name Movie --attributes title:string,poster_path:string,overview:text,release_date:date,vote_average:float
//This instruction will create the Movie model & migration code

sequelize migration:generate --name add-unique-constraint-to-user

