import axios from 'axios';

import { IShare } from '../@types/interfaces.d';

export const fetchShares = async () => {
  try {
    const response = await axios.get('https://xp-api-mariane.herokuapp.com/ativos');

    return response.data.map((share: IShare) => (
      {
        ...share,
        value: Number(share.value),
      }
    ));
  } catch (error) {
    console.log(error);
    return error;
  }
};
