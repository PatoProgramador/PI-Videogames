import { GET_VIDEOGAMES } from "./actions";

const initialState = {
    videoGames: [],
    detail: {},
    genres: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videoGames: action.payload,
            };
        default:
            return {
                ...state,
            };
    };
};

export default rootReducer;