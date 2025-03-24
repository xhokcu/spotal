/* eslint-disable import/no-unresolved */
import { Alert, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

export default function TabOneScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    try {
      await signOut(auth);
      router.replace('/(auth)/login');
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs).tsx" />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
