/* eslint-disable import/no-unresolved */
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getItem } from '@/helpers/asyncStorage/asyncStorage';
import { useEffect, useState } from 'react';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { Delete, Logout } from '@/svg';
import { router } from 'expo-router';
import { removeItem } from '@/helpers/asyncStorage/asyncStorage';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

interface IUser {
  uid: string;
  email: string;
  displayName: string;
}

function ProfileAvatar({ name }: { name: string }) {
  const words = name.split(' ');
  const initials = words[0].charAt(0) + words[words.length - 1].charAt(0);
  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
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

  const handleLogout = async () => {
    await removeItem('user');
    await signOut(auth);
    router.replace('/(auth)/login');
  };

  const handleEdit = () => {
    router.push({
      pathname: '/edit_account',
      params: { user: JSON.stringify(user) },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleEdit}>
          <View style={styles.avatarContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{user?.displayName}</Text>
              <Text style={styles.emailText}>{user?.email}</Text>
            </View>
            <ProfileAvatar name="Helin Okcu" />
          </View>
        </TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.regularBoldText}>Delete Account</Text>
            <Text style={styles.regularText}>
              Permanently remove your account and all associated data.
            </Text>
          </View>
          <Button
            title="Delete Account"
            type="error"
            size="medium"
            onPress={() => null}
            leftIcon={<Delete color={colorScheme.light.error} />}
          />
        </View>
      </View>
      <Button
        title="Logout"
        size="medium"
        type="text"
        leftIcon={<Logout />}
        onPress={handleLogout}
      />
    </View>
  );
}

const {
  fonts,
  borderWidth,
  flexDirection,
  fontSizes,
  spacing,
  colorScheme,
  borderRadius,
  alignItems,
  justifyContent,
  shadow,
  lineHeight,
} = theme;

const styles = StyleSheet.create({
  avatar: {
    height: spacing[60],
    width: spacing[60],
    backgroundColor: colorScheme.light.blue[50],
    borderRadius: borderRadius[30],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  avatarText: {
    color: colorScheme.light.blue[300],
    fontFamily: fonts.regular,
    fontSize: fontSizes.heading.small,
  },
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: justifyContent.spaceBetween,
    backgroundColor: colorScheme.light.background,
  },
  contentContainer: {
    gap: spacing[24],
    backgroundColor: colorScheme.light.transparent,
  },
  nameText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.xlarge,
    color: colorScheme.light.gray[900],
    lineHeight: lineHeight[21],
  },
  emailText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.xlarge,
    color: colorScheme.light.gray[600],
    lineHeight: lineHeight[21],
  },
  textContainer: {
    gap: spacing[4],
  },
  avatarContainer: {
    flexDirection: flexDirection.row,
    gap: spacing[12],
    alignItems: alignItems.center,
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    borderRadius: borderRadius[12],
    padding: spacing[16],
    justifyContent: justifyContent.spaceBetween,
    ...shadow.small,
    backgroundColor: colorScheme.light.white,
  },
  regularBoldText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[900],
    lineHeight: lineHeight[21],
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[600],
    lineHeight: lineHeight[21],
  },
  itemContainer: {
    gap: spacing[12],
    alignItems: alignItems.flexStart,
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    borderRadius: borderRadius[12],
    padding: spacing[16],
    ...shadow.small,
    backgroundColor: colorScheme.light.white,
  },
});
