const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model { }

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: {
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
        book_price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        book_isbn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        book_genre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        book_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        book_inventory: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Inventory;