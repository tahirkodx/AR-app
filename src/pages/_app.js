import Head from 'next/head';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';
import { SSRProvider, ThemeProvider } from 'react-bootstrap';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { HydrationProvider } from 'react-hydration-provider';
import LoaderProvider from '@provider/loader/loaderProvider';
import WhatsAppChat from "src/Component/WhatsAppChat/WhatsAppChat";
import { langName } from '@utils/i18n';

import '../../styles/globals.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../styles/bootstrapTheme/font.scss';

const langCode = langName === 'ar';
if (langCode) {
  import('bootstrap/dist/css/bootstrap.rtl.min.css');
  import('../../styles/bootstrapTheme/theme_RTL.scss');
}


const MyApp = (props) => {
  const { i18n } = useTranslation();
  const { locale } = useRouter();

  React.useEffect(() => {
    document.body.dir = locale.indexOf("-ar") !== -1 ? "rtl" : "ltr";
  }, [i18n, locale]);

  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);




 
  return (
      <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="white" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Sedar Global" />
        <title>Sedar Global</title>
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js" async></script>
      </Head> 
       
      {locale != 'default' && <WhatsAppChat />}
        <ThemeProvider dir={locale.indexOf("-ar") !== -1 ? "rtl" : "ltr"}>
         
        <LoaderProvider>
          <HydrationProvider>
            <SSRProvider>
              
                {getLayout(<Component {...pageProps} />)}
             
            </SSRProvider>
          </HydrationProvider>
        </LoaderProvider>
      </ThemeProvider>
      </React.Fragment>
  );

};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default appWithTranslation(MyApp);
