const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, UserResult } = require('../models/models')
const generateJWT = require('../utils/generateJWT')

class UserController {
  async registration(req, res, next) {
    const {
      email, password, name, lastName, middleName, department, role
    } = req.body

    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }

    if (!name || !lastName || !middleName) {
      return next(ApiError.badRequest('Введите ФИО'))
    }

    if (!department) {
      return next(ApiError.badRequest('Введите факультет'))
    }

    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({
        email,
        password: hashPassword,
        name,
        lastName,
        middleName,
        department,
        role
      })
    const userResult = UserResult.create({ userId: user.id })

    const token = generateJWT(user.id, user.email, user.role)

    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return next(ApiError.internal('Пользователь с таким именем не найден'))
    }

    const comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }

    const token = generateJWT(user.id, user.email, user.role)
    return res.json({ token })
  }

  async authCheck(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }
}


module.exports = new UserController()
