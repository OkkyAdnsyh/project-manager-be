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
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
      },
      uuid : {
        type : Sequelize.DataTypes.UUID,
        allowNull : false,
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
      accessToken : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true
      },
      refreshToken : {
        type : Sequelize.DataTypes.STRING,
        allowNull : true
      },
      role : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
        defaultValue : "client"
      },
      createdAt : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
        defaultValue : Sequelize.DataTypes.DATENOW,
      },
      updatedAt : {
        type : Sequelize.DataTypes.DATE,
        allowNull : true,
        defaultValue : Sequelize.DataTypes.DATENOW
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
