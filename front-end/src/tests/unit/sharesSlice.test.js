import shareReducer, {
  addShare, removeShare, saveSelectedShare,
} from '../../redux/slices/sharesSlice';

const payload = {
  code: 'ABEV3',
  value: 14.84,
  qtd: 200,
};

describe('The Share Slice', () => {
  describe('The saveSelectedShare action', () => {
    it('Should save the selected share code correctly', () => {
      const initialState = {
        selectedShareCode: '',
      };

      const finalState = {
        selectedShareCode: 'ABEV3',
      };

      const action = saveSelectedShare('ABEV3');
      const result = shareReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The addShare action', () => {
    it('Should add shares correctly', () => {
      const initialState = {
        sharesList: [{
          code: 'ABEV3',
          value: 14.84,
          qtd: 800,
        }],
      };

      const finalState = {
        sharesList: [{
          code: 'ABEV3',
          value: 14.84,
          qtd: 1000,
        }],
      };

      const action = addShare(payload);
      const result = shareReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });

  describe('The removeShare action', () => {
    it('Should remove shares correctly', () => {
      const initialState = {
        sharesList: [{
          code: 'ABEV3',
          value: 14.84,
          qtd: 1000,
        }],
      };

      const finalState = {
        sharesList: [{
          code: 'ABEV3',
          value: 14.84,
          qtd: 800,
        }],
      };

      const action = removeShare(payload);
      const result = shareReducer(initialState, action);

      expect(result).toEqual(finalState);
    });
  });
});
