import axios from 'axios';

export const setCharacters = (data) => ({
  type: 'DATA_SUCCESS',
  payload: data
});

export const fetchCharacters = (url = 'https://swapi.dev/api/people/') => async (dispatch) => {
  try {
    dispatch({ type: 'DATA_REQUEST' });
    const res = await axios.get(url);
    dispatch(setCharacters({
      characters: res.data.results,
      next: res.data.next,
      previous: res.data.previous
    }));
  } catch (error) {
    console.error(error);
  }
};
