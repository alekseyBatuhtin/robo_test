import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, Slide, AppBar, Toolbar, Typography, IconButton } from 'material-ui';

const Overlay = ({ open, handleCloseOverlay }) => (
  <Dialog fullScreen={true} open={open} onClose={handleCloseOverlay} transition={Transition}>
    <AppBar>
      <Toolbar>
        <IconButton color="contrast" onClick={handleCloseOverlay} aria-label="Close">
          {'X'}
        </IconButton>
        <Typography type="title" color="inherit">
          {'Info'}
        </Typography>
      </Toolbar>
    </AppBar>
    <p>{'Overlay'}</p>
  </Dialog>
);

export default Overlay;

function Transition(props) {
  return <Slide direction="left" {...props} />;
}
