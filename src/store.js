import { createStore, applyMiddleware,combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import charactersReducer from "./reducers/charactersReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  characters: charactersReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));


export default store;
