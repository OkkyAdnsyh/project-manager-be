const db = require('./index');
const {sequelize, Sequelize} = db

const userModel = sequelize.define();

module.exports = userModel;