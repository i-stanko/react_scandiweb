import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    {
      categories {
        name
        products {
          id
          name
          inStock
        }
      }
    }
  `
}).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, document.getElementById('root'));
