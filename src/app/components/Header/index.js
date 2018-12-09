import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Logo from '../../Images/Homelike-Logo.png';
import SearchInput from './Search';
import { styles, Wrapper, LogoComponent } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <LogoComponent source={Logo} />
        <SearchInput />
        <Text>Menu</Text>
      </Wrapper>
    );
  }
}
