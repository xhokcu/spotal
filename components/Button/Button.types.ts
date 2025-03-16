import { ReactNode } from 'react';

export interface IButtonProps {
  onPress: () => void;
  title: string;
  type: 'filled' | 'outlined' | 'text';
  size: 'small' | 'medium' | 'large';
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}
