import React from 'react';

import { List, ListItem, ListItemText, withStyles } from 'material-ui';
import { startCase } from 'lodash/fp';
const styles = {
  itemList: {
    display: 'flex',
    width: '100%',
    fontSize: '.9em',
    borderBottom: '1px solid black'
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

const BaseList = ({ data, classes }) => (
  <ul>
    {data &&
      Object.keys(data).reduce((acc, item) => {
        acc.push(
          <li key={item} className={classes.itemList}>
            <p className={classes.left}>{startCase(item)}</p>
            <p className={classes.right}>{String(data[item])}</p>
            {/* @@TODO: add parser type of data */}
          </li>
        );
        return acc;
      }, [])}
  </ul>
);

export default enhance(BaseList);
