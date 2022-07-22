import { loginSchema } from './zodSchemas';
import { ILogin, IShare } from '../@types/interfaces.d';

export const validateLoginForm = (loginData: ILogin) => {
  const { success } = loginSchema.safeParse(loginData);

  return success;
};

export const validateShareQtd = (share: IShare, operationQtd:number): boolean => {
  if (share && share.qtd >= operationQtd) {
    return true;
  }

  return false;
};

export const validateUserBalance = (operationValue: number, userBalance:number): boolean => (
  userBalance >= operationValue
);
