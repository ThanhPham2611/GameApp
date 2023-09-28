import {ROLE, TAB_STACK} from '../../constants';
import LoginScreen from '../../feature/authentication/LoginScreen';
import RegisterScreen from '../../feature/authentication/RegisterScreen';

import HomeScreen from '../../feature/home/HomeScreen';
import StatisticalScreen from '../../feature/statistical/StatisticalScreen';
import ProfileScreen from '../../feature/profile/ProfileScreen';

const authStack = [
  {
    name: 'LoginScreen',
    title: 'LoginScreen',
    component: LoginScreen,
    isViewGeneral: false,
  },
  {
    name: 'RegisterScreen',
    title: 'RegisterScreen',
    component: RegisterScreen,
    isViewGeneral: false,
  },
];

const appStack = [
  {
    name: 'HomeScreen',
    title: 'HomeScreen',
    component: HomeScreen,
    roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    tab: [TAB_STACK.HOME_STACK],
  },
  {
    name: 'StatisticalScreen',
    title: 'StatisticalScreen',
    component: StatisticalScreen,
    roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    tab: [TAB_STACK.STATISTICAL_STACK],
  },
  {
    name: 'ProfileScreen',
    title: 'ProfileScreen',
    component: ProfileScreen,
    roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    tab: [TAB_STACK.PROFILE_STACK],
  },
];

export {authStack, appStack};
