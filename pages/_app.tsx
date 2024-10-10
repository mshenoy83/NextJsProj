// pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';  // Import AppProps from Next.js
import client from '../apollo-client';

const MyApp = ({ Component, pageProps }: AppProps) => {  // Explicitly define the types for Component and pageProps
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
};

export default MyApp;
