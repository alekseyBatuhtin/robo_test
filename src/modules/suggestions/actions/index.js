export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const GET_SUGGESTIONS_SUCCESS = 'GET_SUGGESTIONS_SUCCESS';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

export const getSuggestions = (query = '') => ({
  type: GET_SUGGESTIONS,
  payload: { query }
});

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});
