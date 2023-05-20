import axios from 'axios';

import { CHARACTER_URL } from './urls';

export const getCharacters = (search: string = '', page: number = 1) => {
  return axios.get(CHARACTER_URL, {
    params: {
      search,
      page
    }
  });
};