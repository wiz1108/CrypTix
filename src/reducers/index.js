import { combineReducers } from 'redux';
import walletReducer from './walletReducer';

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
