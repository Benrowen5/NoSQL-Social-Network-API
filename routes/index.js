const router = require('express').Router();
const apiRoutes = require('./api');

// add /api prefex to api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).json({ message: '404 Error!'})
});

module.exports = router;