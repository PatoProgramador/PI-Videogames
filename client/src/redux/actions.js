import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH = "SEARCH";
export const ERROR = "ERROR";
export const CLOSE_ERROR = "CLOSE_ERROR";

export const getVideogames = () => async dispatch => {
    try {
        let result = await axios.get('http://localhost:3001/videogames')
        return dispatch({type: GET_VIDEOGAMES, payload: result.data})
    } catch (error) {
        return dispatch({type: ERROR, payload: error});
    }
};

export const getVideogamesByName = (name) => async dispatch => {
    try {
        let result = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({type: SEARCH, payload: result.data})
    } catch(error) {
        return dispatch({type: ERROR, payload: error});
    };
};

export const closeError = () => dispatch =>{
    return dispatch({type: CLOSE_ERROR})
}; 