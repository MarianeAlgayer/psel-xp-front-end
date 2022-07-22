import { useNavigate, NavLink } from 'react-router-dom';
import { CaretLeft, CurrencyCircleDollar } from 'phosphor-react';

import { useAppSelector } from '../../redux/hooks';

import { HeaderContainer } from './styles';

export function Header() {
  const userEmail = useAppSelector((state) => state.user.email);
  const userBalance = useAppSelector((state) => state.user.account.balance);

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/conta" title="conta">
          <CurrencyCircleDollar size={28} weight="light" />
          Conta
        </NavLink>

        <button type="button" onClick={() => navigate(-1)}>
          <CaretLeft size={28} weight="light" />
          Voltar
        </button>
      </nav>

      <section>
        <h1>{userEmail}</h1>

        <p>
          {userBalance
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
      </section>
    </HeaderContainer>
  );
}
