import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Login from './Screen/auth/Login';

export default RootComponent = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: '#000'
  }
})