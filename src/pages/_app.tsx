import React, { Fragment } from 'react';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// types
import type { AppProps } from 'next/app';

// global styles

import '@assets/css/bootstrap.min.css';
import '@assets/css/global.css';
import '@assets/css/style.css';



const MyApp = ({ Component, pageProps }: AppProps) => {
    return(
      <Fragment>
        <Component {...pageProps} />
    </Fragment>
  )
};

export default appWithTranslation(MyApp);