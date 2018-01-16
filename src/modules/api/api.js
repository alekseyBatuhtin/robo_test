import superagent from 'superagent';
import switchFn from 'switch-fn';

import { GET_BOOK_LIST } from '../book/actions';
import { GET_SUGGESTIONS } from '../suggestions/actions';

const API_KEY = 'AIzaSyBdgFgmTO_2OL-mJNyxE37UfjyGj_KeM3A';

function withHeader(req, apiKey) {
  req = req.query({ apiKey });

  return req;
}

export const request = (url, withKey) => (withKey ? withHeader(superagent.get(url), API_KEY) : superagent.get(url));

const RestClient = () => {
  const convertRESTRequestToHTTP = (type, { query, page = 1 }) => {
    let url = '';
    let req = {};
    switchFn({
      [GET_BOOK_LIST]() {
        url = `/books/v1/volumes/?q=${query}&maxResults=20&startIndex=${page}`;
        req = request(url, true);
      },

      [GET_SUGGESTIONS]() {
        url = `/complete/search?q=${query}&client=firefox&hl=ru`;
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
