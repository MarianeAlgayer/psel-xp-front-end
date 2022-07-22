import { screen, render } from '../test-utils';

import { Account } from '../../pages/Account';

describe('The Account Page', () => {
  beforeEach(() => {
    render(<Account />);
  });

  it('Should have an h2 heading with the text "saldo em conta"', () => {
    const accountBalanceTitle = screen.getByRole(
      'heading',
      { name: /saldo em conta/i },
      { level: 2 },
    );

    expect(accountBalanceTitle).toHaveTextContent(/saldo em conta/i);
  });

  it('Should have an h2 heading with the text "valor transação"', () => {
    const currencyAmountTitle = screen.getByRole(
      'heading',
      { name: /valor transação/i },
      { level: 2 },
    );

    expect(currencyAmountTitle).toHaveTextContent(/valor transação/i);
  });

  it('Should have a button with the label "depósito"', () => {
    const depositButton = screen.getByRole(
      'button',
      {
        name: /depósito/i,
      },
    );

    expect(depositButton).toHaveProperty('type', 'button');
    expect(depositButton).toBeInTheDocument();
  });

  it('Should have a button with the label "retirada"', () => {
    const withdrawButton = screen.getByRole(
      'button',
      {
        name: /retirada/i,
      },
    );

    expect(withdrawButton).toHaveProperty('type', 'button');
    expect(withdrawButton).toBeInTheDocument();
  });

  it('Should have a submit button with the label "confirmar"', () => {
    const confirmButton = screen.getByRole(
      'button',
      {
        name: /confirmar/i,
      },
    );

    expect(confirmButton).toHaveProperty('type', 'submit');
    expect(confirmButton).toBeInTheDocument();
  });
});
