import React from 'react';
import PropTypes from 'prop-types';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { MenuItem, Paper } from 'material-ui';

export const Suggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(
          (part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            )
        )}
      </div>
    </MenuItem>
  );
};

export const SuggestionContainer = options => {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} style={{ background: 'white' }}>
      {children}
    </Paper>
  );
};
