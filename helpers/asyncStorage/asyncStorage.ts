import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key: string) {
  const item = await AsyncStorage.getItem(key);
  return item;
}

export async function setItem(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}
