import userReducer, {
  saveEmail, buyShare, sellShare, deposit, withdraw,
} from '../../redux/slices/userSlice';

const payload = {
  code: 'ABEV3',
  value: 14.84,
  qtd: 1000,
};

describe('The User Slice', () => {
  describe('The saveEmail action', () => {
    it('Should save the user email correctly', () => {
      const initialState = {
        email: '',
      };

      const finalState = {
        email: 'alguem@email.com',
      };

      const action = saveEmail('alguem@email.com');
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The buyShare action', () => {
    it('Should add the share in the user investmensts if not exists', () => {
      const initialState = {
        investments: {
          shares: [],
        },
      };

      const finalState = {
        investments: {
          shares: [payload],
        },
      };

      const action = buyShare(payload);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });

    it('Should sum the correct number of shares to the user investmensts', () => {
      const initialState = {
        investments: {
          shares: [{
            code: 'ABEV3',
            value: 14.84,
            qtd: 200,
          }],
        },
      };

      const finalState = {
        investments: {
          shares: [{
            code: 'ABEV3',
            value: 14.84,
            qtd: 1200,
          }],
        },
      };

      const action = buyShare(payload);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The sellShare action', () => {
    it('Should remove the share in the user investmensts if the quantity is equal to 0', () => {
      const initialState = {
        investments: {
          shares: [payload],
        },
      };

      const finalState = {
        investments: {
          shares: [],
        },
      };

      const action = sellShare(payload);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });

    it('Should subtract the correct number of shares to the user investmensts', () => {
      const initialState = {
        investments: {
          shares: [{
            code: 'ABEV3',
            value: 14.84,
            qtd: 1200,
          }],
        },
      };

      const finalState = {
        investments: {
          shares: [{
            code: 'ABEV3',
            value: 14.84,
            qtd: 200,
          }],
        },
      };

      const action = sellShare(payload);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The deposit action', () => {
    it('Should add money to the user account correctly', () => {
      const initialState = {
        account: {
          balance: 0,
        },
      };

      const finalState = {
        account: {
          balance: 1000,
        },
      };

      const action = deposit(1000);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The withdraw action', () => {
    it('Should remove money to the user account correctly', () => {
      const initialState = {
        account: {
          balance: 1000,
        },
      };

      const finalState = {
        account: {
          balance: 0,
        },
      };

      const action = withdraw(1000);
      const result = userReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });
});
