// /* eslint-disable import/no-unresolved */
// import { StyleSheet } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import { getItem } from '@/helpers/asyncStorage/asyncStorage';
// import { useEffect, useState } from 'react';
// import { theme } from '@/theme/Theme';
// import { Edit } from '@/svg';
// import IconButton from '@/components/IconButton/IconButton.index';

// interface IUser {
//   uid: string;
//   email: string;
// }

// const informations = ['Name', 'Email', 'Pasword'];

// const InformationItem = (title) => {
//   return (
//     <View style={styles.cardContainer}>
//       <View style={styles.textContainer}>
//         <Text style={styles.regularText}>{title.title}</Text>
//         <Text style={styles.mediumText}>Helin Okcu</Text>
//       </View>
//       <IconButton icon={<Edit />} onPress={() => null} />
//     </View>
//   );
// };

// export default function EditAccount() {
//   // const [user, setUser] = useState<IUser | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const item = await getItem('user');
//         const parsedItem = JSON.parse(item as string);
//         // setUser(parsedItem);
//       } catch {}
//     };
//     fetchUser();
//   }, []);

//   // const handleEdit = () => {};

//   return (
//     <View style={styles.container}>
//       {informations.map((item) => (
//         <InformationItem title={item} />
//       ))}
//     </View>
//   );
// }

// const {
//   fonts,
//   flexDirection,
//   fontSizes,
//   spacing,
//   colorScheme,
//   borderRadius,
//   alignItems,
//   justifyContent,
// } = theme;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: spacing[24],
//     gap: spacing[24],
//   },
//   cardContainer: {
//     backgroundColor: colorScheme.light.gray[100],
//     borderRadius: borderRadius[12],
//     flexDirection: flexDirection.row,
//     justifyContent: justifyContent.spaceBetween,
//     paddingVertical: spacing[16],
//     paddingHorizontal: spacing[12],
//   },
//   contentContainer: {
//     gap: spacing[48],
//   },
//   nameText: {
//     fontFamily: fonts.medium,
//     fontSize: fontSizes.body.xlarge,
//   },
//   emailText: {
//     fontFamily: fonts.regular,
//     fontSize: fontSizes.body.xlarge,
//   },
//   textContainer: {
//     gap: spacing[12],
//     backgroundColor: 'transparent',
//   },
//   profileContainer: {
//     flexDirection: flexDirection.row,
//     justifyContent: justifyContent.spaceBetween,
//     alignItems: alignItems.center,
//   },
//   avatarContainer: {
//     flexDirection: flexDirection.row,
//     gap: spacing[12],
//     alignItems: alignItems.center,
//   },
//   regularText: {
//     fontFamily: fonts.regular,
//     fontSize: fontSizes.body.large,
//     color: colorScheme.light.gray[900],
//   },
//   mediumText: {
//     fontFamily: fonts.medium,
//     fontSize: fontSizes.body.large,
//     color: colorScheme.light.gray[900],
//   },
//   rowContainer: {
//     gap: spacing[12],
//     alignItems: alignItems.flexStart,
//   },
// });
