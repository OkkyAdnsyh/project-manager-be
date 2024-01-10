const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host : process.env.DB_HOST,
  dialect : 'mysql'
})


const tokenModel = sequelize.define('Token', {
    id : {
      type : Sequelize.DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    userId : {
      type : Sequelize.DataTypes.UUID,
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
    }
});

module.exports = tokenModel;