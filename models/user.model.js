const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, null, {
  host : process.env.DB_HOST,
  dialect : 'mysql'
})


const userModel = sequelize.define('User', {
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
});

module.exports = userModel;