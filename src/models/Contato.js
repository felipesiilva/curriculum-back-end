const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = Contato;