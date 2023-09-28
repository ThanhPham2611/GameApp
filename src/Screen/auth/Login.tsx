import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

const Login = () => {
  return (
    <ImageBackground
      style={styles.imageBg}
      source={{ uri: 'https://wallpapercave.com/wp/wp5744505.jpg' }}
      resizeMode="cover"
    >
      <Text>OPklee</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Login;