import {Sequelize} from "sequelize";
 
const db = new Sequelize('db_peka','root','uis123',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
 