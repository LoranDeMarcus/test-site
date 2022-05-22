const sequelize = require('../config')

const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  middleName: { type: DataTypes.STRING, allowNull: false },
  department: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'user' }
})

const UserResult = sequelize.define('user_result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Question = sequelize.define('question', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  chapter: { type: DataTypes.STRING, allowNull: false },
  answers: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  rightAnswers: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
})

User.hasOne(UserResult)
UserResult.belongsTo(User)

Question.hasMany(UserResult)
UserResult.belongsTo(Question)

module.exports = {
  User,
  UserResult,
  Question,
}
