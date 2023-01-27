import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_RATING = "GET_BY_RATING";
export const GET_BY_ALP = "GET_BY_ALP";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_DB = "GET_BY_DB";
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

export const getVideogamesByRate = (rate) => dispatch => {
    return dispatch({type: GET_BY_RATING, payload: rate})
};

export const getVideogamesByAlp = (alp) => dispatch => {
    return dispatch({type:GET_BY_ALP, payload: alp})
};

export const getGenres = () => async dispatch => {
    let result = await axios.get("http://localhost:3001/genres");
    return dispatch({type: GET_GENRES, payload: result.data})
};

export const getByGenre = (genre) => dispatch => {
    try {
        return dispatch({type: GET_BY_GENRE, payload: genre})
    } catch (error) {
        return dispatch({type: ERROR, payload: error});
    }
};

export const getDbGames = (value) => dispatch => {
    return dispatch({type: GET_BY_DB, payload: value })
};

export const closeError = () => dispatch =>{
    return dispatch({type: CLOSE_ERROR})
}; 