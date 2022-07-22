import { loginSchema } from './zodSchemas';
import { ILogin } from '../@types/interfaces.d';

export const validateLoginForm = (loginData: ILogin) => {
  const { success } = loginSchema.safeParse(loginData);

  return success;
};
