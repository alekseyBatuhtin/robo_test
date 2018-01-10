import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import { Grid } from 'material-ui';

import Table from '../components/table';

const styles = () => ({
  root: {
    height: '100vh',
    margin: 0
  },
  item: {
    padding: '0 !important',
    overflow: 'auto',
    height: '100%'
  }
});

const enhance = withStyles(styles);

const Shell = ({ classes }) => (
  <Grid container justify="center" className={classes.root}>
    <Grid item xs={12} md={8} className={classes.item}>
      <Table />
    </Grid>
  </Grid>
);

Shell.propTypes = {
  classes: PropTypes.object
};

export default enhance(Shell);
