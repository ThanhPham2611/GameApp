import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {store} from '../../redux/store';
import {addTemplate, clearTemplate} from '../../redux/slices/templateSlice';
import {useSelector} from 'react-redux';
import {t} from 'i18next';
import {API_URL} from '@env';
import {useGetListExample} from '../../hooks/useExample';
import {Switch} from 'native-base';

const HomeScreen: FunctionComponent = () => {
  const stateStore: any = useSelector(state => state);
  const {data} = stateStore.template;
  const {
    data: dataList,
    isLoading,
    isFetching,
    refetch,
  } = useGetListExample({});
  return (
    <View>
      <Switch size="sm" />
      <Text>{t('home')}</Text>
      <Text>{API_URL}</Text>
      <Text>Data template in store: {data?.data}</Text>
      <Button
        onPress={() => {
          store.dispatch(
            addTemplate({
              data: '123',
            }),
          );
        }}
        title="Dispatch action add"
        color="#841584"
      />
      <Button
        onPress={() => {
          store.dispatch(clearTemplate());
        }}
        title="Dispatch action clear"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
