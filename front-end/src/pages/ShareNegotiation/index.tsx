import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeShare, addShare } from '../../redux/slices/sharesSlice';
import {
  buyShare, sellShare, deposit, withdraw,
} from '../../redux/slices/userSlice';

import { SharesTable } from '../../components/SharesTable';
import { SubmitButton } from '../../components/SubmitButton';
import { CustomToaster } from '../../components/CustomToaster';

import { IShare, IOperation } from '../../@types/interfaces.d';
import { validateShareQtd, validateUserBalance } from '../../helpers/validations';

import {
  FormContainer, OperationTypeButtonsContainer,
  OperationTypeButton, OperationSummary,
} from './styles';

const HEADERS = ['Ação', 'Qtd', 'Valor (R$)'];

export function ShareNegotiation() {
  const { sharesList, selectedShareCode } = useAppSelector((state) => state.shares);
  const userShares = useAppSelector((state) => state.user.investments.shares);
  const userBalance = useAppSelector((state) => state.user.account.balance);

  const userShare = userShares
    .find(({ code }) => selectedShareCode === code) as IShare;

  const selectedShare = sharesList
    .find(({ code }) => selectedShareCode === code) as IShare;

  const [operation, setOperation] = useState<IOperation>({
    type: 'compra',
    qtd: 100,
    value: selectedShare.value * 100,
  });

  const dispatch = useAppDispatch();

  const payload: IShare = {
    id: selectedShare.id,
    code: selectedShare.code,
    qtd: operation.qtd,
    value: selectedShare.value,
  };

  const buyShares = () => {
    if (!validateShareQtd(selectedShare, operation.qtd)) {
      return toast.error('Quantidade insuficiente!');
    }

    if (!validateUserBalance(operation.value, userBalance)) {
      return toast.error('Saldo insuficiente!');
    }

    dispatch(buyShare(payload));
    dispatch(removeShare(payload));
    dispatch(withdraw(operation.value));

    return toast.success('Compra efetuada!');
  };

  const sellShares = () => {
    if (!validateShareQtd(userShare, operation.qtd)) {
      return toast.error('Quantidade insuficiente!');
    }

    dispatch(sellShare(payload));
    dispatch(addShare(payload));
    dispatch(deposit(operation.value));

    return toast.success('Venda efetuada!');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (operation.type === 'compra') {
      return buyShares();
    }

    return sellShares();
  };

  return (
    <main>
      <SharesTable
        title="COMPRAR/ VENDER AÇÃO"
        shares={[selectedShare]}
        headers={HEADERS}
        message="Selecione uma ação."
      />

      <FormContainer onSubmit={handleSubmit}>
        <input
          aria-label="quantidade"
          type="number"
          id="qtd"
          name="qtd"
          value={operation.qtd}
          min={100}
          step={100}
          onChange={({ target }) => setOperation({
            ...operation,
            qtd: Number(target.value),
            value: Number(target.value) * selectedShare.value,
          })}
        />

        <OperationTypeButtonsContainer>
          <OperationTypeButton
            type="button"
            isActive={operation.type === 'compra'}
            onClick={() => setOperation({ ...operation, type: 'compra' })}
            color="#5386F4"
          >
            COMPRAR
          </OperationTypeButton>

          <OperationTypeButton
            type="button"
            isActive={operation.type === 'venda'}
            onClick={() => setOperation({ ...operation, type: 'venda' })}
            color="#00B050"
          >
            VENDER
          </OperationTypeButton>
        </OperationTypeButtonsContainer>

        <OperationSummary>
          <h2>RESUMO DA OPERAÇÃO</h2>
          <p>{`Tipo: ${operation.type}`}</p>
          <p>{`Quantidade: ${operation.qtd}`}</p>
          <p>
            {`Total: ${operation.value
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
          </p>
        </OperationSummary>

        <SubmitButton
          label={`CONFIRMAR ${operation.type.toUpperCase()}`}
        />
      </FormContainer>

      <CustomToaster />
    </main>
  );
}
