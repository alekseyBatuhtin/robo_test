import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, TableHead, TableRow } from 'material-ui';

const BaseTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell scope="col">{'Title'}</TableCell>
      <TableCell scope="col">{'Author'}</TableCell>
      <TableCell scope="col">{'Published Date'}</TableCell>
      <TableCell scope="col">{'Language'}</TableCell>
    </TableRow>
  </TableHead>
);

export default BaseTableHead;
