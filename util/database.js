const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_project_1', 'root', 'B#5266@belal', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;