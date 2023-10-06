import { combineReducers } from 'redux';
import { ChangeStackReducer, checkLocationStatusReducers, destinationReducers, modalReducer, pickupLocationDetailsReducers, setIntialScreenAuthReducres, userLocationDeetailsReducers, userReducers } from './reducres';
// import  { ManagewelcomeScreen,ChangeStackReducer, changeUserType } from './stackReducers';
// import { getUserLocationReducer, modalReducer, myProfileReducer } from './commonReducers';


export default combineReducers({
    ChangeStackReducer:ChangeStackReducer,
    modalReducer:modalReducer,
    userReducers:userReducers,
    setIntialScreenAuthReducres:setIntialScreenAuthReducres,
    checkLocationStatusReducers:checkLocationStatusReducers,
    destinationReducers:destinationReducers,
    userLocationDeetailsReducers:userLocationDeetailsReducers,
    pickupLocationDetailsReducers:pickupLocationDetailsReducers
});