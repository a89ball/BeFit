const { DataTypes, Model } = require('sequelize')

const sequelize = require('../config/connection')

class Workout extends Model {
    

}

Workout.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    userId:{
        type: DataTypes.INTEGER,
        foreignKey: true,
    },

},{
    sequelize
})

module.exports = Workout