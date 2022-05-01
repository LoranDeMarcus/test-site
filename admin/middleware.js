module.exports = (req, res, next) => {
  res.header('Content-Range', 'questions 0-15/15')
  next()
}
