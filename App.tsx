import React from 'react';
import Navigation from './src/navigation/scene/RootScenes';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {NativeBaseProvider, extendTheme} from 'native-base';

const queryClient = new QueryClient();
const theme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  components: {},
});
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <SafeAreaProvider>
              <NativeBaseProvider theme={theme}>
                <Navigation />
              </NativeBaseProvider>
            </SafeAreaProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
