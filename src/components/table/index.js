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
  table: {
    width: '100%',
    height: '100%',
    display: 'block',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    position: 'relative',
    '& tbody': {
      display: 'block',
      height: '500px',
      overflowY: 'auto',
      '& tr': {
        display: 'table',
        width: '100%',
        tableLayout: 'fixed'
      }
    },
    '& thead, & tfoot': {
      display: 'table',
      width: '100%',
      tableLayout: 'fixed'
    }
  },
  '@media (max-width: 680px)': {
    table: {
      '& thead': {
        border: 'none',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px'
      },
      '& tbody tr': {
        height: 'auto',
        display: 'block',
        marginBottom: '.625em',
        '& td': {
          display: 'block',
          textAlign: 'right',
          paddingRight: '24px'
        }
      },
      '& tbody tr td:before': {
        content: 'attr(data-label)',
        paddingRight: '24px',
        float: 'left'
      },
      '& tbody tr td:last-child': {
        paddingRight: '24px'
      }
    }
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
