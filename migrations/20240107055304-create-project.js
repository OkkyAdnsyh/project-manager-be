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
    await queryInterface.createTable('Projects', {
      projectUID : {
        type : Sequelize.DataTypes.UUID,
        defaultValue : Sequelize.DataTypes.UUIDV4,
        primaryKey : true
      },
      userID : {
        type : Sequelize.DataTypes.UUID,
        allowNull : false,
      },
      name : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
      },
      projectType : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
      },
      preference : {
        type : Sequelize.DataTypes.JSON
      },
      deadline : {
        type : Sequelize.DataTypes.DATEONLY,
      },
      initialBudget : {
        type : Sequelize.DataTypes.INTEGER
      },
      acceptedBudget : {
        type : Sequelize.DataTypes.INTEGER
      },
      reviewStatus : {
        type : Sequelize.DataTypes.BOOLEAN,
        defaultValue : false
      },
      projectHandlerID : {
        type : Sequelize.DataTypes.UUID
      },
      projectStatus : {
        type : Sequelize.DataTypes.STRING,
        defaultValue : "Unreviewed"
      },
      paymentStatus : {
        type : Sequelize.DataTypes.BOOLEAN
      },
      reviewAt : {
        type : Sequelize.DataTypes.DATEONLY
      },
      closedAt : {
        type : Sequelize.DataTypes.DATEONLY
      },
      createdAt : {
        type : Sequelize.DataTypes.DATE,
        defaultValue : Sequelize.DataTypes.DATENOW,
      },
      updatedAt : {
        type : Sequelize.DataTypes.DATE,
        defaultValue : Sequelize.DataTypes.DATENOW,
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
    await queryInterface.dropTable('Projects');
  }
};
