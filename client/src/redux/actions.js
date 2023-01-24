import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const getVideogames = () => {
    return async function (dispatch) {
        return await axios.get("/videogames")
            .then((response) => dispatch({ type: GET_VIDEOGAMES, payload: response.data }));
    };
};