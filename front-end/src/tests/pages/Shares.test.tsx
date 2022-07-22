import { screen, render } from '../test-utils';

import { Shares } from '../../pages/Shares';

describe('The Shares Page', () => {
  beforeEach(() => {
    render(<Shares />);
  });

  it('Should have a table named "minhas ações"', () => {
    const userSharesTable = screen.getByRole(
      'table',
      { name: /minhas ações/i },
    );

    expect(userSharesTable).toBeInTheDocument();
  });

  it('Should have a table named "disponíveis para investir"', () => {
    const sharesTable = screen.getByRole(
      'table',
      { name: /disponíveis para investir/i },
    );

    expect(sharesTable).toBeInTheDocument();
  });

  it('Should have a submit button with the label "negociar"', () => {
    const negotiateButton = screen.getByRole(
      'button',
      {
        name: /negociar/i,
      },
    );

    expect(negotiateButton).toHaveProperty('type', 'submit');
    expect(negotiateButton).toBeInTheDocument();
  });
});
