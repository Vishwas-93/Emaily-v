import authReducers from './authReducer';
import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducers
});