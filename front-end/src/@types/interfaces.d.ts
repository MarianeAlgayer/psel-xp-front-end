export interface ILogin {
  email: string,
  password: string,
}

export interface IShare {
  code: string;
  qtd: number;
  value: number;
}

export interface IOperation {
  type: string;
  qtd: number;
  value: number;
}
