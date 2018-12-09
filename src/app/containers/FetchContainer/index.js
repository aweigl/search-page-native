import React, { Component } from 'react';
import axios from 'axios';
import base64 from 'react-native-base64';

import { env } from '../../config/env';
import { CREDS } from '../../config/global';

// const token = Buffer.from(`${CREDS.username}:${CREDS.password}`).toString(
//   'base64'
// );

const token = base64.encode(`${CREDS.username}:${CREDS.password}`);

const instance = axios.create({
  baseURL: env.indexApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  },
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

class FetchContainer extends Component {
  state = {
    allApartments: [],
    totalApartments: 0,
  };

  async componentDidMount() {
    try {
      const response = await instance.get(
        '/search?country=DE&east=7.001305669080978&lat=50.937531&lng=6.9602786&locality=cologne&mapLimit=24&north=50.978997759251996&south=50.896027230007775&west=6.919251530894826'
      );
      // cancelToken: new this.CancelToken(cancel => {
      //   instance.cancel = cancel;
      // }),

      const {
        totalApartments,
        apartments,
        mapApartmentsList,
        queryParams: { lng, lat, north, east, south, west },
      } = response.data;

      this.setState({
        allApartments: apartments,
        totalApartments,
      });
    } catch (error) {
      console.error('THIS IS THE ERROR MESSAGE', error);
    }
  }

  render() {
    const { children } = this.props;
    const { allApartments, totalApartments } = this.state;
    const childComponents = React.Children.map(children, child => {
      return React.cloneElement(child, {
        allApartments,
        totalApartments,
      });
    });
    return childComponents;
  }
}

export default FetchContainer;
