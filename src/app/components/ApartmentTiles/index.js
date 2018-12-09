import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { CLOUDINARY } from '../../config/global';
import {
  TileWrapper,
  Image,
  TextWrapper,
  TitleText,
  Text,
  Price,
  PriceWrapper,
} from './styles';

export default class ApartmentTile extends PureComponent {
  render() {
    const {
      apartment: {
        photo,
        descriptions,
        pricing: { price, currency },
        address: { locality, postalCode },
      },
    } = this.props;

    const apartmentImage = photo[0].path;
    const apartmentDescription = descriptions.en.title;
    const activeCurrency = currency === 'EUR' ? '€' : '£';
    const apartmentPrice = `${price} ${activeCurrency}`;

    return (
      <TileWrapper key={Math.random()}>
        <Image source={{ uri: `${CLOUDINARY}/${apartmentImage}` }} />
        <TextWrapper>
          <TitleText>{apartmentDescription}</TitleText>
          <Text>
            {postalCode} {locality}
          </Text>
          <PriceWrapper>
            <Price>{apartmentPrice}</Price>
          </PriceWrapper>
        </TextWrapper>
      </TileWrapper>
    );
  }
}
