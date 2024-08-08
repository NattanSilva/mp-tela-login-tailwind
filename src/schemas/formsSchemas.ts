import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('O e-mail deve ser válido'),
  password: z.string().min(8, 'A senha deve conter pelo menos 8 caracteres'),
});

export const registFormSchema = z.object({
  email: z.string().email('O e-mail deve ser válido'),
  password: z
    .string()
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@!]).*$/, {
      message:
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    }),
  name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
});
