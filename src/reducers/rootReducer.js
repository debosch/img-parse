import { ADD_IMAGE } from "../actions/types";

const initialState = {
    images: []
}

export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_IMAGE:
            return { ...state, images: [...state.images, action.payload] };
        default:
            return state;
    }
};
