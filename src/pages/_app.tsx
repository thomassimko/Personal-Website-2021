import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';

import '../styles/main.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
