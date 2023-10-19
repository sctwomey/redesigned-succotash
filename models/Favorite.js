const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model { }

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condition_new: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite'
    }
);

module.exports = Favorite;