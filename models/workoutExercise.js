const { DataTypes, Model } = require('sequelize')

const sequelize = require('../config/connection')

class WorkoutExercise extends Model {

}

WorkoutExercise.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    

    },

    exerciseId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    workoutId: {
        type:DataTypes.INTEGER,
        foreignKey: true,
    }
},{
    sequelize
})

module.exports = WorkoutExercise