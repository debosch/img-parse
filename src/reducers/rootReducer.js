import { combineReducers } from "redux";
import { ADD_IMAGE } from "../components/actions/types";

const initialState = {
    images: []
}

export const input = (state = initialState, action) => {
    switch(action.type) {
        case ADD_IMAGE:
            return [...state.images, action.payload];
        default:
            return state;
    }
};

export const reducers = combineReducers({
    input,
});