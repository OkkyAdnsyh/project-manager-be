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
    await queryInterface.createTable('Tokens', {
      id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },
      userId : {
        type : Sequelize.DataTypes.STRING,
      },
      accessToken : {
        type : Sequelize.DataTypes.STRING
      },
      refreshToken : {
        type : Sequelize.DataTypes.UUID,
        defaultValue : Sequelize.DataTypes.UUIDV4
      },
      role : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
        defaultValue : "client"
      },
      expiryDate : {
        type : Sequelize.DataTypes.DATE
      },
      createdAt : {
        type : Sequelize.DataTypes.DATE,
        defaultValue : Sequelize.DataTypes.NOW
      },
      updatedAt : {
        type : Sequelize.DataTypes.DATE,
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
    await queryInterface.dropTable('Tokens');
  }
};
