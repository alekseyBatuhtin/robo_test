import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { withStyles } from 'material-ui';
import { getSuggestions, clearSuggestions } from '../../modules/suggestions/actions';
import { getBookList } from '../../modules/book/actions';

import Input from './input';
import { IconButton } from 'material-ui';
import Search from 'material-ui-icons/Search';
import { Suggestion, SuggestionContainer } from './suggestion';

const styles = theme => ({
  form: {
    display: 'flex',
    width: '100%',
    maxWidth: '650px',
    marginBottom: '10px'
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 'auto'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 100,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  textField: {
    width: '100%'
  }
});
const mapStateToProps = ({ suggestions }) => ({ suggestions });
const mapDispatchToProps = { getSuggestions, clearSuggestions, getBookList };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChange: ({ setValue }) => (event, { newValue }) => {
      setValue(newValue);
    },
    handleSuggestionSelected: ({ getBookList }) => (event, { suggestionValue }) => {
      getBookList(suggestionValue);
    },
    handleSubmit: ({ getBookList, value }) => event => {
      event.preventDefault();
      getBookList(value);
    },
    handleSuggestionsFetchRequested: ({ getSuggestions }) => ({ value }) => getSuggestions(value),
    handleSuggestionsClearRequested: ({ clearSuggestions }) => () => clearSuggestions()
  }),
  withStyles(styles)
);

const SearchBar = props => {
  const {
    classes,
    handleChange,
    value,
    suggestions,
    handleSuggestionsFetchRequested,
    handleSuggestionsClearRequested,
    handleSuggestionSelected,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderInputComponent={Input}
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        onSuggestionSelected={handleSuggestionSelected}
        renderSuggestion={Suggestion}
        renderSuggestionsContainer={SuggestionContainer}
        getSuggestionValue={getSuggestionValue}
        inputProps={{
          autoFocus: false,
          classes,
          placeholder: 'Search a book',
          type: 'search',
          value,
          onChange: handleChange
        }}
      />
      <IconButton type="submit" color="primary">
        <Search />
      </IconButton>
    </form>
  );
};

export default enhance(SearchBar);

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

/* function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
} */
