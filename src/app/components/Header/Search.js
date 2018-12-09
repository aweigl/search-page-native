import React, { Component } from 'react';
import { compose, grapql } from 'react-apollo';

import { TextInput, SearchView } from './styles';

export default class SearchInput extends Component {
  render() {
    return (
      <SearchView>
        <TextInput placeholder="search for a city..." />
      </SearchView>
    );
  }
}
