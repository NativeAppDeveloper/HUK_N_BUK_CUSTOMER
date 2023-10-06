import {actionType} from '../actionType';

const initialData = {
  stackName: 'ONBOARDING',
};

export const ChangeStackReducer = (state = initialData, action) => {
  // console.log(action,'=-=-=-=q-we=qwe');
  switch (action.type) {
    case 'CHANGE_STACK':
      // state. = ;
      return {...state, stackName: action.payload};
    default:
      return state;
  }
};

const initialRoute = {
  screenName: false,
};

export const setIntialScreenAuthReducres = (state = initialRoute, action) => {
  // console.log(action,'=-=-=-=q-we=qwe');
  switch (action.type) {
    case actionType.authInitial:
      // state. = ;
      return {...state, screenName: action.payload};
    default:
      return state;
  }
};

const modalData = {
  modalStatus: false,
};

export const modalReducer = (state = modalData, action) => {
  switch (action.type) {
    case 'LOADER_STATUS':
      return {...state, modalStatus: action.payload};
    default:
      return state;
  }
};

const userData = {
  userLocation: null,
};

export const userReducers = (state = userData, action) => {
  switch (action.type) {
    case actionType.userLocation:
      return {...state, userLocation: action.payload};
    default:
      return state;
  }
};

const location = {
  checkLocation: null,
};

export const checkLocationStatusReducers = (state = location, action) => {
    console.log(action.type,'access');
  switch (action.type) {
    case actionType.locationStatus:
      return {...state, checkLocation: action.payload};
    default:
      return state;
  }
};

const destination={
    userDestination:null
}



export const destinationReducers = (state = location, action) => {
    console.log(action.type,'access');
  switch (action.type) {
    case actionType.setDestination:
      return {...state, userDestination: action.payload};
    default:
      return state;
  }
};



const userDataDetails = {
  userLocationDetails: null,
};

export const userLocationDeetailsReducers = (state = userDataDetails, action) => {
  switch (action.type) {
    case actionType.userPlaceName:
      return {...state, userLocationDetails: action.payload};
    default:
      return state;
  }
};


const Pickup = {
  pickUpLocationDetails: null,
};

export const pickupLocationDetailsReducers = (state = Pickup, action) => {
  switch (action.type) {
    case actionType.pickUpLocation:
      return {...state, pickUpLocationDetails: action.payload};
    default:
      return state;
  }
};