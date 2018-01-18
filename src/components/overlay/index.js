import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, Slide, AppBar, Toolbar, Typography, IconButton, withStyles } from 'material-ui';
import { compose, withProps } from 'recompose';

import List from './list';

import parse from './utils';

const styles = {
  content: {
    marginTop: '80px',
    display: 'flex'
  },
  image: {
    minWidth: '128px'
  },
  '@media (max-width: 680px)': {
    content: {
      flexDirection: 'column',
      '& a': {
        margin: '0 auto'
      }
    }
  }
};
const enhance = compose(
  withProps(({ singleBook }) => {
    const parseMask = [
      'title',
      'subtitle',
      'authors',
      'description',
      'publisher',
      'publishedDate',
      'categories',
      'printType',
      'language',
      'pageCount',
      'industryIdentifiers'
    ];

    return {
      infoLink: singleBook.infoLink,
      imageLinks: singleBook.imageLinks,
      saleInfo: singleBook.saleInfo,
      previewLink: singleBook.previewLink,
      singleBook: parse(singleBook, parseMask)
    };
  }),
  withStyles(styles)
);

const Overlay = ({ open, handleCloseOverlay, singleBook, saleInfo, infoLink, previewLink, imageLinks, classes }) => (
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
      <a href={infoLink} target="_blank">
        <img src={(imageLinks && imageLinks.thumbnail) || ''} alt="Preview" />
      </a>
      <List data={singleBook} saleInfo={saleInfo} previewLink={previewLink} />
    </div>
  </Dialog>
);

export default enhance(Overlay);

function Transition(props) {
  return <Slide direction="left" {...props} />;
}
