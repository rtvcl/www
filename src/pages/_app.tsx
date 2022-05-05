import theme from '@/styles/chakra';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/ubuntu';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export interface AppPropsExtends extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsExtends) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
