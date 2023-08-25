const { router } = require('express').Router();

router.use(require('./movies'));
router.use(require('./users'));
router.use(require('./auth'));

module.exports = router;
