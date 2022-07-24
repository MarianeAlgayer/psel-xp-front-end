import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { saveSelectedShare } from '../../redux/slices/sharesSlice';

import { SharesTable } from '../../components/SharesTable';
import { SubmitButton } from '../../components/SubmitButton';

const HEADERS = ['Ação', 'Qtd', 'Valor (R$)', 'Negociar'];

export function Shares() {
  const userShares = useAppSelector((state) => state.user.investments.shares);
  const { sharesList, status } = useAppSelector((state) => state.shares);

  const [selectedShareCode, setSelectedShare] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(saveSelectedShare(selectedShareCode));
    navigate('/acoes/negociar');
  };

  return (
    <main>
      { status === 'loading' ? <p>Carregando</p>
        : (
          <form onSubmit={handleSubmit}>
            <SharesTable
              title="MINHAS AÇÕES"
              shares={userShares}
              headers={HEADERS}
              message="Você não possui ações disponíveis."
              onChange={setSelectedShare}
            />

            <SharesTable
              title="DISPONÍVEIS PARA INVESTIR"
              shares={sharesList}
              headers={HEADERS}
              message="Nenhuma ação disponível."
              onChange={setSelectedShare}
            />

            <SubmitButton label="NEGOCIAR" disabled={!selectedShareCode} />
          </form>
        )}
    </main>
  );
}
