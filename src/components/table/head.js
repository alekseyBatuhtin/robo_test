import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, TableHead, TableRow } from 'material-ui';

const BaseTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>{'Title'}</TableCell>
      <TableCell>{'Subtitle'}</TableCell>
      <TableCell>{'Author'}</TableCell>
      <TableCell>{'Published Date'}</TableCell>
      <TableCell>{'Language'}</TableCell>
    </TableRow>
  </TableHead>
);

export default BaseTableHead;
