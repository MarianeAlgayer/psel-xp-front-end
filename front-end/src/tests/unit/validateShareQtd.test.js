import { validateShareQtd } from '../../helpers/validations';

const invalidShare = {};

const validShare = {
  code: 'ABCB4',
  qtd: 500,
  value: 15.00,
};

describe('Share quantity validation', () => {
  describe('The buy/sell operation', () => {
    it('The share should be avaiable', () => {
      expect(validateShareQtd(invalidShare, 100)).toEqual(false);
    });

    it('The share quantity should be greater than the operation quantity', () => {
      expect(validateShareQtd(validShare, 100)).toEqual(true);
      expect(validateShareQtd(validShare, 600)).toEqual(false);
    });
  });
});
