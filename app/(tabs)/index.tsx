/* eslint-disable import/no-unresolved */
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { FlashList } from '@shopify/flash-list';
import { theme } from '@/theme/Theme';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <View style={{ width: '100%', flex: 1 }}>
        <FlashList
          data={taskList}
          extraData={taskList}
          renderItem={({ item }: { item: any }) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
}
const { colorScheme } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colorScheme.light.background,
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
