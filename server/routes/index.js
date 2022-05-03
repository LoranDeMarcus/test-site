const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')
const answersRouter = require('./answersRouter')
const rightAnswersRouter = require('./rightAnswersRouter')

router.use('/user', userRouter)
router.use('/question', questionRouter)
router.use('/answer', answersRouter)
router.use('/right_answer', rightAnswersRouter)

module.exports = router
