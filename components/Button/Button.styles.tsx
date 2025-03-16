import { StyleSheet } from 'react-native';
import { theme } from '@/theme/Theme';

const {
  flexDirection,
  alignItems,
  colorScheme,
  spacing,
  borderRadius,
  fonts,
  fontSizes,
  fontWeights,
} = theme;

export const styles = StyleSheet.create({
  // **All Buttons**
  container: {
    flexDirection: flexDirection.row,
    gap: spacing[8],
    borderRadius: borderRadius[8],
    width: 'auto',
    paddingHorizontal: spacing[24],
    alignItems: alignItems.center,
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.body.medium,
    fontWeight: fontWeights.semiBold,
  },

  // **Filled Button**
  filledButton: {
    backgroundColor: colorScheme.light.blue[900],
  },
  filledButtonText: {
    color: colorScheme.light.white,
  },

  // **Outlined Button**
  outlinedButton: {
    borderColor: colorScheme.light.blue[900],
    borderWidth: 1,
  },
  outlinedButtonText: {
    color: colorScheme.light.blue[900],
  },

  // **Small Button**
  smallButton: {
    height: spacing[32],
  },

  // **Medium Button**
  mediumButton: {
    height: spacing[44],
  },

  // **Large Button**
  largeButton: {
    height: spacing[56],
  },

  // **Disabled Button**
  disabledButton: {
    opacity: 0.4,
  },
});
