const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_phone: {
            type: DataType.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = User;
