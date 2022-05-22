import { Sequelize } from "sequelize";

export const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        dialect: 'mysql', //tipo de banco
        host: process.env.DB_HOST, //endereço do banco
        port: +process.env.DB_PORT, // endereço da porta
    }
);