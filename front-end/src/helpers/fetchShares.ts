import axios from 'axios';

export const fetchShares = async () => {
  try {
    const response = await axios.get('https://xp-api-mariane.herokuapp.com/ativos');

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
