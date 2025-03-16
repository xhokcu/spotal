import { InferType, object, string } from 'yup';

export const useLoginSchema = () => {
  return object({
    email: string().email('Geçerli bir e-posta girin.').required('E-posta zorunludur.'),
    password: string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
  });
};

// Infertype kullanarak sema turunu cikartalim.
export type LoginSchemaType = InferType<ReturnType<typeof useLoginSchema>>;
