const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const TaskdonData = sequelize.define('taskdone', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    Name: Sequelize.STRING,
    Descript: Sequelize.STRING
});
module.exports = TaskdonData;
