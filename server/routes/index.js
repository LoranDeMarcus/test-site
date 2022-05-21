const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')
const userResultRouter = require('./userResultRouter')

router.use('/user', userRouter)
router.use('/question', questionRouter)
router.use('/result', userResultRouter)

module.exports = router
