
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'theme-ui'
import { client } from './client';
const {deep}  =require('@theme-ui/presets');



const tokens={
    ...deep,
    sizes:{container:1024}
};


export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={tokens}>
  <ApolloProvider client={client}>{element}</ApolloProvider>
  </ThemeProvider>
);