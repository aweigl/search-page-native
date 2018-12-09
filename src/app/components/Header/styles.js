import { StyleSheet } from 'react-native';
import styled, { css } from '@emotion/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 72px;
  padding: 16px;
`;

export const LogoComponent = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const SearchView = styled.View`
  min-width: 60%;
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  font-size: 14px;
  margin: 0;
  color: #4c5b5c;
`;
