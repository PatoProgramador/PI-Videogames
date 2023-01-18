const {Genre} = require("../db");
const {API_KEY} = process.env;
const axios = require("axios");

const getGenres = async () => {
    try {
        let genrApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        genrApi = genrApi.data.results;
        genrApi = genrApi?.map((genre) => {
            return {
                name: genre.name,
            }
        });
        genrApi.forEach(async (genre) => {
            await Genre.findOrCreate({
                where: {
                    name: genre.name,
                },
            });
        });
        let genres = await Genre.findAll();
        return genres;
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = {getGenres};