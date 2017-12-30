import superagent from 'superagent';
import switchFn from 'switch-fn';
import apiKey from './apiKey';

import { GET_BOOK_LIST } from '../book/actions';
import { GET_SUGGESTIONS } from '../suggestions/actions';

function withHeader(req) {
  req = req.query({ ...apiKey });

  return req;
}

export const request = (url, withKey) => (withKey ? withHeader(superagent.get(url)) : superagent.get(url));

const RestClient = () => {
  const convertRESTRequestToHTTP = (type, params) => {
    let url = '';
    let req = {};
    switchFn({
      [GET_BOOK_LIST]() {
        /*         const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...params.filter,
          ...params.custom,
          _sort: field,
          _order: order,
          _start: (page - 1) * perPage,
          _end: page * perPage
        }; */
        url = `/books/v1/volumes/?q=search+term&maxResults=40`;
        req = request(url, true);
      },

      [GET_SUGGESTIONS]() {
        url = `/complete/search?q=ob&client=firefox&hl=ru`;
        req = request(url);
      },
      default() {
        throw new Error(`Unsupported fetch action type ${type}`);
      }
    })(type);

    return req;
  };

  return (type, params) =>
    convertRESTRequestToHTTP(type, params).then(response => ({ response: response.body || JSON.parse(response.text) }));
};

export default RestClient();
