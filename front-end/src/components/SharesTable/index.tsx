import { Dispatch, SetStateAction } from 'react';

import { IShare } from '../../@types/interfaces.d';

import { TableContainer } from './styles';

interface ISharesTableProps {
  title: string;
  shares: IShare[];
  headers: string[];
  message: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

export function SharesTable({
  title, shares, headers, message, onChange,
}: ISharesTableProps) {
  return (
    <TableContainer>
      <caption>{ title }</caption>

      { shares.length > 0 ? (
        <>
          <thead>
            <tr>
              { headers.map((header) => <th key={header}>{ header }</th>) }
            </tr>
          </thead>

          <tbody>
            { shares.map(({ code, value, qtd }) => (
              <tr key={code}>
                <td>{ code }</td>
                <td>{ qtd }</td>
                <td>{ value.toFixed(2) }</td>
                {onChange
                && (
                  <td>
                    <input
                      aria-label={code}
                      type="radio"
                      id={code}
                      value={code}
                      name="negociar"
                      onChange={({ target }) => onChange(target.value)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </>
      ) : (
        <thead>
          <tr>
            <th>{ message }</th>
          </tr>
        </thead>
      )}
    </TableContainer>
  );
}
