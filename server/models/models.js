const sequelize = require('../config')

const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  middleName: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Credential = sequelize.define('credential', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
})

const Department = sequelize.define('department', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const UserResult = sequelize.define('user_result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Question = sequelize.define('name', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
})

const QuestionChapter = sequelize.define('question_chapter', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
})

const Answers = sequelize.define('answers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
})

const RightAnswers = sequelize.define('right_answers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
})

User.hasOne(Department)
Department.belongsTo(User)

User.hasOne(Credential)
Credential.belongsTo(User)

User.hasOne(UserResult)
UserResult.belongsTo(User)

Question.hasMany(UserResult)
UserResult.belongsTo(Question)

Question.hasMany(QuestionChapter)
QuestionChapter.belongsTo(Question)

Answers.hasMany(Question)
Question.belongsTo(Answers)

RightAnswers.hasMany(Question)
Question.belongsTo(RightAnswers)

module.exports = {
  User,
  Credential,
  Department,
  UserResult,
  Question,
  QuestionChapter,
  Answers,
  RightAnswers
}
