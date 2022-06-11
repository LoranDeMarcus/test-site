const jwt = require('jsonwebtoken')

module.exports = generateJWT = (id, email, role, name, middleName, lastName, department) => {
  return jwt.sign(
    {
      id,
      email,
      role,
      name,
      middleName,
      lastName,
      department
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '24h'
    }
  )
}
