const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/users', userController.getAll)

module.exports = router