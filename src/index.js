import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Feed } from './feed';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box width="100vw" minHeight="100vh" >
        <Feed />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
