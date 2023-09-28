import {combineReducers} from '@reduxjs/toolkit';
import templateSlice from './slices/templateSlice';

export default combineReducers({
  template: templateSlice,
});
