import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';

const styles = {
  item: {
    border: '1px solid rgba(0, 0, 0, 0.42)',
    borderRadius: '4px',
    marginBottom: '16px',
    padding: '6px',
    backgroundColor: '#FFFFFF'
  },
  content: {
    display: 'flex',
    maxHeight: '250px'
  },
  image: {
    width: '128px'
  },
  description: {
    maxHeight: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  infoBook: {
    padding: '0 8px'
  },
  commonInfo: {
    display: 'flex',
    '& p': { margin: '0 10px 0 0' }
  },
  '@media (max-width: 420px)': {
    image: {
      width: '64px'
    },
    infoBook: {
      fontSize: '.7em'
    }
  }
};

const enhance = withStyles(styles);

const ListItem = ({ classes, item, handleOpenOverlay }) => (
  <li className={classes.item}>
    <h3 onClick={event => handleOpenOverlay(event, item.id)}>{item.title}</h3>
    <div className={classes.content}>
      <a href={item.infoLink} target="_blank">
        <img className={classes.image} src={(item.imageLinks && item.imageLinks.thumbnail) || ''} alt="Preview" />
      </a>
      <div className={classes.infoBook}>
        <div className={classes.commonInfo}>
          <p>{(item.authors && item.authors[0]) || null}</p>
          <p>{(item.publishedDate && item.publishedDate.split('-')[0]) || null}</p>
        </div>
        <p className={classes.description}>{item.description || null}</p>
      </div>
    </div>
  </li>
);

export default enhance(ListItem);
