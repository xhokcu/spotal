import { Text, Pressable } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Header } from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLayout() {
  const router = useRouter();

  const handleOnboarding = async () => {
    await AsyncStorage.removeItem('onboarded');
    router.back();
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: ({ options }) => <Header {...options} title={options.title || 'title'} />,
        headerLeft: () => (
          <Pressable onPress={handleOnboarding}>
            <Text>Back</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerRight: () => (
            <Pressable onPress={() => router.replace('/signup')}>
              <Text>Signup</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: 'Signup',
          headerRight: () => (
            <Pressable onPress={() => router.replace('/login')}>
              <Text>Login</Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
