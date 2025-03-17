import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login as LoginImage } from '@/svg';
import Button from '@/components/Button/Button.index';
import { theme } from '@/theme/Theme';

export default function Signup() {
  const handleSignup = async () => {
    await AsyncStorage.setItem('token', '1234');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <LoginImage />
          </View>
          <Text style={styles.header}>Create a new account.</Text>
        </View>

        <Button
          type={'filled'}
          size="large"
          // disabled={!isValid}
          title="Signup"
          onPress={handleSignup}
        />
      </View>
    </SafeAreaView>
  );
}

const { colorScheme, justifyContent, spacing, alignItems, fontSizes, fonts } = theme;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.light.white,
  },
  topContainer: {
    gap: spacing[36],
  },
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: justifyContent.spaceBetween,
  },
  imageContainer: {
    alignItems: alignItems.center,
  },
  header: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.heading.small,
    textAlign: 'center',
  },
});
