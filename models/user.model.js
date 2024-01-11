const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, null, {
  host : process.env.DB_HOST,
  dialect : 'mysql'
})


const userModel = sequelize.define('User', {
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
});

module.exports = userModel;