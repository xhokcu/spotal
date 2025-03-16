import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import LoginForm from '@/components/LoginForm/LoginForm.index';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
