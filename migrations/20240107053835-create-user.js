'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Users', {
      id : {
        type : Sequelize.DataTypes.UUID,
        primaryKey : true,
        defaultValue : Sequelize.DataTypes.UUIDV4
      },
      username : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true
      },
      email : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true
      },
      password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true
      },
      createdAt : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
        defaultValue : Sequelize.DataTypes.NOW,
      },
      updatedAt : {
        type : Sequelize.DataTypes.DATE,
        allowNull : true,
        defaultValue : Sequelize.DataTypes.NOW
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
    await queryInterface.dropTable('Users');
  }
};
