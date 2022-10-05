const router = require('express').Router()
const user = require('./user')

router.get('/', (req, res) => {
    res.json({details: 'hello'});
})
router.use(user)

module.exports = router