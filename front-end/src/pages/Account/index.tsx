import { useState, FormEvent } from 'react';
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import NumberFormat from 'react-number-format';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deposit, withdraw } from '../../redux/slices/userSlice';

import { SubmitButton } from '../../components/SubmitButton';
import { CustomToaster } from '../../components/CustomToaster';

import { validateUserBalance } from '../../helpers/validations';

import {
  AccountContainer, OperationTypeButton, OperationTypeButtonsContainer,
} from './styles';

export function Account() {
  const userBalance = useAppSelector((state) => state.user.account.balance);

  const [currencyAmount, setCurrencyAmount] = useState<number>(0);
  const [operationType, setOperationType] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (operationType === 'deposit') {
      dispatch(deposit(currencyAmount));

      return toast.success('Depósito efetuado!');
    }

    if (!validateUserBalance(currencyAmount, userBalance)) {
      return toast.error('Saldo insuficiente!');
    }

    dispatch(withdraw(currencyAmount));

    return toast.success('Retirada efetuada!');
  };

  return (
    <AccountContainer>
      <h2>Saldo em conta</h2>
      <h1>
        {userBalance
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </h1>

      <form onSubmit={handleSubmit}>
        <h2>Valor transação</h2>

        <NumberFormat
          thousandSeparator
          prefix="R$"
          placeholder="R$ 0,00"
          value={currencyAmount}
          onValueChange={(values) => {
            const { value } = values;
            setCurrencyAmount(Number(value));
          }}
        />

        <OperationTypeButtonsContainer>
          <OperationTypeButton
            type="button"
            isActive={operationType === 'deposit'}
            onClick={() => setOperationType('deposit')}
            color="#00B050"
          >
            <ArrowCircleUp size={28} weight="light" />
            DEPÓSITO
          </OperationTypeButton>

          <OperationTypeButton
            type="button"
            isActive={operationType === 'withdraw'}
            onClick={() => setOperationType('withdraw')}
            color="#E52E4D"
          >
            <ArrowCircleDown size={28} weight="light" />
            RETIRADA
          </OperationTypeButton>
        </OperationTypeButtonsContainer>

        <SubmitButton label="CONFIRMAR" disabled={currencyAmount <= 0} />
      </form>

      <CustomToaster />
    </AccountContainer>
  );
}
