import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStack from './AuthScenes';
import AppStack from './AppScenes';

export type RootStackParamList = Record<string, any>;

const Navigation: React.FunctionComponent = () => {
  const examleAccessToken = true;
  return examleAccessToken ? <AppStack /> : <AuthStack />;
};

export default Navigation;

export const styles = StyleSheet.create({});
