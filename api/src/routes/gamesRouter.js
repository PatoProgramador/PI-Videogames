const {Router} = require("express");
const {createGame,getGames, findGamesByQuery} = require("../controllers/gamesController");

const router = Router();

router.get("/", async (req,res) => {
    const {name} = req.query;
    let games;
    try {
        if (name) games = await findGamesByQuery(name);
        else games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, description, released, rating, plataforms, img} = req.body;
        const newGame = await createGame(name, description, released, rating, plataforms, img);
        res.status(200).json(newGame);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;