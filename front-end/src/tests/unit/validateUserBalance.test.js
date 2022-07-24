import { validateUserBalance } from '../../helpers/validations';

describe('User balance validation', () => {
  describe('The deposit/withdraw operation', () => {
    it('The user balance should be greater than the operation value', () => {
      expect(validateUserBalance(1000, 2000)).toEqual(true);
      expect(validateUserBalance(1000, 500)).toEqual(false);
    });
  });
});
