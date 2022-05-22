import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const ComentarioModel = db.define('comentarios',{
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
    comentario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
