import React, { PropTypes } from 'react';

const Search = ({ inputClick }) => {
  let input;
  return (
    <div>
      <h1>Redux Search Gif</h1>
      <br />
      <h3>What kinda gif you want?</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          inputClick(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <br />
        <br />
        <button type="submit">
          Search!
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  inputClick: PropTypes.func,
};

export default Search;
