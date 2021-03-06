const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('admin'), questionController.create)
router.get('/', questionController.getAll)
router.get('/:id', questionController.getOne)
router.delete('/', questionController.delete)

module.exports = router
