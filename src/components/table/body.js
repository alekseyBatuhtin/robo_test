import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { TableCell, TableRow, TableBody } from 'material-ui';

const styles = {
  root: {
    cursor: 'pointer'
  }
};

const enhance = withStyles(styles);

const BaseTableBody = ({ data = [], classes }) => (
  <TableBody className={classes.tableBody}>
    {(data.length &&
      data.map((n, index) => (
        <TableRow
          hover={true}
          key={index}
          className={classes.root}
          onClick={() => {
            console.log(n.title);
          }}
        >
          <TableCell space="row">{n.title}</TableCell>
          <TableCell>{(n.authors && n.authors.join(', ')) || '-'}</TableCell>
          <TableCell>{n.publishedDate}</TableCell>
          <TableCell>{n.language}</TableCell>
        </TableRow>
      ))) || (
      <TableRow>
        <TableCell>{'Empty'}</TableCell>
      </TableRow>
    )}
  </TableBody>
);

export default enhance(BaseTableBody);
