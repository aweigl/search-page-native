import styled, { css } from '@emotion/native';

export const TileWrapper = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 3px;
  max-width: 100%;
  font-size: 14px;
  padding: 8px;
  text-decoration: none,
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px
`;

export const TextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  overflow: auto;
`;

export const TitleText = styled.Text`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  max-width: 88%;
  font-size: 10px;
`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;
  margin-right: 4px;
  border-radius: 2px;
`;

export const Text = styled.Text`
  font-size: 8px;
  margin-bottom: 8px;
`;

export const PriceWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
`;

export const Price = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;
