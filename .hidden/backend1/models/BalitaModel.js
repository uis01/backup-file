import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Balita = db.define('tb_balita', {
    id_balita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nama: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    nik: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    birth_location: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    blood_type: {
        type: DataTypes.STRING(3),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Balita;
 


(async()=>{
    await db.sync();
})();