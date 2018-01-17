import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { TableCell, TableRow, TableBody } from 'material-ui';

const styles = {
  root: {
    cursor: 'pointer'
  },
  body: {
    position: 'relative'
  },
  date: {
    whiteSpace: 'nowrap'
  },
  emptyRow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  emptyCell: {
    textAlign: 'center !important',
    fontSize: '1.5em',
    textTransform: 'uppercase',
    border: 0
  }
};

const enhance = withStyles(styles);

const BaseTableBody = ({ data = [], classes, handleOpenOverlay }) => (
  <TableBody className={classes.body}>
    {(data.length &&
      data.map((n, index) => (
        <TableRow hover={true} key={index} className={classes.root} onClick={handleOpenOverlay}>
          <TableCell data-label="Title" space="row">
            {n.title}
          </TableCell>
          <TableCell data-label="Author">{(n.authors && n.authors.join(', ')) || '-'}</TableCell>
          <TableCell data-label="Publish Date" className={classes.date}>
            {n.publishedDate || '-'}
          </TableCell>
          <TableCell data-label="Language">{n.language}</TableCell>
        </TableRow>
      ))) || (
      <TableRow className={classes.emptyRow}>
        <TableCell className={classes.emptyCell}>{'Empty'}</TableCell>
      </TableRow>
    )}
  </TableBody>
);

export default enhance(BaseTableBody);
