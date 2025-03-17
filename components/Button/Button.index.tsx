import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { IButtonProps } from './Button.types';
import { styles } from './Button.styles';
import { theme } from '@/theme/Theme';

export default function Button({
  onPress,
  title,
  type,
  size,
  rightIcon,
  leftIcon,
  disabled = false,
  isLoading,
  customButtonStyle,
}: IButtonProps) {
  const { colorScheme } = theme;

  const getButtonType = () => {
    let buttonStyle;
    let textStyle;

    switch (type) {
      case 'filled':
        buttonStyle = styles.filledButton;
        textStyle = styles.filledButtonText;
        break;
      case 'outlined':
        buttonStyle = styles.outlinedButton;
        textStyle = styles.outlinedButtonText;
        break;
      case 'text':
        textStyle = styles.outlinedButtonText;
        break;
    }

    return { buttonStyle, textStyle };
  };

  const getButtonSize = () => {
    let buttonSizeStyle;
    switch (size) {
      case 'small':
        buttonSizeStyle = styles.smallButton;
        break;
      case 'medium':
        buttonSizeStyle = styles.mediumButton;
        break;
      case 'large':
        buttonSizeStyle = styles.largeButton;
        break;
    }
    return { buttonSizeStyle };
  };

  const { buttonStyle, textStyle } = getButtonType();
  const { buttonSizeStyle } = getButtonSize();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.container,
        buttonStyle,
        buttonSizeStyle,
        disabled && styles.disabledButton,
        customButtonStyle,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colorScheme.light.blue[900]} />
      ) : (
        <View>
          {leftIcon}
          <Text style={[styles.text, textStyle]}>{title}</Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
}
