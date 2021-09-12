import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';

import '../styles/main.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
