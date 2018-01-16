import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import { Table, Paper, withStyles } from 'material-ui';

import Head from './head';
import Body from './body';
import Footer from './footer';
import SearchBar from '../search-bar';

import { getBookList } from '../../modules/book/actions';
import { getSuggestions } from '../../modules/suggestions/actions';

const mapStateToPRops = ({ book, book: { totalBooks } }) => ({ data: book.data.map(_ => _.volumeInfo), totalBooks });
const mapDisaptchToProps = { getBookList, getSuggestions };

const styles = {
  table: {},
  '@media (max-width: 680px)': {
    table: { border: 0 }
  }
};

const enhance = compose(
  connect(mapStateToPRops, mapDisaptchToProps),
  withState('query', 'setQuery', ''),
  withStyles(styles)
);

const BaseTable = ({ data, query, setQuery, totalBooks, classes }) => (
  <Paper>
    <SearchBar value={query} setValue={setQuery} />
    <Table className={classes.table}>
      <Head />
      <Body data={data} />
      <Footer count={totalBooks} query={query} />
    </Table>
  </Paper>
);

BaseTable.propTypes = {
  data: PropTypes.array
};

export default enhance(BaseTable);
