import dynamic from "next/dynamic";
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config';
import axiosInstance from '@utils/axios';
import { ImportDynamicComponent } from '@components/importDynamicComponent';
import { detect_country, userId } from '@utils/i18n';
import Cookies from "js-cookie";
const Tour = dynamic(() => import("reactour"), { ssr: false });
const Header = dynamic(() => import("src/Component/Header/Header"));
const Footer = dynamic(() => import("src/Component/Footer/Footer"));

export async function getStaticProps(context) {
  const { locale } = context;
  let country = locale && locale?.split('-')[0] || 'uae';
  let lang = locale && locale?.split('-')[1] || 'en';
  const cn_iso = 'AE'; //req?.headers['x-vercel-ip-country'] || req.cookies['cn_iso'];
  
  const user = '';
  const visitor = "";


  
  const [response, footerRes, headerRes, categoryMenu] = await Promise.all([
    axiosInstance.get(`content/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&content=homepage&visitorId=${visitor}&userId=${user}`),
    axiosInstance.get(`footer/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&content=footer&slug_url=footer&cn_iso=${cn_iso}`),
    axiosInstance.get(`header/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&visitorId=${visitor}&userId=${user}&content=header&slug_url=header&cn_iso=${cn_iso}&detect_country=${detect_country}&page_name=homepage`),
    axiosInstance.get(`homepage/category_menu?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&visitorId=${visitor}&userId=${user}&content=homepage&slug_url=homepage&cn_iso=${cn_iso}&detect_country=${detect_country}`)
  ]);

  // Return the data as props
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
      firstData: response.data,
      headerData: headerRes.data,
      footerData: footerRes.data,
      categoryMenu: categoryMenu.data
    },
    // Enable ISR with a revalidation time (in seconds)
    revalidate: 60, // This will revalidate and update the page every 60 seconds
  };
}

const steps = [
  {
    selector: '.ar_tour_btn',
    content: 'Click to open AR View',
  },
]

function Home(props) {
  let showArTour = Cookies.get('arShow');
  
  if(showArTour === undefined) {
    showArTour = true;
  }

  const [arShowStatus] = useState(showArTour);

  const { firstData, categoryMenu } = props;
    return (
      <React.Fragment>
        <div>
          <Header props={props.headerData} />
          <div>
            {
              firstData?.result && firstData?.result?.COMPONENT && firstData?.result?.COMPONENT.map((data, index) => (
                <React.Fragment key={index}>
                  <ImportDynamicComponent url={data.PARENT.component_url} categoryMenu={categoryMenu?.result} {...data.PARENT} />
                </React.Fragment>
              ))
            }
          </div>
          <Footer props={props.footerData} />
        </div>
        {showArTour && <Tour
          steps={steps}
          isOpen={arShowStatus !== 'false'}
          showCloseButton={false}
          showNavigation={false}
          showNavigationNumber={false}
          showNumber={false}
          showButtons={false}
          rounded={0}
          className={'home-mask'}
          onAfterOpen={(target) => (document.body.style.overflowY = 'hidden')}
          onRequestClose={() => console.log('called')} /> }
      </React.Fragment>
    )

}

export default Home;
