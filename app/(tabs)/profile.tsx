/* eslint-disable import/no-unresolved */
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getItem } from '@/helpers/asyncStorage/asyncStorage';
import { useEffect, useState } from 'react';

interface IUser {
  uid: string;
  email: string;
}

export default function Profile() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const item = await getItem('user');
        const parsedItem = JSON.parse(item as string);
        setUser(parsedItem);
      } catch {}
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.email}</Text>
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
