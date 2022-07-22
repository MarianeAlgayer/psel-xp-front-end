import { screen, render } from '../test-utils';

import { Header } from '../../components/Header';

describe('The Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Should have an account link', () => {
    const accountLink = screen.getByRole(
      'link',
      { name: /conta/i },
    );

    expect(accountLink).toBeInTheDocument();
  });

  it('Should have a return button', () => {
    const returnButton = screen.getByRole(
      'button',
      { name: /voltar/i },
    );

    expect(returnButton).toBeInTheDocument();
  });

  it('Should display the user balance', () => {
    const accountBalance = screen.getByText('R$ 0,00');

    expect(accountBalance).toBeInTheDocument();
  });
});
