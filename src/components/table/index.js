import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Table, Paper } from 'material-ui';

import Head from './head';
import Body from './body';
import SearchBar from '../search-bar';

import { getBookList } from '../../modules/book/actions';
import { getSuggestions } from '../../modules/suggestions/actions';

const mapStateToPRops = ({ book }) => ({ data: book.data.map(_ => _.volumeInfo) });
const mapDisaptchToProps = { getBookList, getSuggestions };

const enhance = compose(
  connect(mapStateToPRops, mapDisaptchToProps),
  withProps(console.log),
  lifecycle({
    componentDidMount() {
      const { getBookList, getSuggestions } = this.props;
      /*       getSuggestions();
      getBookList(); */
    }
  })
);

const BaseTable = ({ data }) => (
  <Paper>
    <SearchBar />
    <Table>
      <Head />
      <Body data={data} />
    </Table>
  </Paper>
);

BaseTable.propTypes = {
  data: PropTypes.array
};

export default enhance(BaseTable);
