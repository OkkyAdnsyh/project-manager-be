const db = require('./index');
const {sequelize, Sequelize} = db

const userModel = sequelize.define('Users', {
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
    role : {
      type : Sequelize.DataTypes.STRING,
      allowNull : false,
      defaultValue : "client"
    }
}, {freezeTableName : true});

module.exports = userModel;