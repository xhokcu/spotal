import { InferType, object, string } from 'yup';

export const useForgotPasswordSchema = () => {
  return object({
    email: string().email('Geçerli bir e-posta girin.').required('E-posta zorunludur.'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type ForgotPasswordSchemaType = InferType<ReturnType<typeof useForgotPasswordSchema>>;
