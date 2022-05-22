import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const CurriculoModel = db.define('curriculos',{
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
    idade: {
        type: DataTypes.INTEGER,
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
    experiencia1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    experiencia2: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
