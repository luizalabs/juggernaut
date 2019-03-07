import { combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';

const rootReducer = combineReducers({
    content: exampleReducer
})

export default rootReducer