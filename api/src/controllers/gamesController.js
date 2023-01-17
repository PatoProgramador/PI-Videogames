const {Videogame, Genre} = require("../db");
const {Op} = require("sequelize");
const { API_KEY} = process.env;
const axios = require("axios");

const getGames = async () => {
    try {
        let apiurls = [];
        for(let i = 1; i <= 5; i++) {
            apiurls = [...apiurls, `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`]
        };
        let api = apiurls.map((url)=> axios.get(url));
        api = await Promise.all(api);
        api = api?.map((response) => response.data.results).flat();
        api = api?.map((game) => {
            return {
                id: game.id,
                name: game.name,
                genres: game.genres?.map((gen) => gen.name),
                plataforms: game.platfoms?.map((plat)=> plat.platform.name),
                released: game.released,
                img: game.background_image,
                rating: game.rating,
            };
        });
        let gamesdb = await Videogame.findAll({
            include: {
                model: Genre,
                attributes:  ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        gamesdb = gamesdb?.map((game)=> {
            return {
                id: game.id,
                name: game.name,
                genres: game.genres?.map((gen) => gen.name),
                plataforms: game.platfoms,
                released: game.released,
                img: game.background_image,
                rating: game.rating,
                description: game.description,
            };
        });

        api = [...api, ...gamesdb];
        return api;
    } catch (error) {
        throw new Error("Cannot get the games");
    }
};

const findGamesByQuery = async (name) => {
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
    findGamesByQuery
}