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
                platforms: game.platforms?.map((plat)=> plat.platform.name),
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
                platforms: game.platforms,
                released: game.released,
                img: game.background_image,
                rating: game.rating,
                description: game.description,
            };
        });

        return [...api, ...gamesdb];
    } catch (error) {
        throw new Error("Cannot get the games");
    };
};

const findGameById = async (id) => {
    try {
        if(id.includes("-")) {
            let db = await Videogame.findOne({
                where: {
                  id: id,
                },
                include: [Genre],
              });
              
              const gamedb = {
                id: db.dataValues.id,
                name: db.dataValues.name,
                genres: db.dataValues.genres?.map((gen) => gen.name),
                platforms: db.dataValues.platforms,
                released: db.dataValues.released,
                img: db.dataValues.img,
                rating: db.dataValues.rating,
                description: db.dataValues.description,
            }

            return gamedb;
        } else {
            let apigame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            apigame = apigame.data;
            const gamefind = {
                id: apigame.id,
                name: apigame.name,
                genres: apigame.genres?.map((gen) => gen.name),
                platforms: apigame.platforms?.map(plat => plat.platform.name),
                released: apigame.released,
                img: apigame.background_image,
                rating: apigame.rating,
                description: apigame.description,
            }
            return gamefind;
        };
    } catch (error) {
        if(error == "AxiosError: Request failed with status code 404") throw new Error(`this game by id:${id} doesn't exist`);
        throw new Error(error);
    }
};

const findGamesByQuery = async (name) => {
    try {
        let fetchapidb = [];
        //busco los 15 resultados en la api
        let api = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        api = api.data.results;
        if(api.length) {
            api = api.splice(0,15);
            
            api = api?.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    genres: game.genres?.map((gen) => gen.name),
                    platforms: game.platfoms?.map((plat)=> plat.platform.name),
                    released: game.released,
                    img: game.background_image,
                    rating: game.rating,
                    description: game.description,
                };
            });
        };
        //ahora con la database local
        let results = await Videogame.findAll({
            where:{
                name: { [Op.iLike]: `%${name}%`},
            },
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if(results.length) {
            results = results.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    genres: game.genres?.map((gen) => gen.name),
                    platforms: game.platfoms,
                    released: game.released,
                    img: game.background_image,
                    rating: game.rating,
                    description: game.description,
                };
            });
        };

        fetchapidb = [...api, ...results];

        if(fetchapidb.length == 0) throw new Error("Could not find the game")
        return fetchapidb;
    } catch (error) {
        throw new Error(error);
    };
};

const createGame = async (name, description, released, rating, platforms, img) => {
    try {
        let [game, boolean] = await Videogame.findOrCreate({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            defaults: {
                name,
                description,
                released,
                rating,
                platforms,
                img,
            }
        });
        if(!boolean) throw new Error("The game already exists");

        return game;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createGame,
    getGames,
    findGamesByQuery,
    findGameById
}