import sequelize from '../db.js'
import {DataTypes} from 'sequelize'

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    avatar_url: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    html_url: {type: DataTypes.STRING},
    followers: {type: DataTypes.INTEGER},
    followings: {type: DataTypes.INTEGER},
})
export const Repo = sequelize.define('repo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: true},
    html_url: {type: DataTypes.STRING},
    owner: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasMany(Repo)
Repo.belongsTo(User)