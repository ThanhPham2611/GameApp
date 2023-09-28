import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const generatePersistConfig = (key: string, whitelist: string[]) => {
  return {
    key,
    whitelist,
    version: 1,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };
};
