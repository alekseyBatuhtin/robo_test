import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, Slide, AppBar, Toolbar, Typography, IconButton, withStyles } from 'material-ui';
import List from './list';

const styles = {
  content: {
    marginTop: '80px',
    display: 'flex'
  },
  image: {
    height: 'auto'
  }
};
const enhance = withStyles(styles);

const Overlay = ({ open, handleCloseOverlay, singleBook, classes }) => (
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
    <div className={classes.content}>
      <a href={singleBook && singleBook.infoLink} target="_blank">
        <img src={(singleBook && singleBook.imageLinks && singleBook.imageLinks.thumbnail) || ''} alt="Preview" />
      </a>
      <List data={singleBook} />
    </div>
  </Dialog>
);

export default enhance(Overlay);

function Transition(props) {
  return <Slide direction="left" {...props} />;
}
