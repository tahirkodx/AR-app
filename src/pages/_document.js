import React from 'react';
import Document, { Html, Main, NextScript, Head } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
 

  render() {
    return (
      <Html
        dir={"ltr"}
        lang={"en"}
      >
      <Head>
          {/* {this.props.locale.indexOf("-ar") !== -1 ?
           <>
             <link rel="stylesheet" href="../../styles/bootstrapTheme/theme_RTL.scss" />
           </>
            : 
            ''
         } */}
       

       
       </Head>
        <body>
         
         <Main />
         <NextScript />

       </body>
      </Html>
    );
  }
}

export default MyDocument;

