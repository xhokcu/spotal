import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login as LoginImage } from '@/svg';
import Button from '@/components/Button/Button.index';
import { theme } from '@/theme/Theme';
import TextInput from '@/components/TextInput/TextInput.index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterSchema, RegisterSchemaType } from '@/helpers/validationSchemas/registerSchema';

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: yupResolver(useRegisterSchema()),
  });

  const handleSignup = async (data: RegisterSchemaType) => {
    await AsyncStorage.setItem('token', '1234');
    // console.log(data);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <LoginImage />
          </View>
          <Text style={styles.header}>Create a new account.</Text>
          <View style={styles.form}>
            <View style={{ flexDirection: 'row', width: '100%', gap: 12 }}>
              <TextInput
                customContainerStyle={{ flex: 1 }}
                control={control}
                placeholder="First name"
                label="First Name"
                name="firstName"
              />
              <TextInput
                customContainerStyle={{ flex: 1 }}
                control={control}
                placeholder="Last name"
                label="Last Name"
                name="lastName"
              />
            </View>
            <TextInput control={control} placeholder="Email" label="Email" name="email" />
            <TextInput
              control={control}
              placeholder="Password"
              label="Password"
              name="password"
              isPassword
            />
          </View>
        </View>

        <Button
          type={'filled'}
          size="large"
          disabled={!isValid}
          title="Signup"
          onPress={handleSubmit(handleSignup)}
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
});
