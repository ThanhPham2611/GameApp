import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {FunctionComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const HeaderAppNavigation: FunctionComponent<NativeStackHeaderProps> = ({
  options,
  route,
  navigation,
}: NativeStackHeaderProps) => {
  const {name} = route;
  const {headerTitle, headerRight, headerLeft} = options;
  return (
    <View>
      <Text>{headerTitle as string}</Text>
    </View>
  );
};

export const HeaderAuthNavigation: FunctionComponent<
  NativeStackHeaderProps
> = ({options, route, navigation}: NativeStackHeaderProps) => {
  const {name} = route;
  const {headerTitle, headerRight, headerLeft} = options;
  return (
    <View>
      <Text>{headerTitle as string}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
