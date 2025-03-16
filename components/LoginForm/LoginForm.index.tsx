import React from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import Button from '@/components/Button/Button.index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { useLoginSchema, LoginSchemaType } from '@/helpers/validationSchemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from './LoginForm.styles';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(useLoginSchema()),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await AsyncStorage.setItem('token', '1234');
    router.replace('/(drawer)');
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
                borderColor: '#ccc',
                borderRadius: 8,
              }}
              placeholder="E-posta adresinizi girin"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {value?.length > 0 && errors.email && (
              <Text style={{ color: 'red' }}>{errors.email.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
                borderColor: '#ccc',
              }}
              placeholder="Şifrenizi girin"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {value?.length > 0 && errors.password && (
              <Text style={{ color: 'red' }}>{errors.password.message}</Text>
            )}
          </>
        )}
      />
      <Button
        type={'filled'}
        size="medium"
        disabled={!isValid}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}
