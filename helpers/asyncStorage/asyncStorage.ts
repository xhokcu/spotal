import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key: string) {
  const item = await AsyncStorage.getItem(key);
  return item;
}

export async function setItem({ key, value }: { key: string; value: string }) {
  const item = await AsyncStorage.setItem(key, value);
  return item;
}

export async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}
