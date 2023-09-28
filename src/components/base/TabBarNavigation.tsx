import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabBarNavigation = ({state, descriptors, navigation}: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: insets.bottom,
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : 'route.name';

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.tab}>
              <Text style={[styles.label]}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 58,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 68,
  },
  notification: {
    backgroundColor: 'red',
    position: 'absolute',
    width: 20,
    height: 19,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: -6,
    right: -12,
  },
  textNotification: {
    fontSize: 10,
  },
  img: {
    width: 20,
    height: 20,
  },
});

export default TabBarNavigation;
