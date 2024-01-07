const db = require('./index');
const {sequelize, Sequelize} = db;

const projectModel = sequelize.define();

module.exports = projectModel;