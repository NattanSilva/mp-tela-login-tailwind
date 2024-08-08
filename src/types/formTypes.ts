import { z } from 'zod';
import { loginFormSchema, registFormSchema } from '../schemas/formsSchemas';

export type LoginData = z.infer<typeof loginFormSchema>;
export type RegistData = z.infer<typeof registFormSchema>;
