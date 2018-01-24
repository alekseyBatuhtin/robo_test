import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState, withHandlers, onlyUpdateForKeys, withProps } from 'recompose';
import { connect } from 'react-redux';

import { IconButton, withStyles } from 'material-ui';
import ArrowForward from 'material-ui-icons/ArrowForward';
import ArrowBack from 'material-ui-icons/ArrowBack';

import { getBookList } from '../../modules/book/actions';

const styles = {
  root: {
    width: '100%',
    maxWidth: '650px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageNum: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
};

const mapDispatchToProps = { getBookList };

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('page', 'handlePage', 1),
  withHandlers({
    handleOnChangePage: ({ handlePage, query, getBookList }) => (event, page) => {
      getBookList(query, page);
      handlePage(page);
    }
  }),
  onlyUpdateForKeys(['page', 'count']),
  withStyles(styles)
);

const Pagination = ({ classes, page, count, handleOnChangePage }) => (
  <div className={classes.root}>
    <IconButton onClick={event => handleOnChangePage(event, page - 1)} disabled={page === 1} aria-label="Prev Page">
      <ArrowBack />
    </IconButton>
    <span className={classes.pageNum}>{page}</span>
    <IconButton
      onClick={event => handleOnChangePage(event, page + 1)}
      disabled={page >= Math.ceil(count / 20) - 1}
      aria-label="Next Page"
    >
      <ArrowForward />
    </IconButton>
  </div>
);

export default enhance(Pagination);
