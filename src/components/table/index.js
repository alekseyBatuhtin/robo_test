import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Table, withStyles } from 'material-ui';
import { grey } from 'material-ui/colors';

import SearchBar from '../search-bar';
import Head from './head';
import Body from './body';
import Footer from './footer';
import Overlay from '../overlay';

import { getBookList } from '../../modules/book/actions';
import { getSuggestions } from '../../modules/suggestions/actions';

const mapStateToPRops = ({ book, book: { totalBooks } }) => ({
  data: book.data.map(_ => ({ ..._.volumeInfo, id: _.id, saleInfo: _.saleInfo })),
  totalBooks
});
const mapDisaptchToProps = { getBookList, getSuggestions };

const styles = {
  wrap: {
    height: '100%',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column'
  },
  table: {
    width: '100%',
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    position: 'relative',
    backgroundColor: grey[50],
    '& tbody': {
      display: 'block',
      flexBasis: '100%',
      overflowY: 'auto'
    },
    '& tbody tr, & thead, & tfoot': {
      display: 'table',
      width: '100%',
      tableLayout: 'fixed'
    }
  },
  '@media (max-width: 680px)': {
    wrap: {
      padding: 0
    },
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
        float: 'left',
        color: 'rgba(0, 0, 0, 0.54)'
      },
      '& tbody tr td:last-child': {
        paddingRight: '24px'
      }
    }
  }
};

const enhance = compose(
  connect(mapStateToPRops, mapDisaptchToProps),
  withStateHandlers(
    { openOverlay: false, bookId: null },
    {
      handleOpenOverlay: () => (event, id) => ({ openOverlay: true, bookId: id }),
      handleCloseOverlay: () => () => ({ openOverlay: false, bookId: null })
    }
  ),
  withProps(({ data, bookId }) => ({ singleBook: bookId ? data.find(book => book.id === bookId) : {} })),
  withState('query', 'setQuery', ''),
  withStyles(styles)
);

const BaseTable = ({
  data,
  query,
  setQuery,
  totalBooks,
  bookId,
  classes,
  singleBook,
  openOverlay,
  handleOpenOverlay,
  handleCloseOverlay
}) => (
  <div className={classes.wrap}>
    <SearchBar value={query} setValue={setQuery} />
    <Table className={classes.table}>
      <Head />
      <Body data={data} handleOpenOverlay={handleOpenOverlay} />
      <Footer count={totalBooks} query={query} />
    </Table>
    <Overlay open={openOverlay} handleCloseOverlay={handleCloseOverlay} singleBook={singleBook} />
  </div>
);

BaseTable.propTypes = {
  data: PropTypes.array
};

export default enhance(BaseTable);
