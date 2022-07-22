import { screen, render } from '../test-utils';

import { Login } from '../../pages/Login';

describe('The Login Page', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('Should have the XP logo image', () => {
    const logoImage = screen.getByRole(
      'img',
      {
        name: /Logo da XP Investimentos/i,
      },
    );

    expect(logoImage).toBeInTheDocument();
  });

  it('Should have an email input', () => {
    const emailInput = screen.getByRole(
      'textbox',
      {
        name: /e-mail/i,
      },
    );

    expect(emailInput).toHaveProperty('type', 'email');
    expect(emailInput).toBeInTheDocument();
  });

  it('Should have a password input', () => {
    const passwordInput = screen.getByLabelText(/senha/i);

    expect(passwordInput).toHaveProperty('type', 'password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('Should have a submit button that is initially disabled', () => {
    const accessButton = screen.getByRole(
      'button',
      {
        name: /acessar/i,
      },
    );

    expect(accessButton).toHaveProperty('type', 'submit');
    expect(accessButton).toBeDisabled();
  });
});
