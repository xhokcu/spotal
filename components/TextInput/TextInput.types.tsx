export interface ITextInput {
  control: any;
  placeholder: string;
  label: string;
  value?: string;
  setValue?: (val: string) => void;
  errorMessage?: string;
  name?: string;
  isPassword?: boolean;
}

export interface ICoreTextInput {
  placeholder: string;
  label: string;
  value?: string;
  setValue?: (val: string) => void;
  errorMessage?: string;
  isPassword?: boolean;
}
