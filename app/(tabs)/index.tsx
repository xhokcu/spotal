/* eslint-disable import/no-unresolved */
import { Alert, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { FlashList } from '@shopify/flash-list';

export default function Home() {
  const [userId, setUserId] = useState<any>('');
  const [taskList, setTaskList] = useState<any>([]);

  useEffect(() => {
    const getItemData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        return data;
      } catch {}
    };
    const fetchData = async () => {
      const data = await getItemData();
      setUserId(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getDoc = async () => {
      try {
        const queryRef = query(collection(db, 'users', userId, 'tasks'));
        const data = await getDocs(queryRef);
        const taskList = data.docs.map((doc) => doc.data());
        setTaskList(taskList);
      } catch {}
    };
    getDoc();
  }, [userId]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    try {
      await signOut(auth);
      router.replace('/(auth)/login');
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <Button title="Logout" onPress={handleLogout} />
      <View style={{ width: '100%', flex: 1 }}>
        <FlashList
          data={taskList}
          renderItem={({ item }: { item: any }) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
