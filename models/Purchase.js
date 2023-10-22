const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Purchase extends Model { }

Purchase.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'purchase'
    }
);

module.exports = Purchase;
