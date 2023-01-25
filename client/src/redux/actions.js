import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const getVideogames = () => async dispatch => {
    try {
        let result = await axios.get('http://localhost:3001/videogames')
        return dispatch({type: GET_VIDEOGAMES, payload: result.data})
    } catch (error) {
        console.log(error);
    }
};