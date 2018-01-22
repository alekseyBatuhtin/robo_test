import React from 'react';

import List from '../list';
import SearchBar from '../search-bar';
import Overlay from '../overlay';
//import Pagination from '../pagination' @@TODO: custom pagination

import { compose, withState, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import { getBookList } from '../../modules/book/actions';
import { getSuggestions } from '../../modules/suggestions/actions';

const styles = {
  wrap: {
    height: '100%',
    padding: '0 20px'
  }
};

const mapStateToPRops = ({ book, book: { totalBooks } }) => ({
  data: book.data.map(_ => ({ ..._.volumeInfo, id: _.id, saleInfo: _.saleInfo })),
  totalBooks
});
const mapDisaptchToProps = { getBookList, getSuggestions };

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

const Shell = ({
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
    <List data={data} handleOpenOverlay={handleOpenOverlay} />
    {/* <Pagination /> */}
    <Overlay open={openOverlay} handleCloseOverlay={handleCloseOverlay} singleBook={singleBook} />
  </div>
);

export default enhance(Shell);
