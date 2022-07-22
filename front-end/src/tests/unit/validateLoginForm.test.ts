import { validateLoginForm } from '../../helpers/validateLoginForm';

const validEmail = 'alguem@email.com';
const invalidEmail = 'email.com';

const validPassword = '123456';
const invalidPassword = '123';

describe('Login form validation', () => {
  describe('The e-mail input', () => {
    it('Should not be empty', () => {
      expect(validateLoginForm({ email: '', password: validPassword })).toEqual(false);
    });

    it('Should not pass validation if it is invalid', () => {
      expect(validateLoginForm({ email: invalidEmail, password: validPassword })).toEqual(false);
    });

    it('Should pass validation if it is valid', () => {
      expect(validateLoginForm({ email: validEmail, password: validPassword })).toEqual(true);
    });
  });

  describe('The password input', () => {
    it('Should not be empty', () => {
      expect(validateLoginForm({ email: validEmail, password: '' })).toEqual(false);
    });

    it('Should not pass validation if it is invalid', () => {
      expect(validateLoginForm({ email: validEmail, password: invalidPassword })).toEqual(false);
    });

    it('Should pass validation if it is valid', () => {
      expect(validateLoginForm({ email: validEmail, password: validPassword })).toEqual(true);
    });
  });
});
