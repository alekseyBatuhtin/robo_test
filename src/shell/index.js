import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';

import Table from '../components/table';

const styles = () => ({
  root: {
    padding: '0 20px'
  },
  '@media (max-width: 680px)': {
    root: { padding: 0 }
  }
});

const enhance = withStyles(styles);

const Shell = ({ classes }) => (
  <div className={classes.root}>
    <Table />
  </div>
);

Shell.propTypes = {
  classes: PropTypes.object
};

export default enhance(Shell);
