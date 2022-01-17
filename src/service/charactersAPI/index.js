import { fetch } from '../connector';

export const getCharacters = () =>
  fetch(`api/people/`, {
    method: 'GET',
  });

