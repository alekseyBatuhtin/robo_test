import { compose, pick } from 'ramda';

const parseToString = obj =>
  Object.keys(obj).reduce((acc, key) => {
    if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string') {
      acc[key] = obj[key].join(', ');
    } else if (key === 'industryIdentifiers') {
      acc[key] = obj[key].map(item => `${item.type}: ${item.identifier}`).join(', ');
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});

const parse = (obj, mask) => compose(parseToString, pick(mask))(obj);

export default parse;
