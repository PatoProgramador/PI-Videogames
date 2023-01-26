import { GET_VIDEOGAMES, SEARCH, ERROR, CLOSE_ERROR } from "./actions";

const initialState = {
    videoGames: [],
    detail: {},
    genres: [],
    error: false,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videoGames: action.payload,
            };
        case SEARCH:
            return {
                ...state,
                videoGames: action.payload,
            };
        case CLOSE_ERROR:
            return {
                ...state,
                error: state.error === false ? false : false
            }
        case ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return {
                ...state,
            };
    };
};

export default rootReducer;