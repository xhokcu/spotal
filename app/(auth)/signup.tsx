import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';

export default function Signup() {
  const handleSignup = async () => {
    await AsyncStorage.setItem('token', '1234');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Signup Screen!</Text>
      <Button title="Login" onPress={handleSignup} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
