const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPurchase extends Model { }

UserPurchase.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        favorite_id: {
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
        modelName: 'userPurchase'
    }
);

module.exports = UserPurchase;
