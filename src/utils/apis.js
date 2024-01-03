
import axiosInstance from '@utils/axios';
import { detect_country } from '@utils/i18n';
import { countries_url_path } from '@utils/countriesData';


export async function pageAPI({ pageName, country, lang, locale, staticPage }) {
    
  const cn_iso = countries_url_path[locale] ? countries_url_path[locale]?.country_code : 'XX';
  
  const pageUrl = staticPage ? staticPage : `content/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&content=${pageName}&visitorId=&userId=`;

  const [response, headerRes, footerRes] = await Promise.all([
    axiosInstance.get(pageUrl),
    axiosInstance.get(`header/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&visitorId=&userId=&content=header&slug_url=header&cn_iso=${cn_iso}&detect_country=${detect_country}&page_name=${pageName}`),
    axiosInstance.get(`footer/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&content=footer&slug_url=footer&cn_iso=${cn_iso}`),

  ]);
  
  return {
    headerData: headerRes.data,
    footerData: footerRes.data,
    page: staticPage ? response?.data?.data?.children : response?.data?.result?.COMPONENT
  };
}