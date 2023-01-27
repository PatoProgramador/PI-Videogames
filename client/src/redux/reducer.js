import { GET_VIDEOGAMES, SEARCH, ERROR, CLOSE_ERROR, GET_BY_RATING } from "./actions";

const initialState = {
    videoGames: [],
    sortGames: [],
    detail: {},
    genres: [],
    error: false,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            const g = [...action.payload]
            return {
                ...state,
                videoGames: action.payload,
                sortGames: g
            };
        case GET_BY_RATING:
            let gamesSorted = action.payload === "higer"
                            ? state.videoGames.sort((a, b) => b.rating - a.rating)
                            : action.payload === "lower"
                            ? state.videoGames.sort((a,b) => a.rating - b.rating)
                            : [...state.videoGames];
            return {
                ...state,
                sortGames: gamesSorted
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