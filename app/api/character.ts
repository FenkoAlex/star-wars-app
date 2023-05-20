import axios from 'axios';

import { CHARACTER_URL } from './urls';

export const getCharacter = (id: string) => {
  return axios.get(`${CHARACTER_URL}${id}/`);
};