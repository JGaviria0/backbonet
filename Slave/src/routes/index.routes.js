const { Router } = require("express")
const { judgecode } = require("../controllers/judge")

const router = Router()

// Routes
router.post('/runcode', judgecode);

router.get('/', (req, res) => {
    res.status(200).send("All Good");
})

router.get('/areyouthere', (req, res) => {
    res.status(200).send("All Good");
})

module.exports = router