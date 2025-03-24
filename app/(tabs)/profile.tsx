/* eslint-disable import/no-unresolved */
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { theme } from '@/theme/Theme';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Layout() {
  const { shadow } = theme;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>size_declaration</Text>
      <View style={{ ...shadow.dropdown, padding: 10 }}>
        <Button
          title="Solid"
          style={{
            padding: 30,
          }}
          buttonStyle={{}}
          titleStyle={{ fontWeight: 'bold', fontSize: 23, padding: 30 }}
        />
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/size_declaration.tsx" />
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
