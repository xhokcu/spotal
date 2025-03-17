import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const {
  spacing,
  fonts,
  flexDirection,
  alignItems,
  colorScheme,
  fontSizes,
  borderWidth,
  borderRadius,
  justifyContent,
} = theme;

export const styles = StyleSheet.create({
  container: {
    gap: spacing[4],
  },
  labelText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.gray[900],
  },
  input: {
    borderWidth: borderWidth[1],
    paddingHorizontal: spacing[16],
    height: spacing[44],
    borderColor: colorScheme.light.blue[200],
    borderRadius: borderRadius[8],
    flexDirection: flexDirection.row,
    alignItems: alignItems.center,
    justifyContent: justifyContent.spaceBetween,
  },
  textInput: {
    flex: 1,
  },
  errorInput: {
    borderColor: colorScheme.light.red[300],
  },
  errorText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.small,
    color: colorScheme.light.red[300],
  },
});
