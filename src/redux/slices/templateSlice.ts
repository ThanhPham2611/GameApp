import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utilities/persist/PersistConfig';
import {persistReducer} from 'redux-persist';

interface State {
  data: string;
}

const initialState: State = {
  data: '',
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    clearTemplate: state => {
      state.data = '';
    },
  },
});

const persistConfig = generatePersistConfig('template', ['']);

export const {addTemplate, clearTemplate} = templateSlice.actions;

export default persistReducer(persistConfig, templateSlice.reducer as never);
