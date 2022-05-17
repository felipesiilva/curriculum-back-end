'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contato', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          varchar: 100,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          varchar: 100,
        },
        telefone: {
          type: Sequelize.STRING,
          varchar: 11,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      
      
      });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
