import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

export default function Onboarding() {
  const handleOnboarded = async () => {
    await AsyncStorage.setItem('onboarded', 'true');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href={'/(auth)/login'} asChild>
          <Pressable style={styles.blueButton} onPress={handleOnboarded}>
            <Text style={styles.whiteButtonText}>Login</Text>
          </Pressable>
        </Link>
        <Link href={'/(auth)/signup'} asChild>
          <Pressable style={styles.whiteButton} onPress={handleOnboarded}>
            <Text style={styles.blueButtonText}>Signup</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const { colorScheme, spacing, borderRadius } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing[16],
    justifyContent: 'flex-end',
  },
  blueButton: {
    paddingVertical: spacing[20],
    borderRadius: borderRadius[8],
    backgroundColor: colorScheme.light.blue[800],
    width: '100%',
    alignItems: 'center',
  },
  whiteButton: {
    paddingVertical: spacing[20],
    borderRadius: borderRadius[8],
    backgroundColor: colorScheme.light.white,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    gap: spacing[24],
  },
  whiteButtonText: {
    color: colorScheme.light.white,
  },
  blueButtonText: {
    color: colorScheme.light.blue[900],
  },
});
