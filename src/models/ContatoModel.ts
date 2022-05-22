import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const ContatoModel = db.define('contatos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
