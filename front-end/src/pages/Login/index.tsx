import {
  useState, useEffect, FormEvent, ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { saveEmail } from '../../redux/slices/userSlice';

import { SubmitButton } from '../../components/SubmitButton';
import { Input } from '../../components/Input';

import { validateLoginForm } from '../../helpers/validateLoginForm';
import { ILogin } from '../../@types/interfaces.d';
import logoXPI from '../../assets/logo-xpi.svg';

import { LoginContainer, LoginForm } from './styles';

const storedEmail = localStorage.getItem('@xp-app:user-email');
const initialLoginData = { email: storedEmail || '', password: '' };

export function Login() {
  const [loginData, setLoginData] = useState<ILogin>(initialLoginData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('@xp-app:user-email', loginData.email);

    dispatch(saveEmail(loginData.email));
    navigate('/acoes');
  };

  useEffect(() => {
    validateLoginForm(loginData);
  }, [loginData]);

  return (
    <LoginContainer>
      <img
        src={logoXPI}
        alt="Logo da XP Investimentos, composto pelas letras 'X' e 'P' em um fundo branco"
      />

      <LoginForm onSubmit={handleSubmit}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          name="email"
          value={loginData.email}
          placeholder="seuemail@email.com"
          onChange={handleChange}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          name="password"
          value={loginData.password}
          maxLength={6}
          placeholder="● ● ● ● ● ●"
          onChange={handleChange}
        />

        <SubmitButton label="ACESSAR" disabled={!validateLoginForm(loginData)} />
      </LoginForm>
    </LoginContainer>
  );
}
