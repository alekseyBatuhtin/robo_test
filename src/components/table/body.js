import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { TableCell, TableRow, TableBody } from 'material-ui';

const styles = {
  root: {
    cursor: 'pointer'
  },
  date: {
    whiteSpace: 'nowrap'
  }
};

const enhance = withStyles(styles);

const BaseTableBody = ({ data = [], classes }) => (
  <TableBody>
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
          <TableCell data-label="Title" space="row">
            {n.title}
          </TableCell>
          <TableCell data-label="Author">{(n.authors && n.authors.join(', ')) || '-'}</TableCell>
          <TableCell data-label="Publish Date" className={classes.date}>
            {n.publishedDate}
          </TableCell>
          <TableCell data-label="Language">{n.language}</TableCell>
        </TableRow>
      ))) || (
      <TableRow>
        <TableCell>{'Empty'}</TableCell>
      </TableRow>
    )}
  </TableBody>
);

export default enhance(BaseTableBody);
