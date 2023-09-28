import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {authStack} from '../config/routes';
import {HeaderAuthNavigation} from '../../components/base/HeaderNavigation';

export type RootStackParamList = Record<string, any>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({options, route, navigation}: NativeStackHeaderProps) => (
        <HeaderAuthNavigation
          options={options}
          route={route}
          navigation={navigation}
        />
      ),
    }}>
    {authStack.map(item => (
      <Stack.Screen
        key={item.name}
        name={item.name}
        component={item.component}
        options={{headerTitle: item.title}}
      />
    ))}
  </Stack.Navigator>
);

export default AuthStack;
