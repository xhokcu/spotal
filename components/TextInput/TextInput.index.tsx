import { Controller, useForm } from 'react-hook-form';

export default function TextInput() {
  return (
    <Controller
      name="email"
      // control={control}
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
  );
}
