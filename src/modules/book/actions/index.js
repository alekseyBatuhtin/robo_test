export const GET_BOOK_LIST = 'GET_BOOK_LIST';
export const GET_BOOK_LIST_LOADING = 'GET_BOOK_LIST_LOADING';
export const GET_BOOK_LIST_FAILURE = 'GET_BOOK_LIST_FAILURE';
export const GET_BOOK_LIST_SUCCESS = 'GET_BOOK_LIST_SUCCESS';

export const getBookList = (query, pagination, sort = { field: 'id', order: 'ASC' }, filter = {}, custom = {}) => ({
  type: GET_BOOK_LIST,
  payload: { query, pagination, sort, filter, custom }
});

export const GET_ONE = 'GET_ONE';
export const GET_ONE_LOADING = 'GET_ONE_LOADING';
export const GET_ONE_FAILURE = 'GET_ONE_FAILURE';
export const GET_ONE_SUCCESS = 'GET_ONE_SUCCESS';

export const crudGetOne = id => ({
  type: GET_ONE,
  payload: { id }
});
