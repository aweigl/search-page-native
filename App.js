import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { KeepAwake, registerRootComponent } from 'expo';

import { env } from './src/app/config/env';
import SearchContainer from './src/app/Views/Search';
import FetchContainer from './src/app/containers/FetchContainer';
import rootReducers from './src/app/reducers';

const accessToken = '';

const client = new ApolloClient({
  uri: env.graphqlUrl,
  fetchOptions: {
    credentials: 'include',
  },
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });
  },
});

const store = createStore(rootReducers);

console.log('reload?');

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FetchContainer>
          <SearchContainer />
        </FetchContainer>
      </Provider>
    );
  }
}

KeepAwake.activate();

registerRootComponent(App);
