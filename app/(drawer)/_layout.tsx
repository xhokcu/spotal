import { Drawer } from 'expo-router/drawer';
import { useWindowDimensions } from 'react-native';
// import { useNavigation } from 'expo-router';
// import { DrawerActions } from '@react-navigation/native';
// import { Header } from '@rneui/base';
// import AntDesign from '@expo/vector-icons/AntDesign';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const dimensions = useWindowDimensions();
  // const navigation = useNavigation();
  // const openDrawer = () => {
  //   navigation.dispatch(DrawerActions.openDrawer());
  // };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: 'left',
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Overview',
            title: 'Overview',
          }}
        />
        <Drawer.Screen
          name="orders"
          options={{
            drawerLabel: 'Orders',
            title: 'Orders',
          }}
        />
        <Drawer.Screen
          name="billing_overview"
          options={{
            drawerLabel: 'Billing Overview',
            title: 'Billing Overview',
          }}
        />
        <Drawer.Screen
          name="size_declaration"
          options={{
            drawerLabel: 'Size Declaration',
            title: 'Size Declaration',
          }}
        />
        <Drawer.Screen
          name="compliants"
          options={{
            drawerLabel: 'Compliants',
            title: 'Compliants',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
