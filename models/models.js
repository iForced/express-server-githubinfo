import sequelize from '../db.js'
import {DataTypes} from 'sequelize'

const defaultAvatar = 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    avatar_url: {type: DataTypes.STRING, defaultValue: defaultAvatar},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING},
    html_url: {type: DataTypes.STRING, defaultValue: 'user.example.com'},
    followers: {type: DataTypes.INTEGER, defaultValue: 0},
    followings: {type: DataTypes.INTEGER, defaultValue: 0},
})
export const Repo = sequelize.define('repo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, defaultValue: 'No description'},
    html_url: {type: DataTypes.STRING, defaultValue: 'repo.example.com'},
    owner: {type: DataTypes.STRING, allowNull: false},
})
export const Contributor = sequelize.define('contributor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})

User.hasMany(Repo)
Repo.belongsTo(User)

Contributor.belongsToMany(Repo, {as: 'Contributor', through: 'repoContributor'})
Repo.belongsToMany(Contributor, {as: 'Repo', through: 'repoContributor'})