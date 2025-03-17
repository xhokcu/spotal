import React from 'react';
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

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(useLoginSchema()),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await AsyncStorage.setItem('token', '1234');
    router.replace('/(drawer)');
    // console.log(data);
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
              onPress={() => null}
            />
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
});
