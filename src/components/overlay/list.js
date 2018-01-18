import React from 'react';

import { withStyles } from 'material-ui';
import { startCase } from 'lodash/fp';

import ActionButtons from './action-buttons';

const styles = {
  list: {
    width: '100%',
    marginBottom: '20px'
  },
  itemList: {
    display: 'flex',
    width: '100%',
    fontSize: '.9em',
    borderBottom: '1px solid rgb(235, 235, 235)'
  },
  left: {
    flexBasis: '25%',
    paddingLeft: '8px'
  },
  right: {
    flexBasis: '75%'
  }
};

const enhance = withStyles(styles);

const BaseList = ({ data, classes, saleInfo, previewLink }) => (
  <ul className={classes.list}>
    {data &&
      Object.keys(data).reduce((acc, item) => {
        acc.push(
          <li key={item} className={classes.itemList}>
            <p className={classes.left}>{startCase(item)}</p>
            <p className={classes.right}>{String(data[item])}</p>
          </li>
        );
        return acc;
      }, [])}
    <ActionButtons saleInfo={saleInfo} previewLink={previewLink} />
  </ul>
);

export default enhance(BaseList);
