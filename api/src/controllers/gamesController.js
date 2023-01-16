const {Videogame} = require("../db");
const {Op} = require("sequelize");

const getGames = async () => {
    const games = await Videogame.findAll();
    return games;
};

const findGames = async (name) => {
    const results = await Videogame.findAll({
        where:{
            name: { [Op.iLike]: `%${name}%`}
        },
    });
    return results;
}

const createGame = async (name, description, released, rating, plataforms, img) => {
    const newGame = await Videogame.create({name, description, released, rating, plataforms, img});
    return newGame;
};

module.exports = {
    createGame,
    getGames,
    findGames
}