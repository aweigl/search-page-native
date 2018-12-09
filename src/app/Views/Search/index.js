import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import Header from '../../components/Header';
import ApartmentTile from '../../components/ApartmentTiles';

const SearchWrapper = styled.View`
  dispolay: flex;
  flex-direction: column;
  padding: 8px;
`;

export default class SearchContainer extends Component {
  render() {
    const { allApartments } = this.props;
    console.log(allApartments[0]);
    return (
      <SearchWrapper>
        <Header />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {allApartments.map(apartment => {
            return <ApartmentTile key={Math.random()} apartment={apartment} />;
          })}
        </ScrollView>
      </SearchWrapper>
    );
  }
}
