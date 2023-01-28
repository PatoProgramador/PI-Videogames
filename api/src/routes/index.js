const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRouter = require("./gamesRouter.js");
const videoGameIdRoute = require("./gameidRouter");
const genresRouter = require("./genresRouter.js");
const platformRouter = require("./platformRouter.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGamesRouter);
router.use("/videogame",videoGameIdRoute);
router.use("/genres", genresRouter);
router.use("/platforms", platformRouter);

module.exports = router;