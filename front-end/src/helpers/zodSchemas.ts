import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().length(6, { message: 'A senha deve ter 6 caracteres' }),
});
