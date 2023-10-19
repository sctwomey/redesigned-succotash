const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserWishlist extends Model { }

UserWishlist.init(
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
                model: 'wishlist',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'userWishlist'
    }
);

module.exports = UserWishlist;