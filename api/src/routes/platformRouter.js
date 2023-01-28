const {Router} = require("express");
const {getPlatforms} = require("../controllers/platformController.js");

const router = Router();

router.get("/", async(req, res) => {
    try {
        let platforms = await getPlatforms();
        res.status(200).json(platforms);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;