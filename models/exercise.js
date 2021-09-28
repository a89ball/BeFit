const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')
const workoutExercises = require('./workoutExercise')
const workout = require('./workout')

class Exercise extends Model {
    
}

Exercise.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }


},
{sequelize}
)

module.exports = Exercise