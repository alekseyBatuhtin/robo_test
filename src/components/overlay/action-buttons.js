import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Button } from 'material-ui';

const styles = {
  button: {
    width: '50%',
    display: 'block',
    margin: '0 5px',
    maxWidth: '350px',
    textAlign: 'center',
    textTransform: 'none'
  },
  buttonItemList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '10px',
    borderBottom: 0
  },
  '@media (max-width: 680px)': {
    buttonItemList: {
      flexDirection: 'column'
    },
    button: {
      marginTop: '10px !important'
    }
  }
};

const enhance = withStyles(styles);

const ActionButtons = ({ classes, saleInfo, previewLink }) => (
  <li className={`${classes.buttonItemList}`}>
    <Button className={classes.button} raised={true} color="primary" href={previewLink} target="_blank">
      {'Preview'}
    </Button>
    {saleInfo && saleInfo.saleability === 'FOR_SALE' ? (
      <Button className={classes.button} raised={true} color="primary" href={saleInfo.buyLink} target="_blank">
        {`Buy for ${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}`}
      </Button>
    ) : null}
  </li>
);

export default enhance(ActionButtons);
