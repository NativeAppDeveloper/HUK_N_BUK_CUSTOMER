import { combineReducers } from 'redux';
import { ChangeStackReducer, modalReducer } from './reducres';
// import  { ManagewelcomeScreen,ChangeStackReducer, changeUserType } from './stackReducers';
// import { getUserLocationReducer, modalReducer, myProfileReducer } from './commonReducers';


export default combineReducers({
    ChangeStackReducer:ChangeStackReducer,
    modalReducer:modalReducer
});