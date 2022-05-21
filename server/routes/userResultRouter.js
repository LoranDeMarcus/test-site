const Router = require('express')
const router = new Router()
const userResultController = require('../controllers/userResultController')

router.post('/', userResultController.create)
router.get('/', userResultController.getAll)
router.delete('/', userResultController.delete)

module.exports = router
