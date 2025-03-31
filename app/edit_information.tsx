// /* eslint-disable import/no-unresolved */
// import { StyleSheet } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import { theme } from '@/theme/Theme';
// import { useLocalSearchParams } from 'expo-router';
// import TextInput from '@/components/TextInput/TextInput.index';

// //

// const EditName = () => {
//   return (
//     <View style={styles.formContainer}>
//       <Text style={styles.descriptionText}>
//         Update your first and last name as it appears on your profile.
//       </Text>
//       <TextInput label="First Name" placeholder="helin" />
//       <TextInput label="Last Name" placeholder="helin" />
//     </View>
//   );
// };

// const EditEmail = () => {
//   return (
//     <View style={styles.formContainer}>
//       <Text style={styles.descriptionText}>
//         Change the email address associated with your account.
//       </Text>
//       <TextInput label="Email" placeholder="helin" />
//     </View>
//   );
// };

// const EditPassword = () => {
//   return (
//     <View style={styles.formContainer}>
//       <Text style={styles.descriptionText}>Update your password to keep your account secure.</Text>
//       <TextInput label="Password" placeholder="helin" />
//     </View>
//   );
// };

// export default function EditInformation() {
//   const { type, user: stringUser } = useLocalSearchParams();

//   const types = {
//     name: EditName,
//     email: EditEmail,
//     password: EditPassword,
//   };

//   const FormComponent = types[type as keyof typeof types];

//   return <View style={styles.container}>{<FormComponent />}</View>;
// }

// const { fonts, fontSizes, spacing, colorScheme, lineHeight } = theme;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: spacing[24],
//     backgroundColor: colorScheme.light.background,
//   },
//   formContainer: {
//     gap: spacing[24],
//     backgroundColor: colorScheme.light.transparent,
//   },
//   descriptionText: {
//     fontFamily: fonts.regular,
//     fontSize: fontSizes.body.large,
//     lineHeight: lineHeight[21],
//     color: colorScheme.light.gray[600],
//   },
// });
