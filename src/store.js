import { createStore } from 'redux';
import { inputReducer } from './reducers/rootReducer.js';

export function configureStore() {
    const store = createStore(inputReducer);
    return store;
}

export default configureStore;