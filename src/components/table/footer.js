import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { TableFooter, TablePagination, TableRow } from 'material-ui';
import { getBookList } from '../../modules/book/actions';

const mapDispatchToProps = { getBookList };

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('page', 'handlePage', 0),
  withHandlers({
    handleOnChangePage: ({ handlePage, query, getBookList }) => (event, page) => {
      getBookList(query, page + 1);
      handlePage(page);
    }
  })
);

const Footer = ({ count, page, handleOnChangePage }) => (
  <TableFooter>
    <TableRow>
      <TablePagination
        count={count}
        rowsPerPage={20}
        page={page}
        onChangePage={handleOnChangePage}
        rowsPerPageOptions={[20]}
      />
    </TableRow>
  </TableFooter>
);

export default enhance(Footer);
