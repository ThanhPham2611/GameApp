import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {HeaderAppNavigation} from '../../components/base/HeaderNavigation';
import {appStack} from '../config/routes';
import {ROLE, TAB_STACK} from '../../constants';
import TabBarNavigation from '../../components/base/TabBarNavigation';

export type RootStackParamList = Record<string, any>;
export type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const {HOME_STACK, STATISTICAL_STACK, PROFILE_STACK} = TAB_STACK;

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({
          options,
          route,
          navigation,
          back,
        }: NativeStackHeaderProps) => {
          return options.headerTitle ? (
            <HeaderAppNavigation
              options={options}
              route={route}
              navigation={navigation}
            />
          ) : (
            <></>
          );
        },
      }}>
      {appStack
        .filter(i => i.tab.includes(HOME_STACK))
        .map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{headerTitle: item.title}}
          />
        ))}
    </Stack.Navigator>
  );
};

const StatisticalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({
          options,
          route,
          navigation,
          back,
        }: NativeStackHeaderProps) => {
          return options.headerTitle ? (
            <HeaderAppNavigation
              options={options}
              route={route}
              navigation={navigation}
            />
          ) : (
            <></>
          );
        },
      }}>
      {appStack
        .filter(i => i.tab.includes(STATISTICAL_STACK))
        .map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{headerTitle: item.title}}
          />
        ))}
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({
          options,
          route,
          navigation,
          back,
        }: NativeStackHeaderProps) => {
          return options.headerTitle ? (
            <HeaderAppNavigation
              options={options}
              route={route}
              navigation={navigation}
            />
          ) : (
            <></>
          );
        },
      }}>
      {appStack
        .filter(i => i.tab.includes(PROFILE_STACK))
        .map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{headerTitle: item.title}}
          />
        ))}
    </Stack.Navigator>
  );
};

const AppStack = () => {
  const exampleRole = ROLE.USER;

  const arrTab = [
    {
      name: STATISTICAL_STACK,
      title: 'Statistical',
      component: StatisticalStack,
      icon: '',
      iconActive: '',
      roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    },
    {
      name: HOME_STACK,
      title: 'Home',
      component: HomeStack,
      icon: '',
      iconActive: '',
      roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    },
    {
      name: PROFILE_STACK,
      title: 'Profile',
      component: ProfileStack,
      icon: '',
      iconActive: '',
      roles: [ROLE.SYSTEM_ADMIN, ROLE.ADMIN, ROLE.USER],
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBarNavigation {...props} />}>
      {arrTab
        .filter(i => i.roles.includes(exampleRole))
        .map(item => (
          <Tab.Screen key={item.name} options={{...item}} {...item} />
        ))}
    </Tab.Navigator>
  );
};

export default AppStack;
