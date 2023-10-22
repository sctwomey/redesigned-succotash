const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model { }

Book.init(
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
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isbn_10: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        series: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condition_new: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;
