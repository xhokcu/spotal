import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { useLoginSchema, LoginSchemaType } from '@/helpers/validationSchemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
// Theme
import { theme } from '@/theme/Theme';
// Components
import Button from '@/components/Button/Button.index';
import TextInput from '@/components/TextInput/TextInput.index';
// Assetss
import { Login as LoginImage } from '@/svg';
// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import Toast from 'react-native-toast-message';

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(useLoginSchema()),
    mode: 'onChange',
  });

  const [errMessage, setErrMessage] = useState<string>('');

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'You logged in successfully!',
    });
  };

  const onSubmit = async (data: LoginSchemaType) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password).then((data) => {
        const userData = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
        };
        const stringData = JSON.stringify(userData);
        AsyncStorage.setItem('user', stringData);
        showToast();
        router.replace('/(tabs)');
      });
    } catch (err: any) {
      setErrMessage(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <LoginImage />
          </View>
          <Text style={styles.header}>Login to your account.</Text>
          <View style={styles.form}>
            <TextInput control={control} placeholder="Email" label="Email" name="email" />
            <TextInput
              control={control}
              placeholder="Password"
              label="Password"
              name="password"
              isPassword
            />
            <Button
              customButtonStyle={styles.textButton}
              title="Forgot your password?"
              size="medium"
              type="text"
              onPress={() => router.push('/(auth)/forgot_password')}
            />
            <Text style={styles.errText}>{errMessage}</Text>
          </View>
        </View>

        <Button
          type={'filled'}
          size="large"
          disabled={!isValid}
          title="Login"
          onPress={handleSubmit(onSubmit)}
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
  form: {
    gap: spacing[24],
  },
  textButton: {
    paddingHorizontal: spacing[0],
    paddingVertical: spacing[0],
    alignSelf: 'flex-start',
  },
  errText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.error,
  },
});
