const { DataTypes, Model } = require('sequelize')
const bycrpt = require('bycrpt')
const sequelize = require('../config/db')

class User extends Model {
    validatePassword(password) {
        return bycrpt.compareSync(password, this.password)
    }
}

User.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,


    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 20],
        },
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,

        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,

        }

    }

},
    {
        hooks: {
            beforeCreate: aysnc(newUserData => {
                newUserData.password = await bycrpt.hash(newUserData.password, 10)
                return newUserData
            }),
            beforeUpdate: aysnc(updatedUserData => {
                updatedUserData.password = await bycrpt.hash(updatedUserData.password, 10)
                return updatedUserData
            }),

        },
        sequelize, modelName: 'User'

    })
module.exports = User
