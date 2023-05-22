const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserData = sequelize.define('userdata', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    Name: Sequelize.STRING,
    Descript: Sequelize.STRING
});
module.exports = UserData;
