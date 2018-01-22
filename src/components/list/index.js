import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';

import ListItem from './list-item';

const styles = {
  list: {
    width: '100%',
    maxWidth: '650px'
  }
};

const enhance = withStyles(styles);

const List = ({ data, classes, handleOpenOverlay }) => (
  <ul className={classes.list}>
    {(data && data.map(item => <ListItem key={item.id} item={item} handleOpenOverlay={handleOpenOverlay} />)) || null}
  </ul>
);

export default enhance(List);
