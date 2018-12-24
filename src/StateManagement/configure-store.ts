import { createStore, applyMiddleware } from 'redux';

import rootReducer from './Reducers/rootReducer';
import thunk from 'redux-thunk';

export default function ConfigureStore(initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}