const {Router} = require("express");
const {findGameById} = require("../controllers/gamesController");

const router = Router();

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const game = await findGameById(id);
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;