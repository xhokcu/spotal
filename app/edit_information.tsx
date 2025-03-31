/* eslint-disable import/no-unresolved */
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme/Theme';
import { useLocalSearchParams } from 'expo-router';
import TextInput from '@/components/TextInput/TextInput.index';
import Button from '@/components/Button/Button.index';

const EditName = (user: any) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.descriptionText}>
        Update your first and last name as it appears on your profile.
      </Text>
      <TextInput label="First Name" placeholder="helin" />
      <TextInput label="Last Name" placeholder="helin" />
    </View>
  );
};

const EditEmail = (user: any) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.descriptionText}>
        Change the email address associated with your account.
      </Text>
      <TextInput label="Email" placeholder="helin" />
    </View>
  );
};

const EditPassword = (user: any) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.descriptionText}>Update your password to keep your account secure.</Text>
      <TextInput label="Password" placeholder="helin" />
    </View>
  );
};

export default function EditInformation() {
  const { type, user: stringUser } = useLocalSearchParams();
  const user = JSON.parse(stringUser as string);
  // console.log(user);

  return (
    <View style={styles.container}>
      {type === 'name' ? (
        <EditName user={user} />
      ) : type === 'email' ? (
        <EditEmail user={user} />
      ) : type === 'password' ? (
        <EditPassword user={user} />
      ) : null}
      <Button title="Save" size="medium" type="filled" onPress={() => null} />
    </View>
  );
}

const { fonts, fontSizes, spacing, colorScheme, lineHeight, justifyContent } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[24],
    backgroundColor: colorScheme.light.background,
    justifyContent: justifyContent.spaceBetween,
  },
  contentContainer: {
    gap: spacing[24],
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    lineHeight: lineHeight[21],
    color: colorScheme.light.gray[600],
  },
});
